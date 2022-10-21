import { projects } from "../data";

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#949]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-5">
            This is my project to improve my skills. I'm constantly trying to do
            new side projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-14 ">
          {/* Gird Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
              className="cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div mb-0 "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                     bg-white/80 text-gray-700 font-bold text-lg border-none outline-none"
                    >
                      Github
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.demo} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                     bg-white/80 text-gray-700 font-bold text-lg border-none outline-none"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
