import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutClick = () => {
    navigate("/login");
  };

  return (
    <div className="header bg-gray-800 text-white py-4 px-8 flex justify-between items-center relative z-10">
      <div className="flex items-center">
        <Link
          className="font-bold text-2xl text-white hover:text-red-700"
          to="/"
        >
          Ai TechHub
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        {user ? (
          <>
            <Link to="/" className="cursor-pointer font-bold mr-4">
              Home
            </Link>
            <Link to="/chat" className="cursor-pointer font-bold mr-4">
              Chat
            </Link>
            <Link to="/course" className="cursor-pointer font-bold mr-4">
              Courses
            </Link>
            <Link to="/profile" className="font-bold cursor-pointer mr-4">
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
      {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute bg-gray-800 py-2 px-4 top-16 left-0 right-0 z-20">
          <Link
            to="/"
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
          >
            Home
          </Link>
          <Link
            to="/chat"
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
          >
            Chat
          </Link>
          <Link
            to="/course"
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
          >
            Courses
          </Link>
          <Link
            to="/profile"
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
          >
            Profile
          </Link>
          {user && (
            <button
              onClick={logoutUser}
              className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
            >
              Logout
            </button>
          )}
          {!user && (
            <Link
              to="/login"
              className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
