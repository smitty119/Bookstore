
import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else if (isNaN(Data.price)) {
        alert("Price must be a number");
      } else {
        const response = await axios.post(
          "http://localhost:3002/books/addbook",
          Data,
          { headers }
        );
        alert(response.data.message);
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-[100%] p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Add Book
      </h1>
      <div className="p-4 bg-zinc-800 rounded">
        <div>
          <label htmlFor="url" className="text-zinc-400">
            Image
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="URL of image"
            name="url"
            required
            value={Data.url}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="title" className="text-zinc-400">
            Title
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Title of the book"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="author" className="text-zinc-400">
            Author
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Author of the book"
            name="author"
            required
            value={Data.author}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price" className="text-zinc-400">
            Price
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Price of the book"
            name="price"
            required
            value={Data.price}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="desc" className="text-zinc-400">
            Description of the book
          </label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            rows="5"
            placeholder="Description of the book"
            name="desc"
            required
            value={Data.desc}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="language" className="text-zinc-400">
            Language
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Language of the book"
            name="language"
            required
            value={Data.language}
            onChange={change}
          />
        </div>
        <button
          className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all"
          onClick={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
