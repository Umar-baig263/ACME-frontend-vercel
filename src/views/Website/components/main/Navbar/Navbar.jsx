import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ breadcrumb, isBanner, isBannerText, img, text, head }) => {
  const navLink = [
    {
      id: 1,
      name: "Home",
      url: "/home",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Shop",
      url: "/shop",
    },
    {
      id: 5,
      name: "Blog",
      url: "/blog",
    },
    {
      id: 6,
      name: "Help&FAQ",
      url: "/faq",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="lg:px-26 md:px-10 px-5 border-t border-b border-gray-400 ">
        <div className=" lg:px-26 md:px-10 px-5   flex items-center justify-between w-full md:gap-5 gap-3 md:px-0 px-5 py-1.5 md:pr-26">
          {navLink.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="flex items-center gap-3 md:p-2 p-0 cursor-pointer"
            >
              <div className="md:text-lg text-xs hover:font-bold">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:px-26 md:px-10 px-5 mt-3 mb-3 italic text-gray-700 md:text-sm text-xs">
        {" "}
        <span className="rounded-full bg-gray-100 p-2 mr-2">Home</span> /{" "}
        {breadcrumb}
      </div>
      {isBanner ? (
        <div className="w-full">
          <img src={img} alt="Banner" className="w-full object-cover" />
        </div>
      ) : (
        ""
      )}
      {isBannerText ? (
        <div
          className="w-full   bg-cover bg-center  bg-no-repeat "
          style={{ background: `url(${img})` }}
        >
          <div className="text-center flex justify-center bg-black/50 items-center text-white w-full h-full">
            <div className="lg:py-26 md:py-10 py-5  flex flex-col gap-5  md:w-1/2 w-full">
              <div className="md:text-5xl font-semiBold text-3xl">{head}</div>
              <div className="md:text-xl text-base">{text}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
