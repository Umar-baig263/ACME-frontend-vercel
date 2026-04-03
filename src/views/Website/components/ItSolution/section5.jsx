import React from "react";
// import BlueButton from '../../buttons/BlueButton'
import { FaWhatsapp } from "react-icons/fa";
import { PiWhatsappLogo } from "react-icons/pi";
// import BlogBody from '../../BlogBody/BlogBody'
// import { Image_Url } from '../../../../utils/const'
import RedButton from "../main/Buttons/RedButton";

const Section5 = ({ head, des1, des2, img, isreversed, pad }) => {
  const points = [
    {
      txt: "Social Media Profile",
    },
    {
      txt: "Engagement",
    },
    {
      txt: "Build Audience",
    },
    {
      txt: "Boost Traffic",
    },
    {
      txt: "Increase Sales",
    },
    {
      txt: "Brand Awareness",
    },
  ];
  return (
    <div className="md:mt-30 mt-20 w-full lg:px-26 md:px-10 px-5 ">
      <div
        className={`w-full flex md:flex-row flex-col gap-14 justify-between items-center  `}
      >
        <div className="md:w-1/2 w-full flex flex-col justify-center lg:gap-5 gap-3">
          <h2 className="md:text-5xl text-3xl font-semiBold">
            Enhancing the creativity of your brand
          </h2>
          <p className="md:text-base text-sm ">
            {/* <BlogBody body={des} /> */}
            Enhancing the creativity of your brand is crucial for standing out
            in today’s crowded market. Being creative is about taking risks and
            presenting your brand in unique and engaging ways to captivate your
            audience’s attention.
          </p>
          <p className="md:text-base text-sm  px-5">
            {/* <BlogBody body={des} /> */}
            <ul className="flex flex-col gap-2 list-disc">
                {
                    points?.map((d , i) => (
                        <li key={i}>{d?.txt}</li>
                    ))
                }
            </ul>
          </p>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:items-end">
          <img className="w-fit" src="itSec5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
