
// import React from 'react';
// import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, Box } from '@mui/material';
// import { Close as CloseIcon } from '@mui/icons-material';

// const SeeUserData = ({ userDivData, open, setOpen }) => {
//   return (
//     <Dialog
//       open={open}
//       onClose={() => setOpen(false)}
//       fullWidth
//       maxWidth="sm"
//       sx={{ '.MuiDialogPaper': { borderRadius: 2 } }}
//     >
//       <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <Typography variant="h6">User Information</Typography>
//         <IconButton onClick={() => setOpen(false)} aria-label="close">
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="subtitle1" color="text.secondary">Username:</Typography>
//           <Typography variant="body1" fontWeight="fontWeightBold">{userDivData.username}</Typography>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="subtitle1" color="text.secondary">Email:</Typography>
//           <Typography variant="body1" fontWeight="fontWeightBold">{userDivData.email}</Typography>
//         </Box>
//         <Box>
//           <Typography variant="subtitle1" color="text.secondary">Address:</Typography>
//           <Typography variant="body1" fontWeight="fontWeightBold">{userDivData.address}</Typography>
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={() => setOpen(false)} color="primary">
//           Close
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default SeeUserData;
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