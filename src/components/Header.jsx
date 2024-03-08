import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  const logoutClick = () => {
    navigate("/login");
  };

  return (
    <div className="header bg-slate-700 text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link
          className="font-bold text-2xl text-white hover:text-red-700"
          to="/"
        >
          Ai TechHub
        </Link>
      </div>
      <div className="links--wrapper">
        {user ? (
          <>
            <Link to="/" className="font-bold mr-4">
              Home
            </Link>
            <Link to="/chat" className="font-bold mr-4">
              Chat
            </Link>
            <Link to="/course" className="font-bold mr-4">
              Courses
            </Link>
            <Link to="/profile" className="font-bold mr-4">
              Profile
            </Link>

            <button
              onClick={logoutUser}
              className="btn mr-4 bg-transparent hover:bg-orange-400 text-Red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
// zaheed123
