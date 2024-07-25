
// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress, Divider, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import axios from "axios";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3002/user/get-user-information",
//           { headers }
//         );
//         setProfile(response.data);
//       } catch (error) {
//         console.error("Error fetching user information:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//       {!profile ? (
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flex: 1,
//             bgcolor: 'background.default',
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       ) : (
//         <>
//           <Drawer
//             variant="permanent"
//             sx={{
//               width: 240,
//               flexShrink: 0,
//               '& .MuiDrawer-paper': {
//                 width: 240,
//                 boxSizing: 'border-box',
//                 bgcolor: 'background.paper',
//                 borderRight: '1px solid',
//                 borderColor: 'divider',
//               },
//             }}
//           >
//             <Box sx={{ p: 2 }}>
//               <Typography variant="h6" gutterBottom>
//                 Profile
//               </Typography>
//               <Divider />
//               <List>
//                 <ListItem>
//                   <ListItemText primary={`Username: ${profile.username}`} />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary={`Email: ${profile.email}`} />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary={`Address: ${profile.address}`} />
//                 </ListItem>
//               </List>
//             </Box>
//           </Drawer>
//           <Box
//             component="main"
//             sx={{
//               flex: 1,
//               p: 3,
//               bgcolor: 'background.default',
//               overflowY: 'auto',
//             }}
//           >
//             <Outlet />
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Profile;
// import React, { useEffect, useState } from "react";

// Import Sidebar from "../components/Profile/Sidebar";

// import { Outlet } from "react-router-dom";

// import { useSelector } from "react-redux";

// import axios from "axios";

// const Profile = () => { -> {

// //const isLoggedIn = useSelector();

// const [Profile, setProfile] = useState();

// const headers = {

// id: localStorage.getItem("id"),

// authorization: `Bearer ${localStorage.getItem("token"))",

// };

// useEffect(() =>

// const fetch async () => {

// const response await axios.get(

// "http://localhost:1000/api/v1/get-user-information",

// { headers }

// );

// setProfile(response.data);

// fetch();

// []);

// return (
// <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4text-white ">

// {!Profile && (

// <div className="w-full h-[100%] flex items-center justify-center">

// <Loader />

// </div>

// )}

// {Profile && (

// <>>

// <div className="w-full md:w-1/6">

// <Sidebar data-(Profile) />

// </div>

// <div className="w-full md:w-5/6">

// <Outlet />

// </div>

// </>

// )}

// </div>

// );


// export default Profile;
// import React, { useEffect, useState } from "react";

// Import Sidebar from "../components/Profile/Sidebar";

// import { Outlet } from "react-router-dom";

// import { useSelector } from "react-redux";

// import axios from "axios";

// const Profile = () => { -> {

// //const isLoggedIn = useSelector();

// const [Profile, setProfile] = useState();

// const headers = {

// id: localStorage.getItem("id"),

// authorization: `Bearer ${localStorage.getItem("token"))",

// };

// useEffect(() =>

// const fetch async () => {

// const response await axios.get(

// "http://localhost:1000/api/v1/get-user-information",

// { headers }

// );

// setProfile(response.data);

// fetch();

// []);

// return (
// <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4text-white ">

// {!Profile && (

// <div className="w-full h-[100%] flex items-center justify-center">

// <Loader />

// </div>

// )}

// {Profile && (

// <>>

// <div className="w-full md:w-1/6">

// <Sidebar data-(Profile) />

// </div>

// <div className="w-full md:w-5/6">

// <Outlet />

// </div>

// </>

// )}

// </div>

// );


// export default Profile;
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Profile = () => {
  const [profile, setProfile] = useState(null); // Initialize profile state with null

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-user-information",
          { headers }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchProfile();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white">
      {!profile && (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      )}

      {profile && (
        <>
          <div className="w-full md:w-1/6">
            <Sidebar data={profile} /> {/* Pass profile data as a prop to Sidebar */}
          </div>
          <div className="w-full md:w-5/6">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;