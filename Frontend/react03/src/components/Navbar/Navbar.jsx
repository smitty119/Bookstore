// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//   const links = [
//     { title: "Home", link: "/" },
//     { title: "All Books", link: "/allbooks" },
//     { title: "Cart", link: "/cart" },
//     { title: "Addbook", link: "/AddBook" },
//     { title: "Login", link: "/Login" }
//   ];

//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const filteredLinks = isLoggedIn ? links : links.filter(link => link.title !== "All Books" && link.title !== "Cart");

//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         bgcolor: theme.palette.primary.main, // Set the background color to primary
//         boxShadow: 3,
//         color: theme.palette.primary.contrastText // Set the text color to contrast with the primary color
//       }}
//     >
//       <Toolbar>
//       <Typography
//   variant="h6"
//   component={Link}
//   to="/"
//   sx={{
//     flexGrow: 1,
//     textDecoration: 'none',
//     color: 'inherit', // Use the text color from AppBar
//     fontWeight: 'bold', // Set font weight to bold
//     fontSize: '1.35rem', // Set font size (you can adjust this value as needed)
//     textTransform: 'uppercase', // Transform text to uppercase
//     letterSpacing: '0.1rem', 
//   }}
// >
//   Book World
// </Typography>

//         {isMobile ? (
//           <>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenuOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               PaperProps={{
//                 sx: {
//                   bgcolor: theme.palette.primary.main, // Set the menu background to primary
//                   color: theme.palette.primary.contrastText // Set the menu text color
//                 }
//               }}
//             >
//               {filteredLinks.map((item, i) => (
//                 <MenuItem
//                   component={Link}
//                   to={item.link}
//                   key={i}
//                   onClick={handleMenuClose}
//                 >
//                   {item.title}
//                 </MenuItem>
//               ))}
//               {!isLoggedIn && (
//                 <>
//                   <MenuItem component={Link} to="/login" onClick={handleMenuClose}>Log In</MenuItem>
//                   <MenuItem component={Link} to="/signin" onClick={handleMenuClose}>Sign Up</MenuItem>
//                 </>
//               )}
//             </Menu>
//           </>
//         ) : (
//           <>
//             {filteredLinks.map((item, i) => (
//               <Button
//                 component={Link}
//                 to={item.link}
//                 key={i}
//                 color="inherit"
//                 sx={{ mr: 2 }}
//               >
//                 {item.title}
//               </Button>
//             ))}
//             {!isLoggedIn && (
//               <>
//                 <Button
//                   component={Link}
//                   to="/login"
//                   color="inherit"
//                   variant="outlined"
//                   sx={{ mr: 2 }}
//                 >
//                   Log In
//                 </Button>
//                 <Button
//                   component={Link}
//                   to="/signin"
//                   color="inherit"
//                   variant="contained"
//                 >
//                   Sign Up
//                 </Button>
//               </>
//             )}
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// import React from "react";
// const Navbar = () => {
// const links = [
// { title: "Home", link: "/",},
// { title: "About Us", link: "/about-us",},
// { title: "All Books", link: "/allbooks",},
// { title: "Cart", link: "/cart",},
// { title: "Profile", link: "/profile",},
// { title: "Admin Profile", link: "/profile",},
// ];

//     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//     if (isLoggedIn === false) {
    
//     links.splice(2, 2);
    
//     }
    
//     const [MobileNav, setMobileNav] = useState("hidden");
    
//     return (
    
//     <>
    
//     <nav className="z-50 relative flex ☐ bg-zinc-800 text-white px-8 py-4 items-cer
    
//     <Link to="/" className="flex items-center">
//   <h1 className="text-2xl font-semibold">Book world</h1>
// </Link>
// <div className="nav-links-bookworld flex items-center gap-4">
// <div className="flex gap-4">
// {links.map((items, i) => (
// {item.title==="profile"?<link to={item.link}}
// <Link to={items.link}
// className="hover: text-blue-500 transition-all duration-300"
// key={i}>
// {items.title}{" "}
// </Link>
// ))}
// </div>
// <div className="flex gap-4">
//   {isLoggedIn===false &&(
//     <>
// <Link to="/Login" className="px-2 py-1 border border border-blue-500 rounded hover:bg-white hover: text-zinc-800 transition-all duration-300">LogIn</Link>
// <Link to="/Signup" className="px-2 py-1bg-blue-500 rounded hover:bg-white hover: text-zinc-800 transition-all duration-300">SignUp</Link></>)}
// </div>
// </div>
// </div>
// );
// };
// export default Navbar;
// ==================
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "All Books", link: "/allbooks" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "Admin Profile", link: "/admin-profile" }
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const filteredLinks = isLoggedIn? links : links.filter((link) => link.title!== "All Books" && link.title!== "Cart");

  const [mobileNav, setMobileNav] = useState("hidden");

  return (
    <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-semibold">Book World</h1>
      </Link>
      <div className="nav-links-bookworld flex items-center gap-4">
        <div className="flex gap-4">
          {filteredLinks.map((item, i) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
