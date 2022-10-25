import { Swiper, SwiperSlide } from "swiper/react";
import { skillsImages } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto h-full ">
        <div className="text-center mb-10">
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-center  tracking-wider"
          >
            <p className="inline text-purple-200 font-bold text-center  border-b-4 border-l-4 pl-2 border-purple-700 text-4xl md:text-5xl  tracking-wide">
              Skills
            </p>
          </div>
        </div>
        {/* slider */}
        <div
          className="my-20"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <Swiper
            pagination={{ clickable: false }}
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
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {skillsImages.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center  "
              >
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
    </div>
  );
};

export default Skills;
