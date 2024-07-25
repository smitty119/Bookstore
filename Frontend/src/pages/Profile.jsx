import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import Loader from '../components/Loader/Loader';
import { Outlet } from "react-router-dom";
//import { useSelector } from "react-redux";
import axios from "axios";
import MobileNav from "../components/Profile/MobileNav";

const Profile = () => {
  //const isLoggedIn = useSelector();
  const [profile, setProfile] = useState(null);  // Properly initialize the profile state
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/users/get-user-information",
          { headers }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-zinc-900 text-white"
      style={{
        backgroundImage: 'url(https://www.neh.gov/sites/default/files/2018-06/openbooks.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" px-2 md:px-12 flex flex-col md:flex-row py-8 gap-4 text-white">
        {!profile && (
          <div className="w-full h-[100%] flex items-center justify-center">
            <Loader />
          </div>
        )}

        {profile && (
          <>
            <div className="w-full md:w-1/6 h-auto lg:h-screen">
              <Sidebar data={profile} />
              <MobileNav />
            </div>

            <div className="w-full md:w-5/6">
              <Outlet />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;



// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Profile/Sidebar";
// import Loader from '../components/Loader/Loader';
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import MobileNav from "../components/Profile/MobileNav";

// const Profile = () => {
//   const [profile, setProfile] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:3002/users/get-user-information",
//         { headers }
//       );
//       setProfile(response.data);
//     };

//     fetch();
//   }, []);

//   return (
//     <div
//       className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row py-8 gap-4 text-white"
//       style={{
//         backgroundImage: 'url(https://www.neh.gov/sites/default/files/2018-06/openbooks.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {!profile && (
//         <div className="w-full h-[100%] flex items-center justify-center">
//           <Loader />
//         </div>
//       )}

//       {profile && (
//         <>
//           <div className="w-full- md:w-1/6 h-auto lg:h-screen bg-opacity-50">
//             <Sidebar data={profile} />
//             <MobileNav />
//           </div>

//           <div className="w-full md:w-5/6 bg-opacity-50">
//             <Outlet />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Profile/Sidebar";
// import Loader from '../components/Loader/Loader';
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import MobileNav from "../components/Profile/MobileNav";

// const Profile = () => {
//   const [profile, setProfile] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:3002/users/get-user-information",
//         { headers }
//       );
//       setProfile(response.data);
//     };

//     fetch();
//   }, []);

//   return (
    // <div
    //   className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row py-8 gap-4 text-white"
    //   style={{
    //     backgroundImage: 'url(https://www.neh.gov/sites/default/files/2018-06/openbooks.jpg)',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //   }}
    // >
//       {!profile && (
//         <div className="w-full h-[100%] flex items-center justify-center">
//           <Loader />
//         </div>
//       )}

//       {profile && (
//         <>
//           <div className="w-full md:w-1/6 h-auto lg:h-screen bg-opacity-50">
//             <Sidebar data={profile} />
//             <MobileNav className="hide-mobile" />
//           </div>

//           <div className="w-full md:w-5/6 bg-opacity-50">
//             <Outlet />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Profile/Sidebar";
// import Loader from '../components/Loader/Loader';
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import MobileNav from "../components/Profile/MobileNav";

// const Profile = () => {
//   const [profile, setProfile] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:3002/users/get-user-information",
//         { headers }
//       );
//       setProfile(response.data);
//     };

//     fetch();
//   }, []);

//   return (
//     <div
//       className="flex flex-col min-h-screen bg-zinc-900 text-white"
//       style={{
//         backgroundImage: 'url(https://www.neh.gov/sites/default/files/2018-06/openbooks.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {!profile && (
//         <div className="flex-grow flex items-center justify-center">
//           <Loader />
//         </div>
//       )}

//       {profile && (
//         <div className="flex-grow flex flex-col md:flex-row py-8 gap-4">
//           <div className="w-full md:w-1/6 h-auto lg:h-screen bg-opacity-50">
//             <Sidebar data={profile} />
//             <div className="md:hidden">
//               <MobileNav />
//             </div>
//           </div>

//           <div className="w-full md:w-5/6 bg-opacity-50">
//             <Outlet />
//           </div>
//         </div>
//       )}

//       {/* <footer className="bg-zinc-800 text-zinc-200 py-4 text-center">
        
//       </footer> */}
//     </div>
//   );
// };

// export default Profile; */}
