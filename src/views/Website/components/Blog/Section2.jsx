import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Section2 = () => {
  const [active, setActive] = useState("All");
  const data = [
    "All",
    "Stamp",
    "Copparate Giftting",
    "E-store",
    "Signs",
    "It Solution",
    "Marketing",
    "Cards",
    "It Solutions",
    "Marketings",
    "Card",
  ];
  return (
    <div className="lg:px-26 md:px-10 px-5 mt-10 flex md:flex-row flex-col md:gap-10 gap-5">
      <div className="md:w-[70%] w-full gap-2 flex items-center">
        <div className="blog-custom-prev ">
          <FaAngleLeft />
        </div>
        <Swiper
          spaceBetween={0}
          //   slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 20 }, // Desktop
            768: { slidesPerView: 3.5, spaceBetween: 5 }, // Tablet
            640: { slidesPerView: 2, spaceBetween: 5 }, // Small Tablet
            0: { slidesPerView: 2, spaceBetween: 8 }, // Mobile
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
              <div
                className={`p-2 rounded-2xl text-center text-sm cursor-pointer hover:bg-[#BC202B] hover:text-white  ${
                  d === active
                    ? "bg-[#BC202B] text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setActive(d)}
              >
                {d}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="blog-custom-next">
          <FaAngleRight />
        </div>
      </div>
      <div className="md:w-[30%] w-full">
        <div className="flex w-full gap-2 py-2 px-3 items-center rounded-xl bg-gray-200">
          <div className="w-full">
            <input
              type="search"
              className="w-full outline-none"
              placeholder="Search Your Product .. "
            />
          </div>
          <div>
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
