// import React from "react";
// import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

// const BookCard = ({ data }) => {
//   return (
//     <Card sx={{ maxWidth: 200 }}> {/* Set a smaller maxWidth */}
//       <CardMedia
//         component="img"
//         height="140"
//         image={data.imageUrl}
//         alt={data.title}
//         sx={{ objectFit: 'cover' }}
//       />
//       <CardContent>
//         <Typography variant="h6" component="div">
//           {data.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {data.author}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default BookCard;
===================================================

// import React from "react";

// import { Link } from "react-router-dom";


// Import React from "react";

// BookCard.jsx> [] BookCard


// import axios from "axios";

// const BookCard ((data, favourite }) => {

// const headers(

// id: localStorage.getItem("id").

// authorization: Bearer $(localStorage.getItem("token"))",

// const handleRemoveBook async () => { const response await axios.put(

// "http://localhost:1000/api/v1/remove-book-from-favourite", ().

// { headers }

// ); console.log(response.data.message);

// };

// return (

// <div className="bg-zinc-800 rounded p-4 flex flex-col">

// <Link to-('/view-book-details/$(data._id}")>

// <div className="bg-zinc-900 rounded flex items-center justify-center">

// <div className="">

// <img src=(data.url) alt="/" className-"h-[25vh]" />

// </div>

// <h2 className "mt-4 text-xltext-white font-semibold">

// (data.title)

// </h2>

// <p className-"mt-2 en className "mt-2 text-zinc-400 font-semibold">by (data.author)</p> taxtazinc-200 font-semihold taxt x1

// const BookCard = ({data}) => {

// console.log(data);

// return (

// <>

// <Link to={`/view-book-details/${data._id}` }>
// <div className="bg-zinc-800 rounded p-4 flex flex-col">

// <div className="bg-zinc-900 rounded flex items-center justify-center">

// <img src={data.url} alt="/" className="h-[25vh]" />

// </div>

// <h2 className="mt-4 text-xl font-semibold">{data.title}</h2>

// <p className="mt-2text-zinc-400 font-semibold">by {data.author}</p>

// <p className="mt-2 text-zinc-200 font-semibold text-xl">

// (data.price)

// </p>

// </div>
// </Link>

// {favourite &&(

// <button

// className="bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4" onClick={handleRemoveBook}

// Remove from favourite

// </button>

// )}

// </div>

// );

// };

// export default BookCard.

// </>

// );

// };


import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleRemoveBook = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1000/api/v1/remove-book-from-favourite/${data._id}`,
        {},
        { headers }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error removing book from favourite", error);
    }
  };

  return (
    <div className="bg-zinc-800 rounded p-4 flex flex-col">
      <Link to={`/view-book-details/${data._id}`}>
        <div className="bg-zinc-900 rounded flex items-center justify-center">
          <img src={data.url} alt={data.title} className="h-[25vh]" />
        </div>
        <h2 className="mt-4 text-xl text-white font-semibold">{data.title}</h2>
        <p className="mt-2 text-zinc-400 font-semibold">by {data.author}</p>
        <p className="mt-2 text-zinc-200 font-semibold text-xl">
          {data.price}
        </p>
      </Link>
      {favourite && (
        <button
          className="bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4"
          onClick={handleRemoveBook}
        >
          Remove from favourite
        </button>
      )}
    </div>
  );
};

export default BookCard;