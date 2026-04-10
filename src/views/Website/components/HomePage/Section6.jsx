import React from "react";

const Section6 = () => {
  return (
    <div className="w-full md:mt-30 mt-20 lg:px-26 md:px-10 px-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="md:text-4xl text-xl font-medium">
          More Than Just Printing
        </div>
        <div className="md:text-base text-sm lg:px-26 md:px-10 px-5 text-center">
          At ACME, we believe creativity should be limitless. That’s why we’ve
          built a platform that empowers individuals, creators, and brands to
          bring their boldest ideas to life.
        </div>
      </div>
      <div className="mt-10 relative flex flex-col gap-3">
        <div className="flex justify-center align-center lg:px-26 md:px-10 px-5">
          <img src="homes6.png" className="md:w-1/2" />
        </div>
        <div className="md:w-[400px] w-full  shadow-md bg-white md:absolute top-1/2 left-0 px-2 py-2 flex items-center gap-4">
          <div className="p-2 bg-[#5C5C5F] w-[70px] h-[60px] rounded-[10px]">
            <img src="h6icon1.png" />
          </div>
          <div>
            <div className="md:text-lg text-xs font-medium">
              Easy Customization
            </div>
            <div className="md:text-xs text-xs leading-5">
              Design your way with user-friendly tools and zero creative limits.
            </div>
          </div>
        </div>
        <div className="md:w-[400px] w-full  shadow-md bg-white md:absolute top-10 right-0 px-2 py-2 flex items-center gap-4">
          <div className="p-2 bg-[#5C5C5F] w-[100px] h-[60px] rounded-[10px] flex justify-center items-center">
            <img src="h6icon2.png" />
          </div>
          <div>
            <div className=" md:text-lg text-xs font-medium">
              Premium Quality
            </div>
            <div className="md:text-xs text-xs leading-5">
              We use the best materials and printing techniques to make sure
              your products look great and last long.
            </div>
          </div>
        </div>
        <div className="md:w-[400px] w-full  shadow-md bg-white md:absolute bottom-10 right-0 px-2 py-2 flex items-center gap-4">
          <div className="p-2 bg-[#5C5C5F] w-[100px] h-[60px] rounded-[10px] flex justify-center items-center">
            <img src="h6icon3.png" />
          </div>
          <div>
            <div className="md:text-lg text-xs font-medium">
              Fast & Reliable Delivery
            </div>
            <div className="md:text-xs text-xs leading-5">
              From checkout to doorstep, we make sure your custom orders arrive
              on time—every time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
