import React from "react";
// import BlueButton from '../../buttons/BlueButton'
import { FaWhatsapp } from "react-icons/fa";
import { PiWhatsappLogo } from "react-icons/pi";
import RedButton from "../Buttons/RedButton";
import RedButtonLink from "../Buttons/RedButtonLink";
// import BlogBody from '../../BlogBody/BlogBody'
// import { Image_Url } from '../../../../Utils/const'
// import RedButton from '../main/Buttons/RedButton'

const ImgText = ({ head, des, img, isreversed, btntext, btnlink, pad }) => {
  return (
    <div
      className={`w-full flex ${isreversed ? "md:flex-row" : "md:flex-row-reverse"}  flex-col gap-14 justify-between items-center ${pad} lg:px-26 md:px-10 px-5`}
    >
      <div className="md:w-1/2 w-full flex flex-col justify-center lg:gap-5 gap-3">
        <h2 className="md:text-4xl text-3xl lg:leading-14">{head}</h2>
        <p className="lg:text-lg text-base leading-normal ">
          {/* <BlogBody body={des} /> */}
          {des}
        </p>
        <div className="flex flex-row gap-5">
          <RedButtonLink text={btntext} link={btnlink} />
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col md:items-end">
        <img className="w-fit" src={img} alt="" />
      </div>
    </div>
  );
};

export default ImgText;
