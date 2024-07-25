
// // // export default AllBooks;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import BookCard from "../components/BookCard/BookCard";
// // import Loader from "../components/Loader/Loader";
// // import { Box, Typography, Grid, Card, CardContent, CircularProgress, Alert } from "@mui/material";

// // const AllBooks = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3002/books/recentbooks");
// //         setData(response.data.data);
// //       } catch (err) {
// //         setError(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBooks();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           minHeight: '100vh',
// //         }}
// //       >
// //         <CircularProgress />
// //       </Box>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           minHeight: '100vh',
// //         }}
// //       >
// //         <Alert severity="error">Error fetching data: {error.message}</Alert>
// //       </Box>
// //     );
// //   }

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         bgcolor: 'background.default',
// //         p: 4,
// //       }}
// //     >
// //       <Typography variant="h4" color="text.primary" gutterBottom align="center" sx={{ mb: 4 }}>
// //         Recently Added Books
// //       </Typography>
// //       <Grid container spacing={4}>
// //         {data.length > 0 ? (
// //           data.map((item, index) => (
// //             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
// //               <Card sx={{ bgcolor: 'background.paper', p: 2, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
// //                 <CardContent>
// //                   <BookCard data={item} />
// //                 </CardContent>
// //               </Card>
// //             </Grid>
// //           ))
// //         ) : (
// //           <Grid item xs={12}>
// //             <Box
// //               sx={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 py: 4,
// //               }}
// //             >
// //               <Typography color="text.secondary">No books available</Typography>
// //             </Box>
// //           </Grid>
// //         )}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default AllBooks;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BookCard from "../components/BookCard/BookCard";
// import { Box, Typography, Grid, Card, CardContent, CircularProgress, Alert } from "@mui/material";

// const AllBooks = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [fetchAll, setFetchAll] = useState(false);

//   const fetchBooks = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const endpoint = fetchAll
//         ? "http://localhost:3002/books/allbooks"
//         : "http://localhost:3002/books/recentbooks";
//       const response = await axios.get(endpoint);
//       setData(response.data.data);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, [fetchAll]);

//   const handleFetchAllBooks = () => {
//     setFetchAll(true);
//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//         }}
//       >
//         <Alert severity="error">Error fetching data: {error.message}</Alert>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: 'background.default',
//         p: 4,
//       }}
//       onClick={handleFetchAllBooks}
//     >
//       <Typography variant="h4" color="text.primary" gutterBottom align="center" sx={{ mb: 4 }}>
//         Recently Added Books
//       </Typography>
//       <Grid container spacing={4}>
//         {data.length > 0 ? (
//           data.map((item, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//               <Card sx={{ bgcolor: 'background.paper', p: 2, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
//                 <CardContent>
//                   <BookCard data={item} />
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Grid item xs={12}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 py: 4,
//               }}
//             >
//               <Typography color="text.secondary">No books available</Typography>
//             </Box>
//           </Grid>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default AllBooks;
// Import React, (useEffect, useState) from "react";

// port axios from "axios";

// import BookCard from "../BookCard/BookCard";

// import Loader from "../Loader/Loader";

// const Allbooks= () => {

// const [Data, setData] useState();

// useEffect(() => {

// const fetch async () => {

// const response await axios.get(

// "http://localhost:3001/books/recentbooks"

// );

// setData(response.data.data);

// fetch();

// }, []);

// return (

// <div className="mt-8 px-4">

// <h4 className="text-3x1text-yellow-100">Recently added books</h4>

// {!Data && (

// <div className="flex items-center justify-center my-8">

// <Loader />{" "}
// </div>

// )}

// <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">

// {Data &&

// Data.map((items, i) => (

// <div key={i}>

// <BookCard data={items} />{" "}


// </div>

// ))}

// export default Allbooks
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./Bookcard/"
import Loader from "../Loader/Loader";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/books/recentbooks"
        );
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
    <div className="mt-8 px-4">
      <h4 className="text-3xl text-yellow-100">Recently added books</h4>
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
  );
};

export default AllBooks;