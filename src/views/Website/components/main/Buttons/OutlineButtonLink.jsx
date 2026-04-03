import React from "react";
import { Link } from "react-router-dom";

const OutlineButtonLink = ({text ,  link , width , color}) => {
  return (
    <Link
      to={link}
      className={`px-5  cursor-pointer py-3 text-sm ${width}  border border-${color} text-${color}`}
    >
        {text}
    </Link>
  );
};

export default OutlineButtonLink;