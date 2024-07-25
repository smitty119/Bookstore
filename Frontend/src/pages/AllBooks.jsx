import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";
import Loader from "../components/Loader/Loader";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3002/books/allbooks");
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-8">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="mt-8 px-4 flex-grow">
        <h4 className="text-3xl text-yellow-100">BOOK COLLECTION</h4>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {data.length > 0 ? (
            data.map((item, i) => (
              <div key={i}>
                <BookCard data={item} />
              </div>
            ))
          ) : (
            <div>No books available</div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default AllBooks;

