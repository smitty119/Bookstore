// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Box, Typography, Button, Grid } from '@mui/material';

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         height: '75vh',
//         display: 'flex',
//         flexDirection: { xs: 'column', md: 'row' },
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: { xs: 'center', md: 'left' },
//         px: 2,
//         backgroundImage: 'url(https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop)', // Replace with the path to your background image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: 'white', // Ensuring text is readable against the background
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           width: { xs: '100%', md: '50%' },
//           mb: { xs: 4, md: 0 },
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: { xs: 'center', md: 'flex-start' },
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           variant="h3"
//           component="h1"
//           sx={{
//             fontWeight: 'bold',
//             fontSize: { xs: '2rem', md: '4rem' },
//           }}
//         >
//           Discover Your Next Great Read
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             mt: 2,
//             fontSize: { xs: '1rem', md: '1.25rem' },
//           }}
//         >
//           Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books.
//         </Typography>
//         <Box sx={{ mt:1 }}> 
//   <Button
//     component={Link}
//     to="/allbooks"
//     variant="contained"
//     size="small"
//     color="secondary"
//     sx={{
//       fontSize: { xs: '1rem', md: '1.25rem' },
//       px: 2,
//       py: 1.5,
//       borderRadius: 0.5,
//       color: 'white', // Sets the text color to white
//       borderColor: 'secondary.main', // Ensure the border color matches the secondary color
//       '&:hover': {
//         borderColor: 'secondary.dark', // Darker border color on hover
//         backgroundColor: 'secondary.main', // Background color on hover
//         color: 'white', // Ensures text color remains white on hover
//       },
//     }}
//   >
//     Discover Books
//   </Button>
// </Box>

//       </Grid>
//       {/* Uncomment the following section if you want to add an image */}
//       {/* <Grid
//         item
//         xs={12}
//         md={6}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100%',
//         }}
//       >
//         <img src={require('./hero.png')} alt="Hero" style={{ width: '100%', height: 'auto' }} />
//       </Grid> */}
//     </Box>
//   );
// };

// export default Hero;
// import { Link } from "react-router-dom";

// const Hero = () => {

// return (
// <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">

// <div className="w-full mb-12 md:mb-0 1g:w-3/6 flex flex-col items-center lg:items-start jus

// <h1 className="text-4x1 lg:text-6xl font-semibold text-yellow-100 text-center 1g:text-

// Discover Your Next Great Read
// </h1>

// <p className="mt-4 text-xltext-zinc-300 text-center 1g:text-left">

// Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books

// </p>

// <div className="mt-8">

// Link

// to="/allbooks"

// className="text-yellow-100 text-xl 1g:text-2xl font-semibold border border-yello

// Discover Books

// </Link>

// Discover Books

// </button>

// </div>

// </div>

// <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center ">

// <img src="./hero.png" alt="hero" />

// </div>

// </div>

// );

// };
// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Discover Your Next Great Read
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books.
        </p>
        <div className="mt-8">
          <Link
            to="/allbooks"
            className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-500 px-4 py-2 rounded"
          >
            Discover Books
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img src={require('./hero.png')} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;