// // import React, {useEffect} from 'react';
// // import Home from './pages/Home';
// // import Navbar from "./components/Navbar/Navbar"
// // import Footer from './components/Footer/Footer';
// // import {Routes,Route } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { authActions } from './store/auth';
// // import AllBooks from './pages/AllBooks';
// // import LogIn from './pages/LogIn';
// // import SignUp from './pages/SignUp';
// // import Cart from './pages/Cart';
// // import Profile from './pages/Profile';
// // import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
// // import UserOrderHistory from './components/Profile/UserOrderHistory';
// // import Favourites from './components/Profile/Favourites';
// // import Settings from './components/Profile/Settings';
// // import AllOrders from './pages/AllOrders';
// // import AddBook from './pages/AddBook';
// // import UpdateBook from './pages/UpdateBook';
// // const App = () => {
// // const dispatch = useDispatch();

// // const role = useSelector((state) => state.auth.role);
// // useEffect(() =>{
// // if (
// // localStorage.getItem("id") && 
// // localStorage.getItem("token") && 
// // localStorage.getItem("role")
// // ){
// // dispatch(authActions.login());
// // dispatch(authActions.changeRole(localStorage.getItem("role")));
// // }
// // },[]);
// //   return (
// //     <div>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/all-books" element={<AllBooks />} />
// //           <Route path="/cart" element={<Cart/>} />
// //           <Route path="/profile" element={<Profile />} />
         
// //           {role === "user" ? (
// //           <Route index element={<Favourites />} />
// //           ) : (
// //             <Route index element={<AllOrders/>} />
// //           )}
// //           {role==="admin" &&(
// //           <Route path="/profile/add-book" element={<AddBook/>} />
// //           )}
// //           <Route path="/profile/orderHistory" element={<UserOrderHistory />} />
// //           <Route path="/profile/settings" element={<Settings />} />

// //           <Route path="/SignUp" element={<SignUp />} />
// //           <Route path="/LogIn" element={<LogIn />} />
// //         <Route path="/updatebook/:id" element={<UpdateBook />} />
// //         <Route path="/view-book-details/:id" element={<ViewBookDetails />} />


// //         </Routes>
// //         <Footer />
    
// //     </div>
// //   );
// // }

// // export default App;
// // ==================
// import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { authActions } from './store/auth';

// import Home from './pages/Home';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import AllBooks from './pages/AllBooks';
// import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';
// import Cart from './pages/Cart';
// import Profile from './pages/Profile';
// import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
// import UserOrderHistory from './components/Profile/UserOrderHistory';
// import Favourites from './components/Profile/Favourites';
// import Settings from './components/Profile/Settings';
// import AllOrders from './pages/AllOrders';
// import AddBook from './pages/AddBook';
// import UpdateBook from './pages/UpdateBook';

// const App = () => {
//   const dispatch = useDispatch();
//   const role = useSelector((state) => state.auth.role);

//   useEffect(() => {
//     const checkAuth = () => {
//       const id = localStorage.getItem("id");
//       const token = localStorage.getItem("token");
//       const role = localStorage.getItem("role");

//       if (id && token && role) {
//         dispatch(authActions.login());
//         dispatch(authActions.changeRole(role));
//       }
//     };

//     checkAuth();
//   }, [dispatch]);

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/all-books" element={<AllBooks />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/LogIn" element={<LogIn />} />
        
//         <Route path="/profile" element={<Profile />}>
//           {role === "user" ? (
//             <>
//               <Route index element={<Favourites />} />
//               <Route path="orderHistory" element={<UserOrderHistory />} />
//               <Route path="settings" element={<Settings />} />
//             </>
//           ) : (
//             <>
//               <Route index element={<AllOrders />} />
//               {role === "admin" && (
//                 <>
//                   <Route path="add-book" element={<AddBook />} />
//                   <Route path="updatebook/:id" element={<UpdateBook />} />
//                 </>
//               )}
//             </>
//           )}
//         </Route>
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';

import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AllBooks from './pages/AllBooks';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
import UserOrderHistory from './components/Profile/UserOrderHistory';
import Favourites from './components/Profile/Favourites';
import Settings from './components/Profile/Settings';
import AllOrders from './pages/AllOrders';
import AddBook from './pages/AddBook';
//import UpdateBook from './pages/UpdateBook';

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const checkAuth = () => {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (id && token && role) {
        dispatch(authActions.login());
        dispatch(authActions.changeRole(role));
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        
        <Route path="/profile" element={<Profile />}>
          {role === "user" ? (
            <>
              <Route index element={<Favourites />} />
              <Route path="orderHistory" element={<UserOrderHistory />} />
              <Route path="settings" element={<Settings />} />
            </>
          ) : (
            <>
              <Route index element={<AllOrders />} />
              {role === "admin" && (
                <>
                  <Route path="add-book" element={<AddBook />} />
                  {/* <Route path="/updatebook/:id" element={<UpdateBook />} /> */}
                </>
              )}
            </>
          )}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
