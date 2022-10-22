import { projects } from "../data";
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";

const Web = () => {
  return (
    <div className="hidden w-full min-h-screen text-gray-300 bg-slate-800 overflow-hidden sm:block">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        {/* container */}
        {projects.map((item, index) => (
          <div key={index} className="flex justify-end">
            {/* laptop mockup */}
            <div className="w-[600px] max-h-[379px] block relative">
              <img className="" src={laptop} alt="" />
              {/* phone screen */}
              <div className="w-[451px] h-[283px]  absolute top-[18px] left-[68px] overflow-scroll phone">
                <img src={item.web} alt="" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
