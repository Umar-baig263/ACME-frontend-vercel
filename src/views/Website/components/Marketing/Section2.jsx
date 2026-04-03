import React from "react";

const Section2 = () => {
  return (
    <div className="lg:px-26 md:px-10 px-5 md:mt-30 mt-20 flex flex-col gap-10">
      <div className="flex flex-col  text-center  justify-center items-center">
        <div className="md:w-4/6 w-full flex flex-col gap-5">
          <div className="md:text-3xl text-lg font-bold">
            Canada’s Outdoor Advertising Experts
          </div>
          <div className="md:text-base ">
            Prompt Media is your reliable partner for outdoor advertising
            campaigns across Canada. With certified lighting solutions and
            durable banners, we help brands connect with audiences from coast to
            coast.
          </div>
        </div>
      </div>
      <div className="">
        {/* <video className="w-full h-[60vh]" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video> */}
        <img className="w-full object-cover" src="/video.png" alt="" />
      </div>
    </div>
  );
};

export default Section2;
