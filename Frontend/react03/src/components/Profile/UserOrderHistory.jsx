import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaHeart, FaShoppingCart, FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Container, Box, Typography, IconButton, Button, CircularProgress } from "@mui/material";

const ViewOrderDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/books/bookbyid/${id}`);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  const handleFavourite = async () => {
    const headers = {
      id: localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`,
      bookid: id,
    };

    try {
      const response = await axios.put("http://localhost:3002/favourites/favouritebook", {}, { headers });
      console.log(response);
    } catch (error) {
      console.error("Error adding book to favourite:", error);
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!data) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography color="textSecondary">Book data not found.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', gap: 4, mt: 4 }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
        }}
      >
        <img
          src={data.url}
          alt="Book cover"
          style={{ height: '80vh', objectFit: 'cover', borderRadius: 8 }}
        />
      </Box>

      <Box sx={{ flex: 1, p: 2 }}>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          by {data.author}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {data.desc}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          <GrLanguage style={{ marginRight: 8 }} /> {data.language}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          Price: {data.price}
        </Typography>

        {isLoggedIn && role === "user" && (
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <IconButton
              color="error"
              onClick={handleFavourite}
              sx={{
                borderRadius: '50%',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'red',
                  color: 'white',
                },
              }}
            >
              <FaHeart style={{ fontSize: '2rem' }} />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '50%',
                backgroundColor: 'blue',
                '&:hover': {
                  backgroundColor: 'darkblue',
                },
              }}
              startIcon={<FaShoppingCart />}
            >
              Add to cart
            </Button>
          </Box>
        )}

        {isLoggedIn && role === "admin" && (
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                borderRadius: '50%',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'yellow',
                  color: 'black',
                },
              }}
              startIcon={<FaEdit />}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: '50%',
                backgroundColor: 'red',
                '&:hover': {
                  backgroundColor: 'darkred',
                },
              }}
              startIcon={<MdOutlineDelete />}
            >
              Delete Book
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ViewOrderDetails;
