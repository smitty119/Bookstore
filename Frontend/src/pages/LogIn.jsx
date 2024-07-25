
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (Values.username === "" || Values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:3002/users/signin",
          Values
        );

        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/profile");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="h-[75vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 text-white"
      style={{ backgroundImage: 'url("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4NzE4MzAzLWltYWdlLWt3dnhqNDhyLmpwZw.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <h4 className="text-zinc-200 text-xl text-center">Login</h4>
        
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
            <button
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300"
              onClick={submit}
            >
              Login
            </button>
          </div>

          <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
            Or
          </p>

          <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
            Don't Have an Account?{" "}
            <Link to="/SignUp" className="hover:text-blue-500">
              <u>Sign Up</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
