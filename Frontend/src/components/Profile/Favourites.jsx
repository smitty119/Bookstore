
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const Favourites = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3002/favourites/favouritelist", { headers });
        setFavouriteBooks(response.data.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch favourite books.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {favouriteBooks.length === 0 ? (
        <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center flex-col w-full">
          No Favourite Books
          {/* <img src="./star.png" alt="star" className="h-[20vh] my-8" /> */}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favouriteBooks.map((items, i) => (
            <div key={i}>
              <BookCard data={items} favourite={true} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Favourites;
