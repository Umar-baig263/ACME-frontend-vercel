import React from "react";
import RedButton from "../main/Buttons/RedButton";
import RedButtonLink from "../main/Buttons/RedButtonLink";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  const card = [
    {
      head: "Computer & IT Support",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at",
      imgUrl: "itSec2icon2.png",
    },
    {
      head: "Structured and Network Cabling",
      desc: "Gain complete oversight of your network with our reliable monitoring solutions.",
      imgUrl: "itSec2icon2.png",
    },
    {
      head: "Computer Repair Services",
      desc: "Gain complete oversight of your network with our reliable monitoring solutions.",
      imgUrl: "itSec2icon2.png",
    },
    {
      head: "Computer Repair Services",
      desc: "Get fast and dependable solutions for all computer issues. Book an appointment for peace of mind.",
      imgUrl: "itSec2icon2.png",
    },
  ];
  return (
    <div className="flex flex-col gap-5 md:mt-30 mt-20 lg:px-26 md:px-10 px-5">
      <div className="md:w-1/2 w-full flex flex-col gap-5">
        <div className="md:text-5xl text-xl font-bold">
          Boost Your Traffic & Grownup your market.
        </div>
        <div className="text-base">
          By increasing your website traffic, you can attract more potential
          customers to your site, which can ultimately lead to higher conversion
          rates and increased revenue.
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row mt-10 gap-2">
        {card?.map((d, i) => (
          <div
            key={i}
            className=" bg-gray-100 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col gap-2 p-6">
              <div>
                <img src={d.imgUrl} className="w-[70px]" />
              </div>
              <h3 className="font-semibold text-lg">{d.head}</h3>
              <p className="text-sm text-gray-600">{d.desc}</p>
            </div>
            <div className="mt-2">
              <button className="w-full text-left px-2 text-sm text-white bg-linear-to-t from-[#9A0F1E] to-[#C6131B] py-2 hover:bg-red-700 transition">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
