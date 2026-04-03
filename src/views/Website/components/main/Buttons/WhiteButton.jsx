import React from "react";
import { Link } from "react-router-dom";

const WhiteButton = ({text ,  link , width}) => {
  return (
    <div
      className={`${width} px-5 py-3 flex cursor-pointer text-center text-sm bg-white text-black`}
    >
        {text}
    </div>
  );
};

export default WhiteButton;