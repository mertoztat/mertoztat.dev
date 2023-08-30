import { projects } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
AOS.init();

const Projects = () => {
  const [increase, setIncrease] = useState(4);
  const myGithub = "https://github.com/mertoztat";

  const loadMore = () => {
    if (projects.length === increase) {
      window.location.assign(myGithub, "_blank");
    }
    setIncrease((increase) => increase + 2);
  };
  return (
    <div className="w-full min-h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto min-h-screen p-4 ">
        {/* container  */}
        <div
          className="flex flex-wrap justify-center items-center w-full min-h-screen gap-6 mt-20"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="700"
          >
            <p className="sm:text-center text-4xl sm:text-5xlselect-none  font-bold tracking-wide  inline border-b-4 border-r-4 pr-2 text-purple-100 border-purple-600">
              Projects
            </p>
            <p className="py-6   text-md leading-7 select-none ">
              Thats projects are created by frontend technologies like html,
              css, sass, tailwindcss, javascript, typescript, reactjs, nextjs{" "}
              <br /> and others technologies..
            </p>
          </div>
          {projects.slice(0, increase).map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})
                `,
                backgroundSize: "cover",
              }}
              className=" shadow-md shadow-[#040c16] group container rounded-md 
              flex mx-auto content-div border-none outline-none"
            >
              {/* Hover effect for images */}
              <div
                style={{
                  backgroundColor: "#040c16",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                className="opacity-0 group-hover:opacity-80"
              >
                <span className="text-2xl font bold text-white tracking-wider "></span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-purple-600 text-purple-100 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.demo} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      bg-purple-600 text-purple-100 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full flex items-center justify-center mb-4">
            <button
              onClick={loadMore}
              className="px-3 py-4 outline-none bg-purple-700 rounded shadow-lg shadow-purple-700 hover:bg-purple-200 hover:text-purple-700"
            >
              Load More..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
