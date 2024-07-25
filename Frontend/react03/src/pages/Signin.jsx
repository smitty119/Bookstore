
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Signin = () => {
// //   const [Values, setValues] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     address: "",
// //   });

// //   const navigate = useNavigate();

// //   const change = (e) => {
// //     const { name, value } = e.target;
// //     setValues({ ...Values, [name]: value });
// //   };

// //   const submit = async () => {
// //     try {
// //       if (
// //         Values.username === "" ||
// //         Values.email === "" ||
// //         Values.password === "" ||
// //         Values.address === ""
// //       ) {
// //         alert("All fields are required");
// //       } else {
// //         const response = await axios.post(
// //           "http://localhost:3002/users/signup",
// //           Values
// //         );
// //         alert(response.data.message);
// //         navigate("/LogIn");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
// //       <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
// //         <p className="text-zinc-200 text-xl">Create An Account</p>
        
// //         <div className="mt-4">
// //           <label htmlFor="" className="text-zinc-400">
// //             Username
// //           </label>
// //           <input
// //             type="text"
// //             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
// //             placeholder="Username"
// //             name="username"
// //             required
// //             value={Values.username}
// //             onChange={change}
// //           />
// //         </div>

// //         <div className="mt-4">
// //           <label htmlFor="" className="text-zinc-400">
// //             Email
// //           </label>
// //           <input
// //             type="text"
// //             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
// //             placeholder="xyz@example.com"
// //             name="email"
// //             required
// //             value={Values.email}
// //             onChange={change}
// //           />
// //         </div>

// //         <div className="mt-4">
// //           <label htmlFor="" className="text-zinc-400">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
// //             placeholder="Password"
// //             name="password"
// //             required
// //             value={Values.password}
// //             onChange={change}
// //           />
// //         </div>

// //         <div className="mt-4">
// //           <label htmlFor="" className="text-zinc-400">
// //             Address
// //           </label>
// //           <textarea
// //             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
// //             rows="5"
// //             placeholder="Address"
// //             name="address"
// //             required
// //             value={Values.address}
// //             onChange={change}
// //           />
// //         </div>

// //         <div className="mt-4">
// //           <button
// //             className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
// //             onClick={submit}
// //           >
// //             Sign Up
// //           </button>
// //         </div>

// //         <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
// //           Or
// //         </p>

// //         <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
// //            Have an account?{" "}
// //           <Link to="/Login" className="hover:text-blue-500">
// //             <u>Sign In</u>
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signin;
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';

// const Signin = () => {
//   const [values, setValues] = useState({
//     username: '',
//     email: '',
//     password: '',
//     address: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (values.username === '' || values.email === '' || values.password === '' || values.address === '') {
//         alert('All fields are required');
//       } else {
//         const response = await axios.post('http://localhost:3002/users/signup', values);
//         alert(response.data.message);
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3 }}>
//       <Typography component="h1" variant="h5" gutterBottom>
//         Create An Account
//       </Typography>
//       <Box
//         component="form"
//         noValidate
//         onSubmit={handleSubmit}
//         sx={{ mt: 3 }}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               value={values.username}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               autoComplete="username"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               autoComplete="email"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               value={values.password}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               autoComplete="current-password"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               id="address"
//               label="Address"
//               name="address"
//               value={values.address}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               multiline
//               rows={4}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign Up
//         </Button>
//         <Typography variant="body2" align="center" color="text.secondary">
//           Or
//         </Typography>
//         <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 2 }}>
//           Have an account?{' '}
//           <Link to="/login" style={{ textDecoration: 'underline', color: '#1976d2' }}>
//             Login
//           </Link>
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default Signin;
/ import React, { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import axios from "Axios"
// const SignUp = () => {

//     const [Values, setValues] = useState({
    
//     username:"",
    
//     email:"",
    
//     password:"",
    
//     address:"",
    
//     });
//     const change = (e) => {

//         const { name, value } = e.target;
        
//         setValues({ ...Values, [name]: value });
        
//         };

//         const submit=async()=>{
//             try {
//                 if (

//                     Values.username ===""||
                    
//                     Values.email === ""||
                    
//                     Values.password ===""||
                    
//                     Values.address ===""||

// ) {

// alert("All fields are required");

// } else {

// const response = await axios.post(

// "http://localhost:3001/users/signup", Values

// );
// alert(response.data.message);

// navigate("/LogIn");

// }

// } catch (error) {

// console.log(error);

// }

// }
// return (

// <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center"> <div className="bg-zinc-800 rounded-1g px-8 py-5 w-full md:w-3/6 lg:w-2/6">

// <p className="text-zinc-200 text-xl">Sign Up</

// <div className="mt-4">

// <div>

// <label htmlFor="" className="text-zinc-400">

// Username

// </label>

// <input

// type="text"

// className="w-full mt-2 bg-zinc-900text-zinc-100 p-2 outline-none"

// placeholder="username"

// name="username"

// required
// value={Values.username}
// onChange={change}

// />

// </div>

// <div className="mt-4"></div>
// <label htmlFor="" className="text-zinc-400">

// Email

// </label>

// <input

// type="text"

// className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"

// placeholder="xyz@example.com"

// name="email"

// required
// value={Values.email}
// onChange={change}

// />

// </div>

// <div className="mt-4"></div>

// <label htmlFor="" className="text-zinc-400">

// Password

// </label>

// <input

// type="password"

// className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none

// placeholder="password";

// name="password"

// required
// value={Values.password}
// onChange={change}
// />

// </div>

// <div className="mt-4">

// <label htmlFor="" className=" text-zinc-400">

// Address

// </label>

// <textarea

// className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"

// rows="5"

// placeholder="address"
// name="address"

// required
// value={Values.address}
// onChange={change}

// />

// </div>

// <div className="mt-4">

// <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hov

// SignUp

// </button>

// </div>

// <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold onClick={submit}">
// </div>
// </div></div>
// export default Signin;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//   const [Values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     address: "",
//   });

//   const navigate = useNavigate();

//   const change = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...Values, [name]: value });
//   };

//   const submit = async () => {
//     try {
//       if (
//         Values.username === "" ||
//         Values.email === "" ||
//         Values.password === "" ||
//         Values.address === ""
//       ) {
//         alert("All fields are required");
//       } else {
//         const response = await axios.post(
//           "http://localhost:3001/users/signup",
//           Values
//         );
//         alert(response.data.message);
//         navigate("/LogIn");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
//       <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
//         <p className="text-zinc-200 text-xl">Sign Up</p>
        
//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Username
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Username"
//             name="username"
//             required
//             value={Values.username}
//             onChange={change}
//           />
//         </div>

//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Email
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="xyz@example.com"
//             name="email"
//             required
//             value={Values.email}
//             onChange={change}
//           />
//         </div>

//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Password
//           </label>
//           <input
//             type="password"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Password"
//             name="password"
//             required
//             value={Values.password}
//             onChange={change}
//           />
//         </div>

//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Address
//           </label>
//           <textarea
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             rows="5"
//             placeholder="Address"
//             name="address"
//             required
//             value={Values.address}
//             onChange={change}
//           />
//         </div>

//         <div className="mt-4">
//           <button
//             className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
//             onClick={submit}
//           >
//             Sign Up
//           </button>
//         </div>

//         <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
//           Or
//         </p>

//         <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
//           Don't have an account?{" "}
//           <Link to="/signin" className="hover:text-blue-500">
//             <u>Sign In</u>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Values.username === "" ||
        Values.email === "" ||
        Values.password === "" ||
        Values.address === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:3001/users/signup",
          Values
        );
        alert(response.data.message);
        navigate("/LogIn");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Sign Up</p>
        
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Username
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Username"
            name="username"
            required
            value={Values.username}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Email
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="xyz@example.com"
            name="email"
            required
            value={Values.email}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Password
          </label>
          <input
            type="password"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Password"
            name="password"
            required
            value={Values.password}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Address
          </label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            rows="5"
            placeholder="Address"
            name="address"
            required
            value={Values.address}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
            onClick={submit}
          >
            Sign Up
          </button>
        </div>

        <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
          Or
        </p>

        <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
          Don't have an account?{" "}
          <Link to="/signin" className="hover:text-blue-500">
            <u>Sign In</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

