import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <div
      className="h-[75vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/736x/62/be/39/62be39e559b96196d4bc264a949a0e62.jpg)',
      }}
    >
      <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col items-center md:items-start justify-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white-500">
          Discover Your Next Great Book
        </h1>
        <p className="text-base md:text-lg mt-2 text-white-500">
          Unearth captivating stories, enriching knowledge, and endless inspiration in our carefully curated collection of books.
        </p>
        <div className="mt-4">
          <Link
            to="/all-books"
            className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 rounded-full"
          >
            Discover Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
