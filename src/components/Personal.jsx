import Mert from "../assets/mert.png";
import { TypeAnimation } from "react-type-animation";

const Personal = () => {
  return (
    <div className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <div className="grid sm:grid-cols-2 gap-4">
          <img src={Mert} alt="mertöztat" />
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-6xl font-medium  py-4 text-red-300 text-center sm:text-left sm:pt-28 ">
              Hi, I'm Mert.
            </h1>
            <div
              id="intro"
              className=" text-red-500 justify-center  flex items-center gap-2 py-4 text-center sm:justify-start"
            >
              <TypeAnimation
                sequence={[
                  "<Frontend Developer/>",
                  1500, //
                  "My goal is Fullstack Developer ",
                  750,
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
  );
};

export default Personal;
