import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { skillsImages } from "./data";

const Skills = () => {
  return (
    <div className="w-full h-screen bg-[#1f2020]">
      <div className="max-w-[1000px] mx-auto h-screen ">
        <h1 className="text-red-300 text-3xl md:text-4xl flex justify-center mb-20">
          Skills
        </h1>
        {/* slider */}
        <Swiper
          // breakpoints={{
          //   sm: { slidesPerView: 2, spaceBetween: 80 },
          //   md: { slidesPerView: 3, spaceBetween: 150 },
          //   lg: { slidesPerView: 3, spaceBetween: 50 },
          //   xl: { slidesPerView: 6, spaceBetween: 150 },
          // }}
          spaceBetween={125}
          slidesPerView={4}
          initialSlide={Infinity}
          loop={true}
          className="mySwiper"
        >
          {skillsImages.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center align-center ">
              {/* <div className="max-w-[300px] h-auto"> */}
              <div className="h-40 w-40 ">
                <img
                  className="cursor-pointer object-contain h-full w-full"
                  src={image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
