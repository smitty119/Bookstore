
import React from 'react';
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "AllBooks", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "Admin Profile", link: "/profile" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  if (!isLoggedIn) {
    links.splice(2, 2);
  } else if (role === "user") {
    links.splice(4, 1);
  } else if (role === "admin") {
    links.splice(3, 1);
  }

  return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-semibold">Book World</h1>
      </Link>
      <div className="nav-links-bookheaven block md:flex items-center gap-4">
        <div className="hidden md:flex gap-4">
          {links.map((items, i) => (
            <div className="flex items-center" key={i}>
              {items.title === "Profile" || items.title === "Admin Profile" ? (
                <Link
                  to={items.link}
                  className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-300"
                >
                  {items.title}
                </Link>
              ) : (
                <Link
                  to={items.link}
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  {items.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:flex gap-4">
          <Link
            to="/LogIn"
            className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition duration-300"
          >
            Log In
          </Link>
          <Link
            to="/SignUp"
            className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

