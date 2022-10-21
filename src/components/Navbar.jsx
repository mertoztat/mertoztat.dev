import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  // bg-[#1f2020]
  return (
    <div className="fixed w-full h-[80px]   text-gray-300 flex items-center justify-around px-5 z-20">
      Logo
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contacts</li>
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
    </div>
  );
};

export default Navbar;
