import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-teal-700 font-semibold rounded-md px-4 py-2 transition-all duration-200"
      : "text-white hover:bg-white hover:text-teal-700 font-medium rounded-md px-4 py-2 transition-all duration-200";

  return (
    <nav className="bg-teal-700 border-b border-teal-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Rent A Car Logo" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2 tracking-wide">
              Rent A Car
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/cars" className={linkClass}>Browse Cars</NavLink>
            <NavLink to="/add-car" className={linkClass}>Add Car</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-teal-700 px-4 pt-4 pb-6 space-y-2">
            <NavLink
              to="/"
              className="block text-white hover:bg-white hover:text-teal-700 font-medium rounded-md px-4 py-2 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/cars"
              className="block text-white hover:bg-white hover:text-teal-700 font-medium rounded-md px-4 py-2 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Cars
            </NavLink>
            <NavLink
              to="/add-car"
              className="block text-white hover:bg-white hover:text-teal-700 font-medium rounded-md px-4 py-2 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Add Car
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar
