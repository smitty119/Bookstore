// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import { IoOpenOutline } from "react-icons/io5";
// // import { FaCheck } from "react-icons/fa";

// // const AllOrders = () => {
// //   const [allOrders, setAllOrders] = useState([]);
// //   const [selectedOrder, setSelectedOrder] = useState(null);
// //   const [status, setStatus] = useState("");
// //   const [error, setError] = useState(null);

// //   const headers = {
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //   };

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3002/order/all-orders", { headers });
// //         setAllOrders(response.data.data);
// //       } catch (err) {
// //         setError("Error fetching orders");
// //         console.error(err);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   const handleStatusChange = (e) => {
// //     setStatus(e.target.value);
// //   };

// //   const submitChanges = async (orderId) => {
// //     try {
// //       const response = await axios.put(`http://localhost:3002/order/update-status/${orderId}`, { status }, { headers });
// //       alert(response.data.message);
// //       // Refresh orders after status update
// //       const updatedOrders = allOrders.map(order => 
// //         order._id === orderId ? { ...order, status } : order
// //       );
// //       setAllOrders(updatedOrders);
// //     } catch (err) {
// //       setError("Error updating status");
// //       console.error(err);
// //     }
// //   };

// //   if (error) {
// //     return <div className="text-red-500">{error}</div>;
// //   }

// //   return (
// //     <div className="mt-8 px-4">
// //       <h4 className="text-3xl text-yellow-100">All Orders</h4>
      
// //       <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //         {allOrders.map((order) => (
// //           <div key={order._id} className="bg-gray-800 p-4 rounded-lg">
// //             <div className="flex justify-between items-center mb-4">
// //               <h2 className="text-xl text-white">{order.orderNumber}</h2>
// //               <Link to={`/profile/${order.userId}`} className="text-yellow-500 hover:text-yellow-400">
// //                 <IoOpenOutline />
// //               </Link>
// //             </div>
// //             <p className="text-gray-400">Customer: {order.customerName}</p>
// //             <p className="text-gray-400">Order Date: {order.orderDate}</p>
// //             <p className={`text-gray-400 ${order.status === 'Order placed' ? 'text-yellow-500' : order.status === 'Canceled' ? 'text-red-500' : 'text-green-500'}`}>
// //               Status: {order.status}
// //             </p>
            
// //             <div className="mt-4 flex items-center space-x-4">
// //               <select
// //                 value={selectedOrder === order._id ? status : ""}
// //                 onChange={handleStatusChange}
// //                 className="bg-gray-700 p-2 rounded text-white"
// //               >
// //                 <option value="">Select Status</option>
// //                 <option value="Order placed">Order placed</option>
// //                 <option value="Out for delivery">Out for delivery</option>
// //                 <option value="Delivered">Delivered</option>
// //               </select>
// //               <button
// //                 className="text-green-500 hover:text-pink-600"
// //                 onClick={() => {
// //                   setSelectedOrder(order._id);
// //                   submitChanges(order._id);
// //                 }}
// //               >
// //                 <FaCheck />
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllOrders;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { IoOpenOutline } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa";
// import { 
//   Box, 
//   Typography, 
//   Card, 
//   CardContent, 
//   CardActions, 
//   Button, 
//   MenuItem, 
//   Select, 
//   Snackbar, 
//   Alert 
// } from "@mui/material";

// const AllOrders = () => {
//   const [allOrders, setAllOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [status, setStatus] = useState("");
//   const [error, setError] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const headers = {
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/order/all-orders", { headers });
//         setAllOrders(response.data.data);
//       } catch (err) {
//         setError("Error fetching orders");
//         console.error(err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const submitChanges = async (orderId) => {
//     try {
//       const response = await axios.put(`http://localhost:3002/order/update-status/${orderId}`, { status }, { headers });
//       setOpenSnackbar(true);
//       // Refresh orders after status update
//       const updatedOrders = allOrders.map(order => 
//         order._id === orderId ? { ...order, status } : order
//       );
//       setAllOrders(updatedOrders);
//     } catch (err) {
//       setError("Error updating status");
//       setOpenSnackbar(true);
//       console.error(err);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: 'background.default',
//         p: 3,
//       }}
//     >
//       <Typography variant="h4" color="text.primary" gutterBottom align="center">
//         All Orders
//       </Typography>
      
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//           gap: 2,
//         }}
//       >
//         {allOrders.map((order) => (
//           <Card key={order._id} sx={{ bgcolor: 'background.paper', p: 2, boxShadow: 3 }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                 <Typography variant="h6" color="text.primary">
//                   {order.orderNumber}
//                 </Typography>
//                 <Link to={`/profile/${order.userId}`} style={{ color: '#ffeb3b', textDecoration: 'none' }}>
//                   <IoOpenOutline size={24} />
//                 </Link>
//               </Box>
//               <Typography color="text.secondary">Customer: {order.customerName}</Typography>
//               <Typography color="text.secondary">Order Date: {order.orderDate}</Typography>
//               <Typography sx={{ color: getStatusColor(order.status) }}>
//                 Status: {order.status}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Select
//                 value={selectedOrder === order._id ? status : ""}
//                 onChange={handleStatusChange}
//                 sx={{ bgcolor: 'background.default', color: 'text.primary', flexGrow: 1 }}
//               >
//                 <MenuItem value="">Select Status</MenuItem>
//                 <MenuItem value="Order placed">Order placed</MenuItem>
//                 <MenuItem value="Out for delivery">Out for delivery</MenuItem>
//                 <MenuItem value="Delivered">Delivered</MenuItem>
//               </Select>
//               <Button
//                 sx={{ color: 'success.main' }}
//                 onClick={() => {
//                   setSelectedOrder(order._id);
//                   submitChanges(order._id);
//                 }}
//               >
//                 <FaCheck size={24} />
//               </Button>
//             </CardActions>
//           </Card>
//         ))}
//       </Box>

//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity={error ? "error" : "success"}>
//           {error ? error : "Status updated successfully"}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// // Helper function to determine color based on status
// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Order placed':
//       return 'warning.main';
//     case 'Canceled':
//       return 'error.main';
//     case 'Delivered':
//       return 'success.main';
//     default:
//       return 'text.primary';
//   }
// };

// export default AllOrders;
// import Large {FaUserLarge } from "react-icons/ta6";

// Import axios from "axios";

// Import (Link) from "react-router-dom";

// Import (IoOpenOutline) from "react-icons/1o5"; Import (FaCheck) from "react-icons/fa6";

// const AllOrders - () ->

// const [AllOrders, setAllOrders] = useState();

// const [Options, setOptions] useState(-1); I

// const headers = {

// id: localStorage.getItem("id"),

// authorization: Bearer $(localStorage.getItem("token"))", };

// useEffect(() => {

// const fetch async () => {

// const response await axios.get(

// "http://localhost:1000/api/vi/get-all-orders", (headers }

// );

// setAllOrders(response.data.data);

// console.log(response.data.data);

// };

// fetch();

// }, [AllOrders]);

// const change (e) => {

// const {value} e.target;

// setValues({ status: value });
// onclick=(() => setoptions(1)}

// (items.status = "Order placed"? (

// <div className="text-yellow-500">(items.status)</div>

// ): items.status "Canceled" ? (

// <div className="text-red-500">(items.status)</div>

// ):(

// <div className="text-green-500">{items.status)</div>

// )}

// </button>

// <div

// className={ ${

// Options 1? "block": "hidden"

// } flex mt-4"}

// <select

// name="status"

// id=""

// className="bg-gray-800"

// onChange={change}

// {[

// "Order placed",

// "Out for delivery",

// "Delivered",
// <option value-(items) key-{1}>

// {items)

// </option>

// ))}

// </select>

// button

// className="text-green-500 hover: text-pink-600 mx-2"

// onClick={() => {

// setOptions(-1);

// submitChanges(1);

// }}

// <FaCheck />

// </button>

// </div>

// </h1>

// </div>

// <div className="w-[10%] md:w-[5%]">

// <button>

// const headers = {

// authorization: Bearer ${localStorage.getItem("token")}", };

// useEffect(() => {

// const fetch async () => {

// const response await axios.get(

// "http://localhost:1000/api/v1/get-all-orders", { headers }

// );

// setAllOrders (response.data.data);

// };

// I

// fetch();

// ), [AllOrders]);

// const change (e) => {

// const {value} = e.target;

// setValues({ status: value });

// };

// const submitChanges async (1) => {

// const id OrderHistory[i]._id;

// const response await axios.put( http://localhost:1000/api/v1/update-status/${id}", Values,

// headers

// );

// alert(response.data.message);
// AllOrders.map((items, i) => (

//     <FaCheck />
    
//     </button>
    
//     </div>
    
//     </h1>
    
//     </div>
    
//     <div className="w-[10%] md:w-[5%] ">
    
//     <button
    
//     className" text-xlhover: text-orange-500"
    
//     onClick={() => {
    
//     setuserDiv("fixed");
    
//     setuserDivData(items.user);
    
//     }}
    
//     <IoOpenOutline />
    
//     </button>
    
//     </div>
    
//     </div>
    
//     ))}
    
//     </div>
    
//     )}
    
//     </>
    
//     >
    
//     export default AllOrders;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [options, setOptions] = useState(-1);
  const [values, setValues] = useState({});

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-all-orders", { headers });
        setAllOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const changeStatus = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  const submitChanges = async (orderId) => {
    try {
      const response = await axios.put(`http://localhost:1000/api/v1/update-status/${orderId}`, values, { headers });
      alert(response.data.message);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="mt-8 px-4">
      <h4 className="text-3xl text-yellow-100">All Orders</h4>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allOrders.map((order, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-white">{order.orderNumber}</h2>
              <Link to={`/profile/${order.userId}`} className="text-yellow-500 hover:text-yellow-400">
                <IoOpenOutline />
              </Link>
            </div>
            <p className="text-gray-400">{order.customerName}</p>
            <p className="text-gray-400">{order.orderDate}</p>
            <p className="text-gray-400">{order.status}</p>

            <div className="mt-4 flex items-center space-x-4">
              <select value={values.status} onChange={changeStatus} className="bg-gray-700 p-2 rounded text-white">
                <option value={-1}>Select Status</option>
                <option value="Order placed">Order placed</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              <button
                className="text-green-500 hover:text-pink-600"
                onClick={() => {
                  setOptions(-1);
                  submitChanges(order._id);
                }}
              >
                <FaCheck />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
