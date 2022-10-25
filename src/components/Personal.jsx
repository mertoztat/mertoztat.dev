import Mert from "../assets/mert.png";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Personal = () => {
  return (
    <div className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <div className="grid sm:grid-cols-2 gap-4">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={Mert} alt="mertöztat" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-6xl font-medium  py-4 text-purple-200 text-center sm:text-left sm:pt-28 ">
                Hi, I'm Mert.
              </h1>
              <div
                id="intro"
                className=" text-purple-300 justify-center  flex items-center gap-2 py-4 text-center sm:justify-start"
              >
                <TypeAnimation
                  sequence={[
                    "<Self Taught Frontend Developer/>",
                    1500, //
                    "My goal is a Fullstack Developer",
                    750,
                    "I like to try new stuffs & learn new technologies..",
                    1200,
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={Infinity}
                  style={{ fontSize: "24px", maxWidth: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
