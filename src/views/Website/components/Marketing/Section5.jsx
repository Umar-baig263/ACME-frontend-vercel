import React, { useState } from "react";
import WhiteButton from "../main/Buttons/WhiteButton";
import { FaAngleLeft } from "react-icons/fa";
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

const Section5 = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const card = [
    {
      img: "project.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project1.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project2.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project3.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project4.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project5.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project6.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
    {
      img: "project7.png",
      heading: "Prompt Media ",
      desc: "Prompt Media is your reliable partner for outdoor advertising campaigns ",
      images: [
        {
          img: "ProjectImg1.png",
        },
        {
          img: "ProjectImg3.png",
        },
        {
          img: "ProjectImg2.png",
        },
      ],
    },
  ];
  return (
    <div className="lg:px-26 md:px-10 px-5 md:mt-30 mt-20 flex flex-col gap-2">
      <div className="flex flex-col gap-2 lg:px-26 md:px-10 px-5 text-center">
        <div className="text-3xl font-bold">Portfolio Highlights</div>
        <div className="text-lg">
          Prompt Media is your reliable partner for outdoor advertising
          campaigns
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row  md:py-10 py-5 gap-2">
        {card?.map((d, i) => (
          <div
            className="group h-[400px] overflow-hidden bg-center bg-no-repeat"
            style={{ background: `url(${d?.img})` }}
          >
            <div className="hidden group-hover:flex h-full p-5 bg-black/70 flex-col gap-2 text-white h-full justify-end">
              <div className="text-base font-bold">{d?.heading}</div>
              <div className="text-sm">{d?.desc}</div>
              <div className="flex">
                <div
                  onClick={() => {
                    setOpen(true);
                    setSelected(d?.images);
                  }}
                  className="cursor-pointer flex px-3 py-2 text-xs bg-white text-black"
                >
                  View More
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
          onClick={() => {
            setOpen(false);
            setSelected([]);
          }}
        >
          <div
            className=" rounded-lg overflow-hidden  w-full relative"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
              setSelected([]);
            }}
          >
            <div className="">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="md:text-3xl text-xl font-bold text-white">
                  Portfolio Highlights
                </div>
                <div className="md:text-lg text-base text-center text-white">
                  Prompt Media is your reliable partner for outdoor advertising
                  campaigns
                </div>
              </div>

              <div className="mt-5">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  // slidesPerView={2}
                  centeredSlides={true}
                  initialSlide={1}
                  // loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  //   keyboard={{ enabled: true }}
                  //   mousewheel={true}
                  breakpoints={{
                    768: { slidesPerView: 1, centeredSlides: true },
                    1024: { slidesPerView: 2, centeredSlides: true },
                  }}
                  className="w-full md:h-[50vh] h-[25vh]"
                >
                  {selected?.map((d, i) => (
                    <SwiperSlide key={i}>
                      {({ isActive }) => (
                        <div
                          className={`flex flex-col gap-2 w-full  p-5 transition-all duration-300 w-full ${
                            isActive
                              ? "scale-105 shadow-lg"
                              : "scale-90 opacity-50"
                          }`}
                        >
                          <img
                            src={d?.img}
                            className="w-full object-cover"
                            alt=""
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* <div className="absolute text-white right-10 text-xl font-bold">X</div> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Section5;
