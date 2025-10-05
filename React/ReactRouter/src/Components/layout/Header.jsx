 import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icon library (install lucide-react)

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* Top Banner */}
      <div className="bg-gray-700 text-white text-sm px-4 py-2 flex justify-between items-center">
        <p>Get Membership, 30-days return or refund guarantee.</p>
        <div className="space-x-3">
          <NavLink
            to="/signin"
            className="border border-white rounded px-3 py-1 hover:bg-white hover:text-gray-900 transition"
          >
            SIGN IN
          </NavLink>
          <NavLink
            to="/signup"
            className="border border-white rounded px-3 py-1 hover:bg-white hover:text-gray-900 transition"
          >
            SIGN UP
          </NavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-red-600">
          NETFLIX
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition"
            }
          >
            MOVIES
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition"
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block hover:text-red-400">
            HOME
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-red-400">
            ABOUT
          </NavLink>
          <NavLink to="/movie" onClick={() => setMenuOpen(false)} className="block hover:text-red-400">
            MOVIES
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-red-400">
            CONTACT
          </NavLink>
        </div>
      )}
    </header>
  );
};
