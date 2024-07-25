// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateBook = () => {
//   const [data, setData] = useState({
//     url: "",
//     title: "",
//     author: "",
//     price: "",
//     desc: "",
//     language: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   const change = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const submit = async () => {
//     try {
//       if (
//         data.url === "" ||
//         data.title === "" ||
//         data.author === "" ||
//         data.price === "" ||
//         data.desc === "" ||
//         data.language === ""
//       ) {
//         alert("All fields are required");
//       } else {
//         const response = await axios.put(
//           `http://localhost:3002/books/updatebook/${id}`,
//           data,
//           { headers }
//         );
//         setData({
//           url: "",
//           title: "",
//           author: "",
//           price: "",
//           desc: "",
//           language: "",
//         });
//         alert(response.data.message);
//         navigate(`/view-book-details/${id}`);
//       }
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3002/books/bookbyid/${id}`);
//         setData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching book data:", error);
//         setLoading(false);
//       }
//     };

//     fetch();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="bg-zinc-900 h-full p-0 md:p-4">
//       <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//         Update Book
//       </h1>
//       <div className="p-4 bg-zinc-800 rounded">
//         <div>
//           <label htmlFor="url" className="text-zinc-400">
//             Image
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="URL of image"
//             name="url"
//             required
//             value={data.url}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="title" className="text-zinc-400">
//             Title
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Title of the book"
//             name="title"
//             required
//             value={data.title}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="author" className="text-zinc-400">
//             Author
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Author of the book"
//             name="author"
//             required
//             value={data.author}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="price" className="text-zinc-400">
//             Price
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Price of the book"
//             name="price"
//             required
//             value={data.price}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="desc" className="text-zinc-400">
//             Description of the book
//           </label>
//           <textarea
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             rows="5"
//             placeholder="Description of the book"
//             name="desc"
//             required
//             value={data.desc}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="language" className="text-zinc-400">
//             Language
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Language of the book"
//             name="language"
//             required
//             value={data.language}
//             onChange={change}
//           />
//         </div>
//         <button
//           className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all"
//           onClick={submit}
//         >
//           Update Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateBook;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const [data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id, // This header is required for the update request
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        data.url === "" ||
        data.title === "" ||
        data.author === "" ||
        data.price === "" ||
        data.desc === "" ||
        data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.put(
          `http://localhost:3002/books/updatebook`,
          data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
        navigate(`/view-book-details/${id}`);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/books/updatebook/${id}`);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-zinc-900 h-full p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Update Book
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
            value={data.url}
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
            value={data.title}
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
            value={data.author}
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
            value={data.price}
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
            value={data.desc}
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
            value={data.language}
            onChange={change}
          />
        </div>
        <button
          className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all"
          onClick={submit}
        >
          Update Book
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;

