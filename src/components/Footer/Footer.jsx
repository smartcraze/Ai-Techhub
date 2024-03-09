import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/course" className="hover:text-gray-300 transition-colors duration-300">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300 transition-colors duration-300">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/chat" className="hover:text-gray-300 transition-colors duration-300">
              Chat
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
