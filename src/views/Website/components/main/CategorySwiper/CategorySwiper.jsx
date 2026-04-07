import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CategorySwiper = ({
  data,
  activeCategory,
  onCategoryClick,
  paddingClass,
}) => {
  return (
    <div
      className={`md:mt-10 mt-5 ${paddingClass || "lg:px-26 md:px-10 px-5"} overflow-hidden`}
    >
      <div className="">
        <Swiper
          spaceBetween={0}
          //   slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 5.5, spaceBetween: 60 }, // Desktop
            768: { slidesPerView: 3.5, spaceBetween: 30 }, // Tablet
            640: { slidesPerView: 2.8, spaceBetween: 20 }, // Small Tablet
            0: { slidesPerView: 2.5, spaceBetween: 15 }, // Mobile
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000, // Time in milliseconds between slides (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          navigation={{
            nextEl: ".blog-custom-next",
            prevEl: ".blog-custom-prev",
          }}
          loop={false}
          className="h-full w-full relaive overflow-visible"
        >
          {data?.map((d, i) => {
            const isActive =
              activeCategory === d.key || activeCategory === d.name;
            return (
              <SwiperSlide key={i} className="py-4">
                <div
                  className="flex flex-col items-center cursor-pointer group transition-all duration-300 transform"
                  onClick={() =>
                    onCategoryClick && onCategoryClick(d.key || d.name)
                  }
                >
                  {/* Image Container */}
                  <div
                    className={`relative mb-4 transition-all duration-500 ease-in-out ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  >
                    <div className="bg-[#F8F8F8] w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <img
                        src={d.img}
                        alt={d.name}
                        className="w-full h-full object-cover transition-opacity duration-300 opacity-100"
                      />
                    </div>
                  </div>

                  {/* Name with Underline */}
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`text-sm md:text-[15px] text-center transition-colors duration-300 mb-1 ${
                        isActive
                          ? "text-black font-bold"
                          : "text-gray-800 font-medium group-hover:text-black"
                      }`}
                    >
                      {d.name}
                    </span>
                    <div
                      className={`h-[3px] rounded-full bg-[#C6131B] transition-all duration-500 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-1/2"
                      }`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="blog-custom-prev  absolute  z-100 top-1/2 left-2 bg-white shadow-md flex p-2 rounded-full">
            <FaAngleLeft />
          </div>
          <div className=" blog-custom-next  absolute z-100 top-1/2 right-2 bg-white shadow-md flex p-2 rounded-full">
            <FaAngleRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySwiper;
