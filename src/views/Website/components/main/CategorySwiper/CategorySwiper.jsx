import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CategorySwiper = ({ data }) => {

  return (
    <div className="md:mt-20 mt-10 lg:px-26 md:px-10 px-5 overflow-hidden">
      <div className="">
        <Swiper
          spaceBetween={0}
          //   slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 6, spaceBetween: 20 }, // Desktop
            768: { slidesPerView: 3.5, spaceBetween: 5 }, // Tablet
            640: { slidesPerView: 2.5, spaceBetween: 5 }, // Small Tablet
            0: { slidesPerView: 2.5, spaceBetween: 8 }, // Mobile
          }}
          //   navigation={{
          //     nextEl: ".blog-custom-next",
          //     prevEl: ".blog-custom-prev",
          //   }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000, // Time in milliseconds between slides (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          navigation={{
            nextEl: ".blog-custom-next",
            prevEl: ".blog-custom-prev",
          }}
          loop={true}
          className="h-full w-full relaive overflow-visible"
        >
          {data?.map((d, i) => (
            <SwiperSlide key={i}>
              <div className=" gap-2 flex flex-col items-center">
                <div className="bg-gray-200 w-full rounded-full overflow-hidden">
                  <img src={d.img} alt="" className="w-full" />
                </div>
                <div className="md:text-lg text-base text-center ">
                  {d.name}
                </div>
              </div>
            </SwiperSlide>
          ))}

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
