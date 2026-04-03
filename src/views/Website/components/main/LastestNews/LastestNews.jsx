import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const LatestNews = ({ data , margin }) => {
  return (
    <div className={` lg:p-26 md:p-10 p-5 bg-gray-100 ${margin? "mt-0" : "md:mt-20  mt-10"}`}>
      <div className="lg:px-26 md:px-10 px-5 flex flex-col gap-5 ">
        <div className="md:text-3xl text-xl font-bold text-center">
          LATEST NEWS
        </div>
        <div className="flex gap-10 md:flex-row flex-col md:gap-10 gap-5 mt-5">
          {data?.map((d, i) => (
            <div className="md:w-1/2 w-full hover:shadow-md" key={i}>
              <div className="w-full">
                <img
                  className="w-full object-contain"
                  src={d?.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1  px-6 py-5 bg-white">
                <div className="font-bold">
                  {d?.head}
                </div>
                <div>
                  {d?.desc}
                </div>
                <div className="flex text-red-500 items-center gap-2 ">
                  Read More <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
