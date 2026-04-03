import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testmonial1 = () => {
  const data = [
    {
      stars: "★ ★ ★ ★ ★",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      img: "/profile.png",
      name: "Lorem Ipsum is simply",
      subname: "Lorem Ipsum is simply dummy text",
    },
    {
      stars: "★ ★ ★ ★ ★",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      img: "/profile.png",
      name: "Lorem Ipsum is simply",
      subname: "Lorem Ipsum is simply dummy text",
    },
    {
      stars: "★ ★ ★ ★ ★",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      img: "/profile.png",
      name: "Lorem Ipsum is simply",
      subname: "Lorem Ipsum is simply dummy text",
    },
    {
      stars: "★ ★ ★ ★ ★",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      img: "/profile.png",
      name: "Lorem Ipsum is simply",
      subname: "Lorem Ipsum is simply dummy text",
    },
    {
      stars: "★ ★ ★ ★ ★",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      img: "/profile.png",
      name: "Lorem Ipsum is simply",
      subname: "Lorem Ipsum is simply dummy text",
    },
    {
      stars: "★ ★ ★ ★ ★",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      img: "/profile.png",
      name: "Lorem Ipsum is simply",
      subname: "Lorem Ipsum is simply dummy text",
    },
  ];
  return (
    <div className="md:mt-30 mt-20 bg-gray-100 lg:py-26 md:py-10 py-5 flex flex-col gap-10">
      <div className="lg:px-26 md:px-10 px-5 flex flex-col gap-2 text-center justify-center items-center w-full">
        <div className="font-bold md:text-3xl uppercase text-xl">
          Testimonials
        </div>
        <div className="md:text-base text-sm md:w-3/4 w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.{" "}
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay,]}
          spaceBetween={30}
          // slidesPerView={2}
          centeredSlides={true}
          initialSlide={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          //   keyboard={{ enabled: true }}
          //   mousewheel={true}
          navigation={{
            nextEl: ".blog-custom-next",
            prevEl: ".blog-custom-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 1, centeredSlides: true },
            1024: { slidesPerView: 2, centeredSlides: true },
          }}
          //   navigation
          //   pagination={{ clickable: true }}
          className="overflow-visible"
        >
          {data.map((t, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col gap-2 w-1/2 bg-white rounded-xl p-5 transition-all duration-300 w-full ${
                    isActive ? "scale-105 shadow-lg" : "scale-90 opacity-60"
                  }`}
                >
                  <div className="text-yellow-500 text-xl ">{t?.stars}</div>
                  <div className="md:text-base text-xs">{t?.text}</div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                      <img src={t?.img} className="w-full object-fill" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold md:text-sm text-xs">{t?.name}</div>
                      <div className="md:text-sm text-xs">{t?.subname}</div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <div className="flex w-full justify-center items-center gap-2 mt-10">
            <div className="blog-custom-prev   flex p-2 border border-[#9A0F1E] border-2 rounded-full hover:bg-gray-300">
              <FaAngleLeft />
            </div>
            <div className="blog-custom-next   flex p-2 border border-[#9A0F1E] border-2 rounded-full hover:bg-gray-300">
              <FaAngleRight />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonial1;
