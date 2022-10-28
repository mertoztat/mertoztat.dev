import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto w-full sm:hidden ">
      <div className="h-24 bg-gradient-to-b from-purple-900/70 flex items-center justify-center">
        <ul className="flex items-center justify-center  w-full">
          <li>
            <a
              href="http://www.github.com/mertoztat"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-white cursor-pointer " size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mertoztat"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-white cursor-pointer" size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mertoztat/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-white cursor-pointer " size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
