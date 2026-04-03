import React from "react";

const Section1 = () => {
  return (
    <div className="lg:px-26 flex md:flex-row flex-col items-center gap-15 justify-between md:px-10 px-5 md:mt-30 mt-20">
      <div className="md:w-1/2 w-full">
        <div className="relative w-full h-full">
          {/* Back Image */}
          <img
            src="/s1Market.png"
            alt="Background"
            className=" w-full h-auto"
          />
          {/* Front Image with Frame */}
          <div className="w-[160px] bg-linear-to-t from-[#9A0F1E] to-[#C6131B] absolute bottom-10 -right-5 bg-red-600  border border-3 border-white text-white px-4 py-2  flex gap-1 items-center">
            <div className="text-2xl font-bold">14+</div>
            <div className="text-xs font-normal text-center">
              Years of Experience
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:w-1/2 w-full">
        <div className="md:text-3xl text-xl font-semibold">
          Outdoor Advertising with Prompt Media
        </div>
        <div className="md:text-lg text-base">
          Prompt Media collaborates with Canadian municipalities and commercial
          property owners to deliver high-impact, targeted advertising
          campaigns. We also supply durable, high-quality brackets for
          streetlight and lamppost banners.
        </div>
        <div className="md:text-lg text-base">
          As the only Canadian manufacturer of lighting-approved advertising
          systems, we’ve earned a reputation as a leading name in outdoor
          advertising. Backed by 14+ years of experience and a
        </div>
      </div>
    </div>
  );
};

export default Section1;
