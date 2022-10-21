import React from "react";
import contact from "../assets/contact.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#1f2020] flex justify-center  items-center p-4 ">
      {/* contact container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#050120] shadow-xl rounded-xl">
        <div className="relative">
          <img
            className="rounded-l-xl w-full h-full object-cover"
            src={contact}
            alt="contact me"
          />
          <div className="flex flex-col gap-10 z-20 invisible sm:visible sm:absolute sm:top-1/2 left-3 sm:-translate-y-1/2">
            <FaTwitter
              className="text-white cursor-pointer hover:text-[#00acee] duration-200 hover:scale-125"
              size={30}
            />
            <FaLinkedin
              className="text-white cursor-pointer hover:text-[#0072b1] duration-200 hover:scale-125"
              size={30}
            />
            <FaGithub
              className="text-white cursor-pointer hover:text-[#9305be] duration-200 hover:scale-125  "
              size={30}
            />
          </div>
        </div>
        <div className="flex flex-col sm:max-w-full bg-red-300">
          <form className="flex flex-col p-4 ">
            <span className="text-xl m-4 sm:text-3xl  text-center text-white">
              Contact me!
            </span>
            <label className="sm:text-xl text-white py-1" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 text-slate-600   outline-none bg-transparent"
              type="text"
              placeholder="Enter your name"
            />
            <label className=" sm:text-xl text-white py-1" htmlFor="email">
              E-mail
            </label>
            <input
              className="p-2 text-slate-600  outline-none bg-transparent"
              type="email"
              placeholder="Enter your email"
            />
            <label className=" sm:text-xl text-white py-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="text-slate-600  outline-none p-2 bg-transparent"
              name="message"
              rows="4"
              cols="50"
              placeholder="Contact me!"
            ></textarea>
            <button className="mt-4 p-3 rounded bg-orange-400 text-white text-xl">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
