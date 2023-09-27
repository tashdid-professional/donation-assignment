import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './App.css';


const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between w-3/4 mx-auto">
      <div className="flex items-center">
        <img src="/Resources/Logo.png" alt="Logo" />
      </div>
      <div className="space-x-14 text-lg font-medium">
        <NavLink
          to="/"
          className="text-lg font-semibold"
          activeClassName="active-link" 
          exact 
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className="text-lg hover:text-yellow-300"
          activeClassName="active-link"
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className="text-lg hover:text-yellow-300"
          activeClassName="active-link"
        >
          Statistics
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
