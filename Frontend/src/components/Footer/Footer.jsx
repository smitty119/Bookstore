
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center space-y-4 md:space-y-0">
          {/* Logo and Social Icons */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h6 className="text-lg font-bold">BOOK WORLD</h6>
            <div className="mt-2 flex justify-center md:justify-start space-x-2">
              <a href="https://www.facebook.com/" className="text-gray-700 hover:text-gray-900">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com/" className="text-gray-700 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/" className="text-gray-700 hover:text-gray-900">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Shop and About Links */}
          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap space-x-4">
              <div className="w-1/2">
                <h6 className="text-sm  uppercase">Shop</h6>
                <ul className="list-none p-0">
                  <li>
                    <a href="/products/english" className="text-gray-700 hover:text-gray-900">English Books</a>
                  </li>
                  <li>
                    <a href="/products/malay" className="text-gray-700 hover:text-gray-900">Malayalam Books</a>
                  </li>
                  <li>
                    <a href="/products/malay" className="text-gray-700 hover:text-gray-900">Hindi Books</a>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">&#169; Read Learn Enjoy By Smitty :)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
