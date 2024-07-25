
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
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
          "http://localhost:3002/users/signup",
          Values
        );
        alert(response.data.message);
        navigate("/LogIn");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="h-auto bg-cover bg-center px-12 py-8 flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4NzE4MzAzLWltYWdlLWt3dnhqNDhyLmpwZw.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <h4 className="text-zinc-200 text-xl text-center">Create An Account</h4>
        
        <div className="mt-4">
          <div>
            <label htmlFor="username" className="text-zinc-400">
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
            <label htmlFor="email" className="text-zinc-400">
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
            <label htmlFor="password" className="text-zinc-400">
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
            <label htmlFor="address" className="text-zinc-400">
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
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300"
              onClick={submit}
            >
              Sign Up
            </button>
          </div>

          <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
            Or
          </p>

          <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
            Have an Account? {" "}
            <Link to="/LogIn" className="hover:text-blue-500">
              <u> Login</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
