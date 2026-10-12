import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


import logo from "../assets/logo.png";


export default function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 md:top-0 z-50 ">
      <div className=" flex max-w-8xl items-center justify-between px-5 top-0 md:top-0 z-50  ">
        <div className="md:mr-40 "> 
        <Link to="/" className="text-2xl font-bold">
         <img src={logo} alt="logo"  className="md:w-50 md:h-20 w-30"/>
        </Link>
        </div>

        <div className=" flex-col md:flex md:flex-row
    absolute md:static
    top-full left-0 w-full md:w-auto
    bg-white text-black md:bg-transparent md:text-white
    p-5 md:p-0 gap-5 z-50 hidden">
          <NavLink to="/" className="hover:text-yellow-300">
            Home
          </NavLink>

          <NavLink to="/products" className="hover:text-yellow-300">
            Products
          </NavLink>

          <NavLink to="/cart" className="hover:text-yellow-300">
            Cart
          </NavLink>

          <NavLink to="/login" className="hover:text-yellow-300">
            Login
          </NavLink>
        </div>

  {/* Hamburger */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
{/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4 md:hidden">

          <Link
            to="/"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Cart
          </Link>

          <Link
            to="/login"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Login
          </Link>

        </div>
      )}








      
    </nav>
  );
}