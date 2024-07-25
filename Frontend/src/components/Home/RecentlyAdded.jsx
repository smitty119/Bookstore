import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";
import axios from "axios";

const RecentlyAdded = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3002/books/recentbooks");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching recently added books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <div className="mt-8 px-4">
      <h4 className="text-3xl text-yellow-100">Latest Arrival </h4>
      {loading && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((item, i) => (
          <div key={i}>
            <BookCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;


