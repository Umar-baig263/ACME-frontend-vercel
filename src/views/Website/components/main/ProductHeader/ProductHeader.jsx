import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductHeader = ({ head, subHead, link, isLink }) => {
  return (
    <div className="lg:px-26 md:px-10 px-5 w-full flex md:flex-row flex-col items-end justify-between md:gap-10 gap-2">
      <div className="flex flex-col gap-3">
        <div className="font-medium md:text-3xl uppercase text-xl">{head}</div>
        <div className="md:text-base text-sm md:w-3/4 w-full">{subHead}</div>
      </div>
      {isLink ? (
        ""
      ) : (
        <Link
          to={link}
          className="flex items-center gap-2 text-[#9A0F1E] cursor-pointer"
        >
          View All <FaArrowRight />
        </Link>
      )}
    </div>
  );
};

export default ProductHeader;
