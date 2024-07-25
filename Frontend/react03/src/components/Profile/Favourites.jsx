// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import BookCard from "../BookCard/BookCard";

// // const Favourites = () => {
// //   const [favouriteBooks, setFavouriteBooks] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //   };

// //   useEffect(() => {
// //     const fetch = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3002/favourite/get-favourite-books", { headers });
// //         setFavouriteBooks(response.data.data);
// //       } catch (error) {
// //         console.error("Error fetching favourite books:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetch();
// //   }, [headers]);

// //   return (
// //     <>
// //       {loading && (
// //         <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full bg-white">
// //           Loading...
// //         </div>
// //       )}
// //       {favouriteBooks.length === 0 && !loading && (
// //         <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full bg-white">
// //           No Favourite Books
// //         </div>
// //       )}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //         {favouriteBooks &&
// //           favouriteBooks.map((item, i) => (
// //             <div key={i}>
// //               <BookCard data={item} favourite={true} />
// //             </div>
// //           ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Favourites;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Typography, Grid, CircularProgress } from "@mui/material";
// import BookCard from "../BookCard/BookCard";

// const Favourites = () => {
//   const [favouriteBooks, setFavouriteBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/favourite/get-favourite-books", { headers });
//         setFavouriteBooks(response.data.data);
//       } catch (error) {
//         console.error("Error fetching favourite books:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetch();
//   }, [headers]);

//   return (
//     <Box
//       sx={{
//         padding: 3,
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'background.paper',
//       }}
//     >
//       {loading && (
//         <CircularProgress />
//       )}
//       {!loading && favouriteBooks.length === 0 && (
//         <Typography
//           variant="h4"
//           sx={{
//             color: 'text.secondary',
//             textAlign: 'center',
//             mt: 4,
//           }}
//         >
//           No Favourite Books
//         </Typography>
//       )}
//       <Grid
//         container
//         spacing={4}
//         sx={{
//           mt: 4,
//         }}
//       >
//         {!loading && favouriteBooks.length > 0 && favouriteBooks.map((item, i) => (
//           <Grid item xs={12} sm={6} md={4} key={i}>
//             <BookCard data={item} favourite={true} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Favourites;
/ import React, { useState } from "react";

// import { useEffect } from "react";

// import axios from "axios";

// import BookCard from "../BookCard/BookCard";

// const Favourites = () => {

// const [avouri setFavouriteBooks] useState();

// const headers = {

// id: localStorage.getItem("id"),

// authorization: Bearer ${localStorage.getItem("token")}`, };

// useEffect(() => {

// const fetch async () => {

// const response await axios.get(

// "http://localhost:1000/api/v1/get-favourite-books", { headers)

// );

// setFavouriteBooks(response.data.data);

// };

// fetch();

// }, [FavouriteBooks]);

// return (

// <div className="grid grid-cols-3 gap-4">

// {FavouriteBooks && FavouriteBooks.map((items, i) -> (

// <div key-{1}>

// <BookCard data={items) favourite={true} />






// const Favourites = () => {

// };

// Favourites.jsx >[

// ] Favourites>

// I

// FavouriteBooks.map() callback

// useEffect(() => {

// const fetch async () => {

// const response await axios.get(

// "http://localhost:1000/api/v1/get-favourite-books",

// { headers }

// );

// setFavouriteBooks (response.data.data);

// );

// setFavouriteBooks (response.data.data); };

// fetch();

// }, [FavouriteBooks]);

// return (

// <>>

// (FavouriteBooks.length==0&& (

// div className="text-5xl font-semibold h-[100%][text-zinc-500 flex items-center justify-center w-full bg-1

// No Favourite Books

// </div>

// )}

// <div className="grid grid-cols-3 gap-4">

// {FavouriteBooks &&

// FavouriteBooks.map((items, i) -> (

// <div key-{1}>

// <BookCard data-{items} favourite={true} />

// </div>

// ))}

// </div>

// </>
// export default Favourites;
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const Favourites = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-favourite-books", { headers });
        setFavouriteBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching favourite books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [headers]);

  return (
    <>
      {loading && (
        <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full bg-white">
          Loading...
        </div>
      )}
      {favouriteBooks.length === 0 && (
        <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full bg-white">
          No Favourite Books
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favouriteBooks &&
          favouriteBooks.map((item, i) => (
            <div key={i}>
              <BookCard data={item} favourite={true} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Favourites;

