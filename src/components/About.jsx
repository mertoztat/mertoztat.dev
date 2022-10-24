import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto h-full ">
        <div className="flex  align-center justify-center cursor-pointer ">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="md:text-center text-right tracking-wider"
          >
            <p className="text-4xl sm:text-5xl font-bold text-red-200 tracking-wide  text-center md:text-center">
              About me
            </p>
            {/* <div className="py-8 text-center"> */}
            <p className="py-8 px-4 text-center max-w-[500px] text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, quam impedit commodi eos excepturi natus recusandae,
              dignissimos obcaecati, eaque vel tempore! Accusantium architecto
              alias aliquam ab sit quaerat voluptas voluptates.
            </p>
            {/* </div>   */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
