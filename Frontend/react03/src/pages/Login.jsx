
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { authActions } from "../Store/auth";
// import { Box, Button, TextField, Typography, Snackbar, Alert } from "@mui/material";

// const Login = () => {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });

//   const [error, setError] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       if (values.username === "" || values.password === "") {
//         setError("Please fill in both username and password fields");
//         setOpenSnackbar(true);
//         return;
//       }

//       const response = await axios.post(
//         "http://localhost:3002/users/signin",
//         values
//       );

//       dispatch(authActions.login());
//       dispatch(authActions.changeRole(response.data.role));

//       localStorage.setItem("id", response.data.id);
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("role", response.data.role);

//       navigate("/profile");
//     } catch (error) {
//       setError(error.response?.data?.message || "An error occurred");
//       setOpenSnackbar(true);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         bgcolor: 'background.default',
//         px: 3,
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: 400,
//           width: '100%',
//           bgcolor: 'background.paper',
//           borderRadius: 2,
//           boxShadow: 3,
//           p: 3,
//         }}
//       >
//         <Typography variant="h4" component="h2" gutterBottom align="center">
//           Log In
//         </Typography>
//         {error && (
//           <Snackbar
//             open={openSnackbar}
//             autoHideDuration={6000}
//             onClose={handleCloseSnackbar}
//             message={error}
//             action={
//               <Button color="inherit" onClick={handleCloseSnackbar}>
//                 Close
//               </Button>
//             }
//           >
//             <Alert onClose={handleCloseSnackbar} severity="error">
//               {error}
//             </Alert>
//           </Snackbar>
//         )}
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             fullWidth
//             label="Username"
//             margin="normal"
//             name="username"
//             value={values.username}
//             onChange={handleChange}
//             variant="outlined"
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             margin="normal"
//             name="password"
//             type="password"
//             value={values.password}
//             onChange={handleChange}
//             variant="outlined"
//             required
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             sx={{ mt: 2 }}
//           >
//             Log In
//           </Button>
//         </Box>
//         <Typography align="center" variant="body2" color="textSecondary" sx={{ mt: 2 }}>
//           Or
//         </Typography>
//         <Typography align="center" variant="body2" color="textSecondary">
//           Don&apos;t have an account?{' '}
//           <Link to="/signin">
//             <Button color="primary">Sign Up</Button>
//           </Link>
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Login;
// import React, { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import { authActions } from "../Store/auth";

// import { useDispatch } from "react-redux";

// import axios from "axios";

// const LogIn = () => {

// const [Values, setValues)] * useState({

// username:

// password: "",

// });

// const navigate = useNavigate();

// const dispatch = useDispatch();

// const change = (e) => {

// const { name, value } = e.target;

// setValues({ ...Values, [name]: value });

// };

// const submit = async () => {

// try {

// if (Values.username === || Values.password === "") {

// alert("All fields are required");

// } else {
    
//     const response = await axios.post( "http://localhost:1000/api/v1/sign-in", Values
    
//     );
//    //console.log(response.data.id);

// dispatch(authActions.login());

// dispatch(authActions.changeRole(response.data.role));

// localStorage.setItem("id", response.data.id);

// localStorage.setItem("token", response.data.token);

// localStorage.setItem("role", response.data.role);

// navigate("/profile");

// //navigate("/LogIn");
    
//     }
    
//     } catch (error) {
    

//     alert(error.response.data.message);
    
    
//     }
    
//     };
//     className="w-full mt-2bg-zinc-900 text-zinc-100 p-2 outline-none"

// placeholder="username",

// name="username"

// required

// value={Values.username}

// onChange={change}

// />

// </div>

// <div className="mt-4">

// <label htmlFor="" className="text-zinc-400">

// Password

// </label>

// <input

// I

// type="password"

// className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none

// placeholder="password"

// name="password"

// required

// value={Values.password

// onChange={change}

// password

// (property) password: string

// />

// </div>

// <div className="mt-4">

// <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-b onClick={submit}

// LogIn

// </button>

// </div>

// <p className="flex mt-4 items-center justify-centertext-zinc-200 font-semibold">

// Or

// </p>

// <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">

// Don't have an account? &nbsp;

// <Link to="/signup" className="hover: text-blue-500">

// <u>Sign Up</u>

// </Link>


// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../Store/auth";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };

  const submit = async () => {
    try {
      if (values.username === "" || values.password === "") {
        setError("Please fill in both username and password fields");
        return;
      }

      const response = await axios.post(
        "http://localhost:1000/api/v1/sign-in",
        values
      );

      dispatch(authActions.login());
      dispatch(authActions.changeRole(response.data.role));

      localStorage.setItem("id", response.data.id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      navigate("/profile");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl text-white font-semibold mb-4">Log In</h2>
      {error && (
        <div className="bg-red-500 text-white p-2 rounded mb-4">
          {error}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="username" className="text-zinc-400 block mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={change}
          className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none rounded"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-zinc-400 block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={change}
          className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none rounded"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          onClick={submit}
        >
          Log In
        </button>
      </div>
      <p className="text-center text-zinc-200 font-semibold">Or</p>
      <p className="text-center text-zinc-500 font-semibold">
        Don't have an account?{" "}
        <Link to="/signup" className="hover:text-blue-500">
          <u>Sign Up</u>
        </Link>
      </p>
    </div>
  );
};

export default Login;