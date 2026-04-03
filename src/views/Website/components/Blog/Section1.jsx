import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Section1 = () => {
  const text = [
    {
      heading: "Discover Ideas, Trends & Tips",
      desc1:
        "Self-inking, logo & date stamps — customized to leave a professional mark.",
      desc2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      heading: "Discover Ideas, Trends & Tips",
      desc1:
        "Self-inking, logo & date stamps — customized to leave a professional mark.",
      desc2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      heading: "Discover Ideas, Trends & Tips",
      desc1:
        "Self-inking, logo & date stamps — customized to leave a professional mark.",
      desc2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      heading: "Discover Ideas, Trends & Tips",
      desc1:
        "Self-inking, logo & date stamps — customized to leave a professional mark.",
      desc2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  return (
    <div className="mt-5 lg:px-26 md:px-10 px-5 flex items-center md:flex-row flex-col md:gap-10 gap-5">
      <div className="md:w-1/2 w-full">
        <img
          src="blog.png"
          className="rounded-lg object-contain w-full"
          alt=""
        />
      </div>
      <div className="md:w-1/2 w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // effect="fade"
          modules={[Autoplay ]}
        //   pagination={true}

          className="w-[100%] md:w-[100%] h-full"
        >
          {text?.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:gap-5 gap-2">
                <div className="md:text-5xl text-3xl font-bold">
                  {d.heading}
                </div>
                <div className="md:text-xl text-base">
                  {d.desc1}
                </div>
                <div className="md:text-xl text-base">
                  {d.desc2}
                </div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Section1;
