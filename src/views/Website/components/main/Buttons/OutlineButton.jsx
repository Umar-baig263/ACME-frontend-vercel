import React from "react";
import { Link } from "react-router-dom";

const OutlineButton = ({ text, link, width, color, img, onClick }) => {
  const styleClasses = color
    ? `border border-${color} text-${color}`
    : "border border-black text-black";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 cursor-pointer py-3 text-sm ${width} flex items-center justify-center text-center gap-2 ${styleClasses}`}
    >
      {img && <img src={img} className="w-5" alt="" />}
      {text}
    </button>
  );
};

export default OutlineButton;
