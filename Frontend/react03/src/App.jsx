// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Routes, Route } from "react-router-dom";
// import { Container, Box, CssBaseline } from "@mui/material";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import AllBooks from "./pages/Allbooks";
// import Login from "./pages/Login";
// import Signin from "./pages/Signin";
// import Cart from "./pages/Cart";
// import Profile from "./pages/Profile";
// import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";
// import UserOrderHistory from "./components/Profile/UserOrderHistory";
// import Settings from "./components/Profile/Settings";
// import Favourites from "./components/Profile/Favourites";
// import { authActions } from "./Store/auth";

// const App = () => {
//   const dispatch = useDispatch();
//   const role = useSelector((state) => state.auth.role);

//   useEffect(() => {
//     const id = localStorage.getItem("id");
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (id && token && role) {
//       dispatch(authActions.login({ id, token, role })); // Update action to accept payload
//       dispatch(authActions.changeRole(role));
//     }
//   }, [dispatch]);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline /> {/* Normalize CSS */}
//       <Navbar />
//       <Container component="main" sx={{ flex: 1, py: 4 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/allbooks" element={<AllBooks />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/profile" element={<Profile />}>
//             <Route index element={<Favourites />} />
//             <Route path="order-history" element={<UserOrderHistory />} />
//             <Route path="settings" element={<Settings />} />
//           </Route>
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
//         </Routes>
//       </Container>
//       <Footer />
//     </Box>
//   );
// };

// export default App;
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import AllBooks from "./pages/Allbooks";
// import Login from "./pages/Login";
// import Signin from "./pages/Signin";
// import Cart from "./pages/Cart";
// import Profile from "./pages/Profile";
// import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";
// // import AdminDashboard from ".components/pages/AdminDashboard";
// import UserOrderHistory from "./components/Profile/UserOrderHistory";
// import Settings from "./components/Profile/Settings";
// import Favourites from "./components/Profile/Favourites";
// import { authActions } from "./Store/auth"; // Ensure this path is correct

const App = () => {
//   const dispatch = useDispatch();
//   const role = useSelector((state) => state.auth.role);

//   useEffect(() => {
//     const id = localStorage.getItem("id");
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (id && token && role) {
//       dispatch(authActions.login());
//       dispatch(authActions.changeRole(role));
//     }
//   }, [dispatch]);

  return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/allbooks" element={<AllBooks />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/profile" element={<Profile />}>
//           {/* Use a component to handle role-based rendering */}
//           <Route index element={role === "user" ? <Favourites /> : <AdminDashboard />} />
//           <Route path="order-history" element={<UserOrderHistory />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

export default App;
