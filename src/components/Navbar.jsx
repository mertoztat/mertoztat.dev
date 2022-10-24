import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  // bg-[#1f2020]
  return (
    <div className="fixed w-full h-[80px] text-gray-300 flex items-center justify-around px-5 z-20 shadow-xl bg-zinc-800/95">
      <div className="w-20 pt-4">
        <Link to="/">
          <img
            className="w-20 flex items-center justify-center cursor-pointer"
            src={logo}
            alt="mertöztat"
          />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="projects">
          <li>Projects</li>
        </Link>
        <Link to="/contacts">
          <li>Contacts</li>
        </Link>
      </ul>
      {/* Hamburger Menu */}
      <div className="cursor-pointer md:hidden z-20" onClick={handleClick}>
        {clicked ? <FaTimes size={30} /> : <FaBars size={20} />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          clicked
            ? "absolute top-0 left-0 flex flex-col text-gray-300 h-screen w-screen bg-[#1f2020] items-center justify-center"
            : "hidden"
        }
      >
        <li className="py-4 text-2xl items-center justify-center hover:scale-150 transition duration-300 ease-in-out ">
          Home
        </li>
        <li className="py-4 text-2xl items-center justify-center hover:scale-150  transition duration-300 ease-in-out ">
          About
        </li>
        <li className="py-4 text-2xl items-center justify-center hover:scale-150  transition duration-300 ease-in-out">
          Skills
        </li>
        <li className="py-4 text-2xl items-center justify-center hover:scale-150 transition duration-300 ease-in-out ">
          Projects
        </li>
        <li className="py-4 text-2xl items-center justify-center hover:scale-150  transition duration-300 ease-in-out">
          Contacts
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
