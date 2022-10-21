import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { skillsImages } from "../data";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Skills = () => {
  return (
    <div className="w-full h-screen bg-[#1f2020]">
      <div className="max-w-[1000px] mx-auto h-full ">
        <h1 className="text-red-300 text-3xl md:text-4xl flex justify-center mb-20">
          Skills
        </h1>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {skillsImages.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center  ">
              <img
                className="cursor-pointer w-60 h-40 object-contain flex items-center justify-center"
                src={item}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
