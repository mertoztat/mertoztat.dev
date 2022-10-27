import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto h-3/4 flex justify-center items-center ">
        <div className="flex  align-center justify-center cursor-pointer ">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-center  tracking-wider"
          >
            <p className="text-4xl sm:text-5xl select-none  inline font-bold text-purple-200 border-b-4 border-r-4 pr-2 border-purple-500 tracking-wide  text-center md:text-center">
              About me
            </p>

            <p className="py-10 px-10 select-none text-center max-w-[500px] text-purple-100">
              I really love learning new technologies and coding. Following this
              passion, I changed my career as a frontend developer. I usually
              develop projects using react and next js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
