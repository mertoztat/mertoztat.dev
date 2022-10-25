import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  return (
    <>
      <div className="fixed w-full h-[80px] text-gray-300 flex items-center justify-around px-5 z-20 shadow-xl bg-zinc-800/95">
        <div className="w-20 pt-4">
          <Link to="/">
            <motion.div
              initial={{ x: "1000%", scale: 0.5, opacity: 0 }}
              animate={{ x: "0%", opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                className="w-20 flex items-center justify-center cursor-pointer"
                src={logo}
                alt="mertöztat"
              />
            </motion.div>
          </Link>
        </div>
        <ul className="hidden md:flex">
          <li className="hover:text-purple-200">
            <Link to="/">Home </Link>
          </li>

          <li className="hover:text-purple-200">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:text-purple-200">
            <Link to="/skills">Skills</Link>
          </li>
          <Link to="projects">
            <li className="hover:text-purple-200">Projects</li>
          </Link>

          <li className="hover:text-purple-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div className="cursor-pointer md:hidden z-20" onClick={handleClick}>
          {clicked ? (
            <FaTimes className="text-purple-200" size={30} />
          ) : (
            <FaBars className="text-purple-200" size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            clicked
              ? "absolute top-0 left-0 flex flex-col text-gray-300 h-screen w-screen bg-[#1f2020] items-center justify-center"
              : "hidden"
          }
        >
          <li className="py-4 text-2xl items-center justify-center hover:scale-125 transition duration-300 ease-in-out  hover:text-purple-200">
            Home
          </li>
          <li className="py-4 text-2xl items-center justify-center hover:scale-125  transition duration-300 ease-in-out  hover:text-purple-200">
            About
          </li>
          <li className="py-4 text-2xl items-center justify-center hover:scale-125  transition duration-300 ease-in-out hover:text-purple-200">
            Skills
          </li>
          <li className="py-4 text-2xl items-center justify-center hover:scale-125 transition duration-300 ease-in-out hover:text-purple-200">
            Projects
          </li>
          <li className="py-4 text-2xl items-center justify-center hover:scale-125  transition duration-300 ease-in-out hover:text-purple-200">
            Contact
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
