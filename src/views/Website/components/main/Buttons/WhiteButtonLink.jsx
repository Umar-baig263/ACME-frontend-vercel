import React from "react";
import { Link } from "react-router-dom";

const WhiteButtonLink = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="px-5 cursor-pointer py-3 text-sm bg-white text-black font-medium"
    >
      {text}
    </Link>
  );
};

export default WhiteButtonLink;
