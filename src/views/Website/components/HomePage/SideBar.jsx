import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const list = [
    {
      id: 1,
      title: "Digital Printing",
      url: "homes1icon.png",
      link: "/digital-printing",
    },
    {
      id: 2,
      title: "Stamp",
      url: "homes1icon1.png",
      link: "/stamp",
    },
    {
      id: 3,
      title: "Apparel",
      url: "homes1icon2.png",
      link: "/apparel",
    },
    {
      id: 4,
      title: "Corporate Gifting",
      url: "homes1icon3.png",
      link: "/corporate-gifting",
    },
    {
      id: 5,
      title: "E-store",
      url: "homes1icon4.png",
      link: "/e-store",
    },
    {
      id: 6,
      title: "Signs",
      url: "homes1icon5.png",
      link: "/sign",
    },
    {
      id: 7,
      title: "Marketing & Advertising",
      url: "homes1icon6.png",
      link: "/marketing-advertising",
    },
    {
      id: 8,
      title: "It & network solutions",
      url: "homes1icon7.png",
      link: "/it-network-solution",
    },
  ];

  return (
    <div className="">
      <div className=" border border-gray-200 flex items-center px-4 py-4 font-bold text-base bg-gray-100">
        Browse Categories
      </div>
      {list.map((item) => (
        <div
          key={item.id}
          className="group border border-gray-200 text-base text-base flex items-center px-4 py-3.5 hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <Link to={item.link || "#"} className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <img className="w-[20px] h-[20px]" src={item?.url} alt="" />
            </div>
            <div className="text-gray-600 font-bold group-hover:text-[#C6131B] text-sm whitespace-nowrap overflow-hidden transition-colors">
              {item.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
