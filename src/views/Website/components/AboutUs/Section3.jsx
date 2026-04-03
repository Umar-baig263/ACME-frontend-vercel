import React from "react";
// import WhiteButton from "../main/Buttons/WhiteButton";
// import WhiteButton from "../Buttons/WhiteButton";
// import RedButton from "../Buttons/RedButton";
import WhiteButtonLink from "../main/Buttons/WhiteButtonLink"

const Section3 = ({heading, subheading , btntext , img , btnLink }) => {
  return (
    <div className=" flex flex-col md:gap-10 gap-5 w-full md:p-26 p-10 md:mt-30 mt-20 bg-[url(/homes4.jpg)] bg-cover bg-center bg-no-repeat" style={{ background : `url(${img})` }}>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="md:text-5xl text-xl text-white">
          {heading}
        </div>
        <div className="md:text-xl text-lg text-white">
          {subheading}
        </div>
        <div> 
            <WhiteButtonLink text={btntext} link={btnLink} />
        </div>
      </div>
    </div>
  );
};

export default Section3;
