import { projects } from "../data";
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";
import { FaIntercom } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="w-full min-h-screen text-gray-300 bg-slate-800 overflow-hidden">
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* container */}
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-10 flex-col md:flex-row items-center flex-wrap"
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                Work
              </p>
              <p className="py-5 max-w-sm">{item.description}</p>
            </div>
            {/* phone mock up */}
            <div className="max-w-[300px] max-h-[600px] relative mt-10">
              <img className="" src={phone} alt="" />
              {/* phone screen */}
              <div className="max-w-[264px] max-h-[567px] h-full w-full absolute top-[17px] left-[18px] rounded-[28px] overflow-auto phone">
                <img src={item.mobil} alt="" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phone;
