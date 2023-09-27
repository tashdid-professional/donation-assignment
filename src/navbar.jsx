import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between w-3/4 mx-auto">
      <div className="flex items-center">
        <img src="/Resources/Logo.png" alt="Logo" />
      </div>
      <div className="space-x-14 text-lg font-medium">
        <Link to="/" className=" text-lg font-semibold">
          Home
        </Link>
        <Link to="/donation" className=" text-lg hover:text-yellow-300">
          Donation
        </Link>
        <Link to="/statistics" className=" text-lg hover:text-yellow-300">
          Statistics
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
