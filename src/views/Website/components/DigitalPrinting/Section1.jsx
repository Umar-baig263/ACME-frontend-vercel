import React from "react";
import RedButton from "../main/Buttons/RedButton";

const Section1 = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-10 gap-2">
        <div className="lg:pl-26 md:pl-10 pl-5 md:w-[40%] w-full  md:py-10 py-5 flex flex-col gap-5 ">
            <div className="md:text-3xl text-xl font-bold uppercase">High-Quality Digital Printing Services</div>
            <div className=" md:text-lg text-sm">From business cards to banners — we deliver vibrant, sharp, and reliable prints.</div>
            {/* <div><RedButton text="Customize your stamp" link="/stamp" /></div> */}
        </div>
        <div className="w-full "> 
            <img src="/dpbannerimg.png" className="w-full object-contain" alt="" />
        </div>
    </div>
  );
}

export default Section1;