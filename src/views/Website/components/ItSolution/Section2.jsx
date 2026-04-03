import React from "react";

const Section2 = () => {
  return (
    <div className="md:mt-20 mt-10 lg:px-26 md:px-10 px-5 flex md:flex-row flex-col items-center md:gap-15 gap-10">
      <div className="md:w-2/5 w-full flex flex-col md:gap-10 gap-5">
        <div className="md:text-3xl text-xl font-bold">
          A leading growing firm that helps brands scale.
        </div>
        <div className="md:text-base text-sm">
          Our Canada-based agency specializes in high-quality web and IT
          solutions for businesses of all sizes, from design and development to
          e-commerce and marketing. We tailor cost-effective and innovative
          solutions to meet our clients’ unique needs, collaborating with
          transparency and support every step of the way. Our customer-centric
          approach delivers reliable, efficient, and scalable solutions. We
          exceed industry standards by staying up-to-date with the latest trends
          and technologies to drive success for our clients.
        </div>
        <div className="flex gap-5 ">
          <div className="flex gap-5 p-4 bg-[#C6131B] rounded-xl">
            <div>
              <img className="w-full object-contain" src="iticon1.png" alt="" />
            </div>
            <div className="flex flex-col text-white">
              <div className="font-bold ">Strategy and Planning</div>
              <div className="">
                A top growth firm that assists brands in achieving growth at
                scale.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 w-full">
        <img className="object-contain w-full" src="itSec1.png" alt="" />
      </div>
    </div>
  );
};

export default Section2;
