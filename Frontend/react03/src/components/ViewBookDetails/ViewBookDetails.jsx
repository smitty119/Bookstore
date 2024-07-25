// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Loader from "../Loader/Loader";
// // import { useParams } from "react-router-dom";
// // import { GrLanguage } from "react-icons/gr";
// // import { FaHeart, FaShoppingCart, FaEdit } from "react-icons/fa";
// // import { MdOutlineDelete } from "react-icons/md";
// // import { useSelector } from "react-redux";

// // const ViewBookDetails = () => {
// //   const { id } = useParams();
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
// //   const role = useSelector((state) => state.auth.role);

// //   useEffect(() => {
// //     const fetch = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:3002/books/bookbyid/${id}`);
// //         setData(response.data.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching book data:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetch();
// //   }, [id]);

// //   const handleFavourite = async () => {
// //     const headers = {
// //       id: localStorage.getItem("id"),
// //       authorization: `Bearer ${localStorage.getItem("token")}`,
// //       bookid: id,
// //     };

// //     try {
// //       const response = await axios.put("http://localhost:3002/books/favouritebook", {}, { headers });
// //       console.log(response);
// //     } catch (error) {
// //       console.error("Error adding book to favourite:", error);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="w-full h-full flex items-center justify-center">
// //         <Loader />
// //       </div>
// //     );
// //   }

// //   if (!data) {
// //     return (
// //       <div className="w-full h-full flex items-center justify-center">
// //         <p className="text-zinc-400">Book data not found.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="px-12 py-8 bg-zinc-900 flex gap-8">
// //       <div className="bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex items-center justify-center">
// //         <img src={data.url} alt="Book cover" className="h-[70vh]" />
// //       </div>

// //       <div className="p-4 w-3/6">
// //         <h1 className="text-4xl text-zinc-300 font-semibold">{data.title}</h1>
// //         <p className="text-zinc-400 mt-1">by {data.author}</p>
// //         <p className="text-zinc-500 mt-4 text-xl">{data.desc}</p>
// //         <p className="flex mt-4 items-center justify-start text-zinc-400">
// //           <GrLanguage className="me-3" /> {data.language}
// //         </p>
// //         <p className="mt-4 text-zinc-100 text-3xl font-semibold">
// //           Price: {data.price}
// //         </p>

// //         {isLoggedIn && role === "user" && (
// //           <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0">
// //             <button className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 text-red-500 flex" onClick={handleFavourite}>
// //               <FaHeart /> {" "}
// //               <span className="ms-4 block lg:hidden">Favourites</span>
// //             </button>
// //             <button className="text-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8 bg-blue-500 flex">
// //               <FaShoppingCart /> {" "}
// //               <span className="ms-4 block lg:hidden">Add to cart</span>
// //             </button>
// //           </div>
// //         )}

// //         {isLoggedIn && role === "admin" && (
// //           <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0">
// //             <button className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 text-red-500 flex">
// //               <FaEdit /> {" "}
// //               <span className="ms-4 block lg:hidden">Edit</span>
// //             </button>
// //             <button className="text-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8 bg-red-500 flex">
// //               <MdOutlineDelete /> {" "}
// //               <span className="ms-4 block lg:hidden">Delete Book</span>
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewBookDetails;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader";
// import { useParams } from "react-router-dom";
// import { GrLanguage } from "react-icons/gr";
// import { FaHeart, FaShoppingCart, FaEdit } from "react-icons/fa";
// import { MdOutlineDelete } from "react-icons/md";
// import { useSelector } from "react-redux";
// import { Container, Box, Typography, Button, IconButton, Alert } from "@mui/material";

// const ViewBookDetails = () => {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const role = useSelector((state) => state.auth.role);

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

//   const handleFavourite = async () => {
//     const headers = {
//       id: localStorage.getItem("id"),
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//       bookid: id,
//     };

//     try {
//       const response = await axios.put("http://localhost:3002/books/favouritebook", {}, { headers });
//       console.log(response);
//     } catch (error) {
//       console.error("Error adding book to favourite:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Loader />
//       </Container>
//     );
//   }

//   if (!data) {
//     return (
//       <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Typography color="textSecondary">Book data not found.</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ display: 'flex', gap: 4, mt: 4 }}>
//       <Box
//         sx={{
//           flex: 1,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           bgcolor: 'background.paper',
//           borderRadius: 2,
//           boxShadow: 3,
//           p: 2,
//         }}
//       >
//         <img
//           src={data.url}
//           alt="Book cover"
//           style={{ height: '80vh', objectFit: 'cover', borderRadius: 8 }}
//         />
//       </Box>

//       <Box sx={{ flex: 1, p: 2 }}>
//         <Typography variant="h4" color="textPrimary" gutterBottom>
//           {data.title}
//         </Typography>
//         <Typography variant="h6" color="textSecondary" gutterBottom>
//           by {data.author}
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           {data.desc}
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           <GrLanguage style={{ marginRight: 8 }} /> {data.language}
//         </Typography>
//         <Typography variant="h5" color="textPrimary">
//           Price: {data.price}
//         </Typography>

//         {isLoggedIn && role === "user" && (
//           <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
//             <IconButton
//               color="error"
//               onClick={handleFavourite}
//               sx={{
//                 borderRadius: '50%',
//                 backgroundColor: 'white',
//                 '&:hover': {
//                   backgroundColor: 'red',
//                   color: 'white',
//                 },
//               }}
//             >
//               <FaHeart style={{ fontSize: '2rem' }} />
//             </IconButton>
//             <IconButton
//               color="primary"
//               sx={{
//                 borderRadius: '50%',
//                 backgroundColor: 'white',
//                 '&:hover': {
//                   backgroundColor: 'blue',
//                   color: 'white',
//                 },
//               }}
//             >
//               <FaShoppingCart style={{ fontSize: '2rem' }} />
//             </IconButton>
//           </Box>
//         )}

//         {isLoggedIn && role === "admin" && (
//           <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
//             <IconButton
//               color="warning"
//               sx={{
//                 borderRadius: '50%',
//                 backgroundColor: 'white',
//                 '&:hover': {
//                   backgroundColor: 'yellow',
//                   color: 'black',
//                 },
//               }}
//             >
//               <FaEdit style={{ fontSize: '2rem' }} />
//             </IconButton>
//             <IconButton
//               color="error"
//               sx={{
//                 borderRadius: '50%',
//                 backgroundColor: 'white',
//                 '&:hover': {
//                   backgroundColor: 'red',
//                   color: 'white',
//                 },
//               }}
//             >
//               <MdOutlineDelete style={{ fontSize: '2rem' }} />
//             </IconButton>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default ViewBookDetails;
// Import React, { useEffect, useState } from "react";

// import axios from "axios";

// Import Loader from "../Loader/Loader";

// import { useParams } from "react-router-dom";

// Import { GrLanguage } from "react-icons/gr";

// import { FaHeart } from "react-icons/fa";

// import { FaShopping Cart } from "react-icons/fa";

// import { useSelector } from "react-redux";

// const ViewDataDetails() => {

// const {id} useParams();

// const [Data, setData] useState();

// const isLoggedIn useSelector((state) => state.auth.isLoggedIn)

// const role useSelector(state) -> state.auth.role):

// useEffect(() => {

// const fetch async () => {

// const response await axios.get(

// http://localhost:1000/api/v1/get-book-by-id/$(id)

// );

// setData(response.data.data);

// };

// fetch();

// }, []);



// return (

// (Data && (

// <div className="px-4 md:px-12 py-8bg-zinc-900 flex flex-col md: flex-row gap-8 itms-start">

// <div className" w-full lg:w-3/6 "></div>
// {" "}

// <div className="flex justify-around bg-zinc-800 p-12 rounded">

// {""}

// <img

// src={Data.url}

// alt="/"

// className="h-[50vh] 1g:h-[70vh] rounded object-cover"

// />

// <div className="flex md:flex-col">

// <button className="bg-white rounded-full text-3xl p-3text-red-500">

// <FaHeart />

// </button>

// <button className="bg-white rounded-full text-3x1 p-3 mt-8text-blue-500">

// <FaShopping Cart />

// </button>

// </div>

// </div>

// </div>

// <div className="p-4 w-full lg:w-3/6">

// <h1 className="text-4x1text-zinc-300 font-semibold">

// {Data.title}

// </h1>

// <p className="text-zinc-400 mt-1">by (Data.author></p>

// <p className="text-zinc-500 mt-4 text-xl">{Data.desc}</p>
// Data && (

// div className="px-4 md:px-12 py-8bg-zinc-900 flex flex-col lg:flex-row gap-8 itms-start"> <

// <div className=" w-full lg:w-3/6 ">

// {""}

// <div className="flex flex-col lg:flex-row justify-around bg-zinc-800 p-12 rounded">

// {""}

// <img

// src={Data.url}

// alt="/"

// className="h-[50vh] md:h-[60vh] lg:h-[70vh] rounded "

// />

// {isLoggedIn === true && role --- "user" &&(

// <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0

// <button className="bg-white rounded 1g: rounded-full text-4x1 lg:text-3xl p-3text-red-500 flex

// <FaHeart />{" "}

// <span className="ms-4 block lg:hidden">Favourites</span>

// </button>

// <button className="text-white rounded 1g: rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8b

// <FaShoppingCart />{" "}

// <span className="ms-4 block 1g:hidden">Add to cart</span>

// </button>

// </div>

// )}

// {isLoggedIn == true && role === "admin" && (

// <div className="flex flex-row lg:flex-col items-center justify-between 1g:justify-start mt-8 lg:mt-0
// {isLoggedIn = true && role "admin" && (

// <div className "flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0

// <button className="bg-white rounded lg:rounded-full text-4x1 lg:text-3x1 p-3text-red-500 flex

// <FaEdit />(""}

// <span className="ms-4 block 1g:hidden">Edit</span>

// </button>

// <button className="text-white rounded lg: rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8b

// <MdOutlineDelete />

// <span className="ms-4 block lg:hidden">Delete Book</span>

// </button>

// </div>

// )}

// </div>

// I

// </div>

// <div className="p-4 w-full lg:w-3/6">

// <h1 className="text-4xl text-zinc-300 font-semibold">

// {Data.title}

// </h1>

// tu cloreName "text-zinc-400 mt-1">hy (Data.author></a>
// const role useSelector((state) => state.auth.role);

// useEffect (() => {

// const fetch async () => {

// const response = await axios.get(

// http://localhost:1000/api/v1/get-book-by-id/${id}"

// );

// I

// setData(response.data.data);

// };

// fetch();

// }, []);

// const headers =

// id: localStorage.getItem("id"),

// authorization: Bearer ${localStorage.getItem("token")}`,

// bookid:

// const handleFavourite async () => {

// const response = await axios.put( "http://localhost:1000/api/v1/add-book-to-favourite",

// {},

// { headers }

// );

// console.log(response);
// }

ViewBookDetails.jsx
// import React, { useEffect, useState } from "react";

// port axios from "axios";

// import Loader from "../Loader/Loader";

// import { useParams } from "react-router-dom";

// const {id} = useParams();

// const ViewBookDetails = () => {

// const [Data, setData] = useState();

// useEffect(() => {

// const fetch = async () => {

// };

// const response = await axios.get(

// );

// http://localhost:3001/books/bookbyid/${id}"

// console.log(response);

// setData(response.data.data);

// fetch();

// }, []);

// return (

// <div className="px-12 py-8 bg-zinc-900 flex gap-8">

// <div className="bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex items-center justify-cent ("")>
// <img src={Data.url} alt="/" className="h-[70vh]" />

// </div>

// <div className="p-4 w-3/6">

// <h1 className="text-4x1 text-zinc-300 font-semibold">{Data.title}</h1>

// <p className="text-zinc-400 mt-1">by (Data.author}</p>


// <p className="text-zinc-500 mt-4 text-xl">(Data.desc)</p> <p className="flex mt-4 items-center justify-starttext-zinc-400">

// <GrLanguage className="me-3" /> {Data.language}

// </p>

// <p className="mt-4 text-zinc-100 text-3x1 font-semibold">

// Price: {Data.price}{" "}

// </p>

// </div>

// </div>

// );

// };

// export default ViewDataDetails;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v1/get-book-by-id/${id}`);
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
      const response = await axios.put("http://localhost:1000/api/v1/add-book-to-favourite", {}, { headers });
      console.log(response);
    } catch (error) {
      console.error("Error adding book to favourite:", error);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-zinc-400">Book data not found.</p>
      </div>
    );
  }

  return (
    <div className="px-12 py-8 bg-zinc-900 flex gap-8">
      <div className="bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex items-center justify-center">
        <img src={data.url} alt="Book cover" className="h-[70vh]" />
      </div>

      <div className="p-4 w-3/6">
        <h1 className="text-4xl text-zinc-300 font-semibold">{data.title}</h1>
        <p className="text-zinc-400 mt-1">by {data.author}</p>
        <p className="text-zinc-500 mt-4 text-xl">{data.desc}</p>
        <p className="flex mt-4 items-center justify-start text-zinc-400">
          <GrLanguage className="me-3" /> {data.language}
        </p>
        <p className="mt-4 text-zinc-100 text-3xl font-semibold">
          Price: {data.price}
        </p>

        {isLoggedIn && role === "user" && (
          <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0">
            <button className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 text-red-500 flex" onClick={handleFavourite}>
              <FaHeart /> {" "}
              <span className="ms-4 block lg:hidden">Favourites</span>
            </button>
            <button className="text-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8 bg-blue-500 flex">
              <FaShoppingCart /> {" "}
              <span className="ms-4 block lg:hidden">Add to cart</span>
            </button>
          </div>
        )}

        {isLoggedIn && role === "admin" && (
          <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start mt-8 lg:mt-0">
            <button className="bg-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 text-red-500 flex">
              <FaEdit /> {" "}
              <span className="ms-4 block lg:hidden">Edit</span>
            </button>
            <button className="text-white rounded lg:rounded-full text-4xl lg:text-3xl p-3 mt-0 lg:mt-8 bg-red-500 flex">
              <MdOutlineDelete /> {" "}
              <span className="ms-4 block lg:hidden">Delete Book</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBookDetails;
