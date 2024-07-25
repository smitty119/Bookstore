
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader";
// import { Box, TextField, Button, Typography, Paper } from "@mui/material";

// const Settings = () => {
//   const [value, setValue] = useState({ address: "" });
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await axios.get("http://localhost:3002/users/get-user-information", { headers });
//         setProfileData(response.data);
//         setValue({ address: response.data.address });
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user information:", error);
//         setLoading(false);
//       }
//     };

//     fetch();
//   }, []);

//   const handleChange = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   const submitAddress = async () => {
//     try {
//       await axios.put(
//         "http://localhost:3002/users/updateaddress",
//         { address: value.address },
//         { headers }
//       );
//       alert("Address updated successfully!");
//     } catch (error) {
//       console.error("Error updating address:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100vh',
//         }}
//       >
//         <Loader />
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         padding: 3,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 3,
//       }}
//     >
//       {profileData && (
//         <Paper
//           sx={{
//             padding: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 3,
//           }}
//         >
//           <Box>
//             <Typography variant="h6">Username</Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 padding: 2,
//                 borderRadius: 1,
//                 backgroundColor: 'grey.800',
//                 marginTop: 1,
//                 fontWeight: 'bold',
//               }}
//             >
//               {profileData.username}
//             </Typography>
//           </Box>

//           <Box>
//             <Typography variant="h6">Email</Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 padding: 2,
//                 borderRadius: 1,
//                 backgroundColor: 'grey.800',
//                 marginTop: 1,
//                 fontWeight: 'bold',
//               }}
//             >
//               {profileData.email}
//             </Typography>
//           </Box>

//           <Box>
//             <Typography variant="h6">Address</Typography>
//             <TextField
//               name="address"
//               label="Address"
//               multiline
//               rows={5}
//               variant="outlined"
//               value={value.address}
//               onChange={handleChange}
//               sx={{
//                 marginTop: 1,
//                 backgroundColor: 'grey.800',
//                 borderRadius: 1,
//               }}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'flex-end',
//               marginTop: 2,
//             }}
//           >
//             <Button
//               variant="contained"
//               color="warning"
//               onClick={submitAddress}
//               sx={{
//                 fontWeight: 'bold',
//                 backgroundColor: 'warning.main',
//                 '&:hover': {
//                   backgroundColor: 'warning.dark',
//                 },
//               }}
//             >
//               Update
//             </Button>
//           </Box>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default Settings;
// import React, (useEffect, useState } from "react";

//     import axios from "axios";
    
//     Import Loader from "../Loader/Loader";
    
//     const Settings() => {
    
//     const [Value, setValue] useState((address: "" });
    
//     const [ProfileData, setProfileData] useState();
    
//     const headers = {
    
//     id: localStorage.getItem("id"),
    
//     authorization: Bearer ${localStorage.getItem("token")}",
    
//     };
    
//     useEffect(() => {
    
//     const fetch async () => {
    
//     const response await axios.get(
    
//     "http://localhost:1000/api/v1/get-user-information", (headers)
    
//     ); SetProfileData(response.data)
    
//     setValue({ address: response.data.address));
    
//     };
    
//     fetch();
    
//     []);
    
//     return (
    
//     ProfileData && (
    
//     <div className="w-full h-[100%) flex items-center justify-center"> <Loader/>
    
//     </div>
//     <div className "flex gap-12">

// <div className-"">

// <label htmlFor="">Username</label>

// <p className-"p-2 rounded bg-zinc-800 mt-2 font-semibold">

// </p>

// (ProfileData.username}

// </div>

// <div className="">

// <label htmlFor="">Email</label>

// A

// <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">

// {ProfileData.email}

// </div>

// </div>

// <div className "mt-4 flex flex-col ">

// <label htmlFor="">Address</label>

// <textarea

// className="p-2 rounded bg-zinc-800 mt-2 font-semibold"

// rows="5"

// placeholder="Address"

// name="address"

// value-(Value.address}

// />

// </div>

// <div className "mt-4 flex justify-end ">

// <button className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400
// className="p-2 rounded bg-zinc-800 mt-2 font-semibold"

// rows="5"

// placeholder="Address"

// name="address"

// value={Value.address}

// onChange={change}

// />

// </div>

// <div className="mt-4 flex justify-end ">

// <button

// className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400 tram onClick={submitAddress}

// >

// Update

// </button>

// </div>

// </div>

// )}

// </>

// );

// };

// export default Settings;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const Settings = () => {
  const [value, setValue] = useState({ address: "" });
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-user-information", { headers });
        setProfileData(response.data);
        setValue({ address: response.data.address });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user information:", error);
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitAddress = async () => {
    try {
      await axios.put(
        "http://localhost:1000/api/v1/update-address",
        { address: value.address },
        { headers }
      );
      alert("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-[100%] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {profileData && (
        <div className="flex flex-col gap-12 p-4">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="username">Username</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {profileData.username}
              </p>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {profileData.email}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <label htmlFor="address">Address</label>
            <textarea
              className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
              rows="5"
              placeholder="Address"
              name="address"
              value={value.address}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400 transition-all duration-300"
              onClick={submitAddress}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;

