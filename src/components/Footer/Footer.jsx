import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
