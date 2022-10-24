import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xmz6w7b",
        "template_kgk9d8v",
        form.current,
        "FQpHPLOuimxLl6hlC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.location.reload();
  };

  return (
    <div className="w-full h-screen  flex justify-center  items-center p-4">
      {/* contact container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#0e2b29]/70 shadow-2xl rounded-xl">
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

        <div className="flex flex-col sm:max-w-full">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <div className="text-xl m-4 sm:text-3xl  text-center text-slate-300">
              <span className="border-b-2">Contact me!</span>
            </div>
            <label className="sm:text-xl text-gray-300 p-2">Name</label>
            <input
              className="p-2 my-1 text-slate-300   outline-none bg-transparent border-b"
              type="text"
              placeholder="Enter your name"
              name="user_name"
            />
            <label className=" sm:text-xl text-gray-300 p-2">E-mail</label>
            <input
              className="p-2 my-1  text-slate-300  outline-none bg-transparent border-b"
              type="email"
              placeholder="Enter your email"
              name="user_email"
            />
            <label className=" sm:text-xl text-gray-300 p-2">Message</label>
            <textarea
              className="text-slate-300  outline-none p-2 my-1 bg-transparent"
              name="message"
              rows="4"
              cols="50"
              placeholder="Contact me!"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="p-3 rounded bg-white/90 text-cyan-900 ext-xl hover:bg-cyan-900 hover:text-white"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
