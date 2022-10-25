import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../data";
AOS.init();

const Projects = () => {
  return (
    <div name="work" className="w-full min-h-screen text-gray-300">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div
          className="pb-8"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <p className="sm:text-center text-4xl sm:text-5xl  font-bold tracking-wide  inline border-b-4 border-r-4 pr-2 text-purple-100 border-purple-600">
            Projects
          </p>
          <p className="py-6 text-md leading-7 ">
            Thats projects are created by frontend technologies like html, css,
            sass, tailwind, javascript, react js, next js <br /> and others
            technologies..
          </p>
        </div>

        {/* container for projects */}
        <div
          className="flex flex-wrap w-full h-full gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {/* Gird Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})
                `,
                backgroundSize: "cover",
              }}
              className="cursor-pointer shadow-md shadow-[#040c16] group container rounded-md 
              flex mx-auto content-div border-none outline-none"
            >
              {/* Hover effect for images */}
              <div
                style={{
                  backgroundColor: "#383838",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                className="opacity-0 group-hover:opacity-100"
              >
                <span className="text-2xl font bold text-white tracking-wider "></span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.demo} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
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
