
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from "../pages/SeeUserData";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [userDiv, setUserDiv] = useState("hidden");
  const [userDivData, setUserDivData] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3002/order/all-orders", { headers });
        setAllOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleViewUser = (user) => {
    setUserDiv("fixed");
    setUserDivData(user);
  };

  return (
    <div className="mt-8 px-4">
      <h4 className="text-3xl text-yellow-100">All Orders</h4>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allOrders.map((order, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-white">{order.orderNumber}</h2>
              <Link to={`/profile/${order.userid}`} className="text-yellow-500 hover:text-yellow-400">
                <IoOpenOutline />
              </Link>
            </div>
            <p className="text-gray-400">{order.customerName}</p>
            <p className="text-gray-400">{order.orderDate}</p>
            <p className="text-gray-400">{order.status}</p>

            <div className="mt-4">
              <button
                className="text-xl text-orange-500 hover:text-orange-400"
                onClick={() => handleViewUser(order.user)}
              >
                <IoOpenOutline />
              </button>
            </div>
          </div>
        ))}
      </div>

      {userDivData && (
        <SeeUserData
          userDivData={userDivData}
          userDiv={userDiv}
          setUserDiv={setUserDiv}
        />
      )}
    </div>
  );
};

export default AllOrders;
