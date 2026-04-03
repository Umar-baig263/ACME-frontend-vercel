import React from "react";
import WhiteButton from "../Buttons/WhiteButton";
import RedButton from "../Buttons/RedButton";
import RedButtonLink from "../Buttons/RedButtonLink";
import WhiteButtonLink from "../Buttons/WhiteButtonLink";

const Banner = ({
  heading,
  subheading,
  btntext,
  img,
  btnLink,
  isred,
  color,
  width,
}) => {
  return (
    <div
      className=" flex flex-col items-start md:gap-5 gap-5 w-full md:p-26 p-10 md:mt-30 mt-20  bg-cover bg-center  bg-no-repeat"
      style={{
        background: `url(${img})`,
        backgroundSize: "130%",
      }}
    >
      <div className={`flex flex-col gap-5 ${width}`}>
        <div className={`md:text-5xl text-xl ${color} `}>{heading}</div>
        <div className={`md:text-xl text-lg ${color}`}>{subheading}</div>
      </div>
      <div>
        {isred ? (
          <RedButtonLink text={btntext} link={btnLink} />
        ) : (
          <WhiteButtonLink text={btntext} link={btnLink} />
        )}
      </div>
    </div>
  );
};

export default Banner;
