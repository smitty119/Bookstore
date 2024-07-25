// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSignOutAlt } from "react-icons/fa";
// import { Box, Typography, IconButton, Divider, Button, Avatar } from "@mui/material";

// const Sidebar = ({ data }) => {
//   if (!data) {
//     return null;
//   }

//   return (
//     <Box
//       sx={{
//         backgroundColor: 'background.paper',
//         padding: 2,
//         borderRadius: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         height: '100%',
//         justifyContent: 'space-between',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Avatar
//           src={data.avatar}
//           alt="Avatar"
//           sx={{ height: '12vh', width: '12vh', borderRadius: '50%' }}
//         />
//         <Typography variant="h6" sx={{ mt: 2, color: 'text.primary' }}>
//           {data.username}
//         </Typography>
//         <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
//           {data.email}
//         </Typography>
//         <Divider sx={{ width: '100%', my: 2, display: { xs: 'none', lg: 'block' } }} />
//       </Box>

//       <Box
//         sx={{
//           display: { xs: 'none', lg: 'flex' },
//           flexDirection: 'column',
//           alignItems: 'center',
//           width: '100%',
//         }}
//       >
//         <Button
//           component={Link}
//           to="/profile"
//           sx={{
//             width: '100%',
//             py: 1,
//             textAlign: 'center',
//             color: 'text.primary',
//             fontWeight: 'bold',
//             borderRadius: 1,
//             mb: 2,
//             '&:hover': {
//               backgroundColor: 'action.hover',
//             },
//           }}
//         >
//           Favourites
//         </Button>
//         <Button
//           component={Link}
//           to="/profile/orderHistory"
//           sx={{
//             width: '100%',
//             py: 1,
//             textAlign: 'center',
//             color: 'text.primary',
//             fontWeight: 'bold',
//             borderRadius: 1,
//             mb: 2,
//             '&:hover': {
//               backgroundColor: 'action.hover',
//             },
//           }}
//         >
//           Order History
//         </Button>
//         <Button
//           component={Link}
//           to="/profile/settings"
//           sx={{
//             width: '100%',
//             py: 1,
//             textAlign: 'center',
//             color: 'text.primary',
//             fontWeight: 'bold',
//             borderRadius: 1,
//             '&:hover': {
//               backgroundColor: 'action.hover',
//             },
//           }}
//         >
//           Settings
//         </Button>
//       </Box>

//       <Button
//         variant="contained"
//         color="secondary"
//         sx={{
//           width: '100%',
//           mt: 2,
//           py: 1,
//           fontWeight: 'bold',
//           borderRadius: 1,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           '&:hover': {
//             backgroundColor: 'secondary.dark',
//           },
//         }}
//       >
//         Log Out
//         <FaSignOutAlt style={{ marginLeft: 8 }} />
//       </Button>
//     </Box>
//   );
// };

// export default Sidebar;
// Import React from "react";

// import { Link } from "react-router-dom";

// const Sidebar ({ data }) => {

// return (

// div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]-

// <div className="flex items-center flex-col justify-center">

// (""}

// <img src=(data.avatar) className="h-[12vh]" />

// <p className="mt-3 text-xltext-zinc-100 font-semibold">

// (data.username}

// </p>

// <p className="mt-1 text-normaltext-zinc-300 ">{data.email)</p>

// <div className-"w-full mt-4 h-[1px] bg-zinc-500 hidden 1g:block"></div>

// </div>

// <div className-"w-full flex-col items-center justify-center hidden 1g:flex">

// <Link

// to="/profile"

// className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all

// Favourites

// </Link>

// <Link

// to="/profile/orderHistory"

// className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transiti

// Order History

// </Link>
// <Link

// to="/profile/settings"

// className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transiti

// Settings

// </Link>

// </div>

// <button className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0text-white font-semibold flex items-center jus

// Log Out <FaArrowRightFromBracket className="ms-4" />

// /button I

// </div>

// );

// export default Sidebar;



import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa";

const Sidebar = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-full">
      <div className="flex items-center flex-col justify-center">
        <img src={data.avatar} alt="Avatar" className="h-[12vh] rounded-full" />
        <p className="mt-3 text-xl text-zinc-100 font-semibold">{data.username}</p>
        <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
      </div>

      <div className="w-full flex-col items-center justify-center hidden lg:flex">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all"
        >
          Settings
        </Link>
      </div>

      <button className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center rounded hover:bg-zinc-700 transition-all">
        Log Out <FaArrowRightFromBracket className="ml-4" />
      </button>
    </div>
  );
};

export default Sidebar;

