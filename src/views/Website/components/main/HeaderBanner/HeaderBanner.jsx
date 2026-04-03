import React from "react";
import RedButton from "../Buttons/RedButton";
import RedButtonLink from "../Buttons/RedButtonLink";
// import RedButton from "../main/Buttons/RedButton";

const HeaderBanner = ({ head, desc, isButton, btnText, btnLink, imgUrl }) => {
  return (
    <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-10 gap-2">
      <div className="lg:pl-26 md:pl-10 pl-5 md:pr-0 pr-5 md:w-[35%] w-full  md:py-10 py-5 flex flex-col md:gap-5 gap-4">
        <div className="md:text-3xl text-xl font-bold uppercase">{head}</div>
        <div className=" md:text-lg text-sm">{desc}</div>
        {isButton ? (
          <div>
            <RedButtonLink text={btnText} link={btnLink} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className=" md:w-[65%] w-full ">
        <img src={imgUrl} className="w-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default HeaderBanner;
