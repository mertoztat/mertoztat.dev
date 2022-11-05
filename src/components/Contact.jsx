import { useRef, useState } from "react";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
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
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center p-4">
        {/* contact container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2  shadow-2xl rounded-xl bg-gradient-to-t from-purple-900/40  to-slate-900  ">
          <div
            className="hidden relative sm:block"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <img
              className="hidden sm:rounded-l-xl w-full h-full sm:block object-cover"
              src={contact}
              alt="contact me"
            />
            <div className="flex flex-col gap-10 z-20 invisible sm:visible sm:absolute sm:top-1/2 left-3 sm:-translate-y-1/2">
              <a
                href="https://twitter.com/mertoztat"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  className="text-white cursor-pointer hover:text-[#00acee] duration-200 hover:scale-125"
                  size={30}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mertoztat/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                  className="text-white cursor-pointer hover:text-[#0072b1] duration-200 hover:scale-125"
                  size={30}
                />
              </a>
              <a
                href="http://www.github.com/mertoztat"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                  className="text-white cursor-pointer hover:text-[#9305be] duration-200 hover:scale-125  "
                  size={30}
                />
              </a>
            </div>
          </div>

          <div
            className="flex flex-col sm:max-w-full"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            {/* Form */}

            <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
              <div className="text-xl m-4 sm:text-3xl  text-center text-purple-100">
                <span className="pl-2 select-none border-l-4 border-b-4 border-purple-500">
                  Contact me!
                </span>
              </div>
              <label
                htmlFor="input_name"
                className="sm:text-xl text-purple-100 p-2 "
              >
                Name
              </label>
              <input
                className="p-2 my-1 text-purple-100   outline-none bg-transparent border-b"
                type="text"
                placeholder="Enter your name"
                name="user_name"
                id="input_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label
                htmlFor="input_email"
                className=" sm:text-xl text-purple-100 p-2"
              >
                E-mail
              </label>
              <input
                className="p-2 my-1  text-purple-100  outline-none bg-transparent border-b"
                type="email"
                placeholder="Enter your email"
                name="user_email"
                id="input_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className=" sm:text-xl text-purple-100 p-2">Message</label>
              <textarea
                className="text-purple-100  outline-none p-2 my-1 bg-transparent resize-none"
                name="message"
                value={message}
                rows="4"
                cols="50"
                placeholder="Contact me!"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="p-3 rounded bg-purple-900/90 text-purple-100 ext-xl hover:bg-purple-900/60 hover:text-white"
              >
                Send Email
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
