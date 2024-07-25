// import React from "react";
// import { Container, Grid, Typography, Link, Box, IconButton } from "@mui/material";
// import { Facebook, Twitter, Instagram } from "@mui/icons-material";

// const Footer = () => {
//   return (
//     <Box component="footer" sx={{ bgcolor: 'background.paper', py: 4, mt: 'auto' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* Logo and Social Icons */}
//           <Grid item xs={12} md={3} textAlign={{ xs: 'center', md: 'left' }}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>BOOK WORLD</Typography>
//             <Box mt={2}>
//               <IconButton href="https://www.facebook.com/" color="inherit">
//                 <Facebook />
//               </IconButton>
//               <IconButton href="https://twitter.com/" color="inherit">
//                 <Twitter />
//               </IconButton>
//               <IconButton href="https://www.instagram.com/" color="inherit">
//                 <Instagram />
//               </IconButton>
//             </Box>
//           </Grid>
  

//           {/* Shop and About Links */}
//           <Grid item xs={12} md={6}>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>Shop</Typography>
//                 <ul style={{ listStyle: 'none', padding: 0 }}>
//                   <li>
//                     <Link href="/products/english" color="inherit" underline="none">English Books</Link>
//                   </li>
//                   <li>
//                     <Link href="/products/malay" color="inherit" underline="none">Malayalam Books</Link>
//                   </li>
//                 </ul>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>About</Typography>
//                 <ul style={{ listStyle: 'none', padding: 0 }}>
//                   <li>
//                     <Link href="/about" color="inherit" underline="none">Our Team</Link>
//                   </li>
//                   <li>
//                     <Link href="/contact" color="inherit" underline="none">Contact</Link>
//                   </li>
//                 </ul>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Box mt={4} textAlign="center">
//           <Typography variant="body2" color="textSecondary">
//             &#169; Enjoy Reading :)
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white px-8 py-4">
      <h1 className="text-kl font-semibold text-center">
        &#169; 2024, Made With Love By THE CODE MASTER
      </h1>
    </div>
  );
};

export default Footer;