// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BookCard from "../components/BookCard";
// import { CircularProgress, Grid, Typography, Box } from "@mui/material";

// const RecentlyAdded = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/books/recentbooks");
//         setData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching recently added books:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetch();
//   }, []);

//   return (
//     <Box sx={{ mt: 4, px: 2 }}>
//       <Typography variant="h4" color="primary" gutterBottom>
//         Recently Added Books
//       </Typography>
//       {loading ? (
//         <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Grid container spacing={4}>
//           {data.map((item, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <BookCard data={item} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default RecentlyAdded;
// import React, { useEffect, useState } from "react";
// import BookCard from "../BookCard/BookCard";
// import Loader from "../Loader/Loader";
// import axios from "axios";

// const RecentlyAdded = () => {

// const [Data, setData] = useState();

// useEffect(() => {

// const fetch = async () => {

// const response = await axios.get(

// "http://localhost:3001/books/recentbooks" );

// setData(response.data.data);

// };

// fetch();

// }, []);

// return (

//     <div className="mt-8 px-4">
    
//     <h4 className="text-3x1 text-yellow-100">Recently added books</h4>
    
//     {IData && (
    
//     <div className="flex items-center justify-center my-8">
    
//     <Loader />{" "}
    
//     </div>
    
//     )}
    
//     <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
    
//     {Data &&
    
//     Data.map((items, i) => (
    
//     <div key={i}>
    
//     <BookCard data={items} />{" "}
    
//     </div>
    
//     ))}
    
//     </div>
    
//     </div>
    
//     );
    
//     };
//     export default RecentlyAdded;


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
        const response = await axios.get("http://localhost:3001/books/recentbooks");
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
      <h4 className="text-3xl text-yellow-100">Recently added books</h4>
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