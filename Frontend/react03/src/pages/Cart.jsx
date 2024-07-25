// // import React, { useState, useEffect } from "react";
// // import Loader from "../components/Loader/Loader";
// // import axios from "axios";
// // import { AiFillDelete } from "react-icons/ai";

// // const Cart = () => {
// //   const [cart, setCart] = useState([]);
// //   const [total, setTotal] = useState(0);

// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //   };

// //   useEffect(() => {
// //     const fetchCart = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:3002/cart/usercart",
// //           { headers }
// //         );
// //         setCart(response.data.data);
// //       } catch (error) {
// //         console.error("Error fetching cart:", error);
// //       }
// //     };

// //     fetchCart();
// //   }, []);

// //   useEffect(() => {
// //     if (cart && cart.length > 0) {
// //       let totalPrice = 0;
// //       cart.forEach((item) => {
// //         totalPrice += item.price;
// //       });
// //       setTotal(totalPrice);
// //     } else {
// //       setTotal(0);
// //     }
// //   }, [cart]);

// //   const deleteItem = async (bookId) => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:3002/cart/removefromcart/${bookId}`,
// //         {},
// //         { headers }
// //       );
// //       alert(response.data.message);
// //       // Remove the item from cart state after successful deletion
// //       setCart(cart.filter((item) => item._id !== bookId));
// //     } catch (error) {
// //       console.error("Error deleting item:", error);
// //     }
// //   };

// //   const placeOrder = () => {
// //     // Implement logic to place order
// //     console.log("Placing order...");
// //   };

// //   return (
// //     <div className="bg-gray-900 px-12 h-screen py-8">
// //       {!cart && <Loader />}
      
// //       {cart && cart.length === 0 && (
// //         <div className="h-screen flex items-center justify-center flex-col">
// //           <h1 className="text-5xl lg:text-6xl font-semibold text-gray-500">
// //             Empty Cart
// //           </h1>
// //           <img
// //             src="/empty-cart.png"
// //             alt="empty cart"
// //             className="lg:h-[50vh] mt-8"
// //           />
// //         </div>
// //       )}

// //       {cart && cart.length > 0 && (
// //         <>
// //           <h1 className="text-5xl font-semibold text-gray-500 mb-8">Your Cart</h1>

// //           {cart.map((item, index) => (
// //             <div key={index} className="w-full my-4 rounded bg-gray-800 flex flex-col md:flex-row p-4 justify-between items-center">
// //               <img
// //                 src={item.url}
// //                 alt={item.title}
// //                 className="h-[20vh] md:h-[10vh] object-cover"
// //               />
// //               <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
// //                 <h1 className="text-2xl text-white font-semibold text-start mt-2 md:mt-0 md:ml-4">
// //                   {item.title}
// //                 </h1>
// //                 <button
// //                   className="text-red-500 hover:text-pink-600 ml-4"
// //                   onClick={() => deleteItem(item._id)}
// //                 >
// //                   <AiFillDelete />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}

// //           <div className="mt-4 w-full flex items-center justify-end">
// //             <div className="p-4 bg-gray-800 rounded">
// //               <h1 className="text-3xl text-gray-200 font-semibold">
// //                 Total Amount
// //               </h1>
// //               <div className="mt-3 flex items-center justify-between text-xl text-gray-200">
// //                 <h2>{cart.length} books</h2> <h2>${total.toFixed(2)}</h2>
// //               </div>
// //               <div className="w-[100%] mt-3">
// //                 <button
// //                   className="bg-gray-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-gray-200"
// //                   onClick={placeOrder}
// //                 >
// //                   Place your order
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;

// import React, { useState, useEffect } from "react";
// import Loader from "../components/Loader/Loader";
// import axios from "axios";
// import { AiFillDelete } from "react-icons/ai";
// import { Box, Typography, Button, Card, CardContent, CardMedia, Snackbar, Alert } from "@mui/material";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [error, setError] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3002/cart/usercart",
//           { headers }
//         );
//         setCart(response.data.data);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     fetchCart();
//   }, []);

//   useEffect(() => {
//     if (cart && cart.length > 0) {
//       let totalPrice = 0;
//       cart.forEach((item) => {
//         totalPrice += item.price;
//       });
//       setTotal(totalPrice);
//     } else {
//       setTotal(0);
//     }
//   }, [cart]);

//   const deleteItem = async (bookId) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3002/cart/removefromcart/${bookId}`,
//         {},
//         { headers }
//       );
//       alert(response.data.message);
//       // Remove the item from cart state after successful deletion
//       setCart(cart.filter((item) => item._id !== bookId));
//     } catch (error) {
//       setError("Error deleting item");
//       setOpenSnackbar(true);
//     }
//   };

//   const placeOrder = () => {
//     // Implement logic to place order
//     console.log("Placing order...");
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Box
//       sx={{
//         bgcolor: 'background.default',
//         minHeight: '100vh',
//         p: 3,
//       }}
//     >
//       {!cart.length && <Loader />}

//       {cart.length === 0 && (
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             minHeight: '80vh',
//           }}
//         >
//           <Typography variant="h4" color="textSecondary" gutterBottom>
//             Empty Cart
//           </Typography>
//           <img
//             src="/empty-cart.png"
//             alt="empty cart"
//             style={{ height: '50vh', marginTop: 16 }}
//           />
//         </Box>
//       )}

//       {cart.length > 0 && (
//         <>
//           <Typography variant="h4" color="textSecondary" gutterBottom align="center">
//             Your Cart
//           </Typography>

//           {cart.map((item) => (
//             <Card key={item._id} sx={{ display: 'flex', mb: 2, bgcolor: 'background.paper' }}>
//               <CardMedia
//                 component="img"
//                 sx={{ width: 150, objectFit: 'cover' }}
//                 image={item.url}
//                 alt={item.title}
//               />
//               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
//                 <Typography variant="h6" color="text.primary">
//                   {item.title}
//                 </Typography>
//                 <Button
//                   sx={{ mt: 1 }}
//                   startIcon={<AiFillDelete />}
//                   color="error"
//                   onClick={() => deleteItem(item._id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Card>
//           ))}

//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-end',
//               mt: 4,
//             }}
//           >
//             <Card sx={{ width: '100%', p: 2, bgcolor: 'background.paper' }}>
//               <CardContent>
//                 <Typography variant="h5" color="text.primary">
//                   Total Amount
//                 </Typography>
//                 <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
//                   {cart.length} books - ${total.toFixed(2)}
//                 </Typography>
//                 <Button
//                   sx={{ mt: 2, bgcolor: 'warning.main', color: 'white', '&:hover': { bgcolor: 'warning.dark' } }}
//                   fullWidth
//                   onClick={placeOrder}
//                 >
//                   Place your order
//                 </Button>
//               </CardContent>
//             </Card>
//           </Box>
//         </>
//       )}

//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity="error">
//           {error}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default Cart;

// Import React, { useState, useEffect } from "react";

// import Loader from "../components/Loader/Loader";

// Import axios from "axios";

// import { AiFillDelete } from "react-icons/ai";

// const Cart (

// const [Cart, setCart] useState();

// const [Total, setTotal] useState(0);

// const headers = {

// id: localStorage.getItem("id"),

// authorization: Bearer $[localStorage.getItem("token"))",

// };

// useEffect(() {

// const fetch - async() => {

// const res avait axios.get(

// "http://localhost:1000/api/v1/get-user-cart",

// { headers }

// );

// setCart(res.data.data);

// };

// fetch();

// }, [Cart]);

// const deletItem - async (bookid) -> {

// const response avait axios.put(

// *http://localhost:1000/api/v1/remove-from-cart/$(bookid)",

// {),

// I headers }
// alert(response.data.message); };

// useEffect(() => {

// if (Cart && Cart.length > 0) {

// let total 0;

// Cart.map((items) => {

// total += items.price;

// });

// setTotal (total);

// I

// }

// total = 0;

// }, [Cart]);

// return (

// <div className="bg-zinc-900 px-12 h-screen py-8">

// {!Cart && <Loader />}

// {Cart && Cart.length==0&& (

// <div className="h-screen">

// <div className="h-[100%] flex items-center justify-center flex-col">

// <h1 className="text-5x1 lg:text-6xl font-semiboldtext-zinc-480">

// Empty Cart

// </h1>
// <img

// src="/empty-cart.png"

// alt="empty cart"

// className="lg:h-[50vh]"

// />

// </div>

// </div>

// )}

// (Cart && Cart.length > 0 &&(

// <h1 className="text-5xl font-semibold text-zinc-500 mb-8">

// Your Cart

// </h1>

// {Cart.map((items, i) -> (

// <div

// className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center

// key={1}

// <ing

// src={items.url}

// alt="/"

// className="h-[20vh] md:h-[10vh] object-cover"

// />

// <div className=" w-full md:w-auto">

// <h1 className="text-2x1text-zinc-100 font-semibold text-start mt-2 md:mt-0 ">

// {items.title}

// <img

// src="/empty-cart.png"
// (Cart.map((items, i) -> (

//   </div>
  
//   ))}
  
//   </>
  
//   )}
  
//   {Cart && Cart.length > 0 &&(
  
//   <div className="mt-4 w-full flex items-center justify-end ">
  
//   <div className="p-4bg-zinc-800 rounded">
  
//   <h1 className="text-3x1 text-zinc-200 font-semibold">
  
//   Total Amount
  
//   </h1>
  
//   <div className="mt-3 flex items-center justify-between text-xltext-zinc-200">
  
//   <h2>(Cart.length} books</h2> <h2>* {Total}</h2>
  
//   </div>
  
//   <div className="w-[100%] mt-3">
  
//   <button
  
//   className="bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc- onClick={PlaceOrder
  
//   Place your order
  
//   </button>
  
//   </div>
  
//   </div>
  
//   </div>
  
//   )}
  
//   </div>

// export default cart
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-user-cart",
          { headers }
        );
        setCart(response.data.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    if (cart && cart.length > 0) {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.price;
      });
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  }, [cart]);

  const deleteItem = async (bookId) => {
    try {
      const response = await axios.put(
        `http://localhost:1000/api/v1/remove-from-cart/${bookId}`,
        {},
        { headers }
      );
      alert(response.data.message);
      // Remove the item from cart state after successful deletion
      setCart(cart.filter((item) => item._id !== bookId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const placeOrder = () => {
    // Implement logic to place order
    console.log("Placing order...");
  };

  return (
    <div className="bg-gray-900 px-12 h-screen py-8">
      {!cart && <Loader />}
      
      {cart && cart.length === 0 && (
        <div className="h-screen flex items-center justify-center flex-col">
          <h1 className="text-5xl lg:text-6xl font-semibold text-gray-500">
            Empty Cart
          </h1>
          <img
            src="/empty-cart.png"
            alt="empty cart"
            className="lg:h-[50vh] mt-8"
          />
        </div>
      )}

      {cart && cart.length > 0 && (
        <>
          <h1 className="text-5xl font-semibold text-gray-500 mb-8">Your Cart</h1>

          {cart.map((item, index) => (
            <div key={index} className="w-full my-4 rounded bg-gray-800 flex flex-col md:flex-row p-4 justify-between items-center">
              <img
                src={item.url}
                alt={item.title}
                className="h-[20vh] md:h-[10vh] object-cover"
              />
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <h1 className="text-2xl text-white font-semibold text-start mt-2 md:mt-0 md:ml-4">
                  {item.title}
                </h1>
                <button
                  className="text-red-500 hover:text-pink-600 ml-4"
                  onClick={() => deleteItem(item._id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 w-full flex items-center justify-end">
            <div className="p-4 bg-gray-800 rounded">
              <h1 className="text-3xl text-gray-200 font-semibold">
                Total Amount
              </h1>
              <div className="mt-3 flex items-center justify-between text-xl text-gray-200">
                <h2>{cart.length} books</h2>
                <h2>* {total}</h2>
              </div>
              <div className="w-full mt-3">
                <button
                  className="bg-gray-100 rounded px-4 py-2 w-full font-semibold hover:bg-gray-200"
                  onClick={placeOrder}
                >
                  Place your order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
