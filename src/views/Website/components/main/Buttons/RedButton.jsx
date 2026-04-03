import React from "react";
import { Link } from "react-router-dom";

const RedButton = ({ text, onClick, link, width, textw }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-3 text-sm ${width} flex items-center justify-center text-center cursor-pointer bg-linear-to-t from-[#9A0F1E] to-[#C6131B] text-white ${textw}`}
    >
      {text}
    </button>
  );
};

export default RedButton;
