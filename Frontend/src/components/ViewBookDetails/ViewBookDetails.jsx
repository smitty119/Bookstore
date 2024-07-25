import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from '../Loader/Loader';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/books/bookbyid/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };

  const handleFavourite = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3002/favourites/favouritebook",
        {},
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error adding to favourite:", error);
    }
  };

  const handleCart = async () => {
    if (Data.price === "Rented") {
      alert("The book is rented and not available for purchase.");
      return;
    } else {
      try {
        const response = await axios.put(
          "http://localhost:3002/cart/addtocart",
          {},
          { headers }
        );
        alert(response.data.message);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const deleteBook = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:3002/books/deletebook",
        { headers }
      );
      alert(response.data.message);
      navigate("/all-books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      {Data ? (
        <div className='px-4 md:px-12 py-8 bg-white-900 flex flex-col md:flex-row gap-8'>
          <div className='relative h-[50vh] lg:h-[80vh] w-full lg:w-3/6'>
            <div className='bg-zinc-300 flex items-center justify-center p-12 rounded'>
              <img src={Data.url} alt="/" className='max-h-[60vh] lg:max-h-[80vh] rounded' />

              {isLoggedIn === true && role === "user" && (
                <div className='absolute top-4 right-4 flex flex-col space-y-4 mr-5 mt-5'>
                  <button className='bg-white rounded-full text-2xl p-3 text-red-500'
                    onClick={handleFavourite}> <FaHeart /> </button>
                  <button className='bg-white rounded-full text-2xl p-3 text-blue-500'
                    onClick={handleCart}> <FaShoppingCart /></button>
                </div>
              )}
              {isLoggedIn === true && role === "admin" && (
                <div className='absolute top-4 right-4 flex flex-col space-y-4 mr-5 mt-5'>
                  <Link
                    to={`/updatebook/${id}`}
                    className='bg-white rounded-full text-2xl p-3 text-zinc-800'
                  >
                    <FaEdit />{" "}
                  </Link>
                  <button className='bg-white rounded-full text-2xl p-3 text-blue-500'
                    onClick={deleteBook}
                  ><MdOutlineDelete /></button>
                </div>
              )}
            </div>
          </div>
          <div className='p-4 w-full lg:w-3/6'>
            <h1 className='text-4xl text-zinc-900 font-semibold'>{Data.title}</h1>
            <p className='text-zinc-600 mt-1'>by {Data.author}</p>
            <p className='text-zinc-900 mt-4 text-xl'>{Data.desc}</p>
            <p className='flex mt-4 items-center justify-start text-zinc-900'>
              <GrLanguage className="mr-3" /> {Data.language}
            </p>
            <p className='mt-4 text-red-500 text-3xl font-semibold'>
             Rs. {Data.price}
            </p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ViewBookDetails;
