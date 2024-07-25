// import React from 'react';
// import { CircularProgress, Typography, Box } from '@mui/material';

// const Loader = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//       }}
//     >
//       <CircularProgress />
//       <Typography
//         variant="h6"
//         sx={{
//           marginTop: 2,
//         }}
//       >
//         Loading...
//       </Typography>
//     </Box>
//   );
// };

// export default Loader;

import React from 'react';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;