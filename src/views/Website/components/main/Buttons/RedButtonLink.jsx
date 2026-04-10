import React from "react";
import { Link } from "react-router-dom";

const RedButtonLink = ({ text, link, width }) => {
  return (
    <Link
      to={link}
      className={`px-5  py-3 text-sm ${width} cursor-pointer bg-linear-to-t from-[#9A0F1E] to-[#C6131B] text-white`}
    >
      {text}
    </Link>
  );
};

export default RedButtonLink;
