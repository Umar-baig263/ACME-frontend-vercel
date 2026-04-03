import React from "react";

const SideBar = () => {
  const list = [
    {
      id: 1,
      title: "Digital Printing",
      url: "homes1icon.png",
    },
    {
      id: 2,
      title: "Stamp",
      url:"homes1icon1.png",
    },
    {
      id: 3,
      title: "Apparel",
      url: "homes1icon2.png",
    },
    {
      id: 4,
      title: "Corporate Gifting",
      url: "homes1icon3.png",
    },
    {
      id: 5,
      title: "E-store",
      url: "homes1icon4.png",
    },
    {
      id: 6,
      title: "Signs",
      url: "homes1icon5.png",
    },
    {
      id: 7,
      title: "Marketing & Advertising",
      url: "homes1icon6.png",
    },
    {
      id: 8,
      title: "It & network solutions",
      url: "homes1icon7.png",
    },
  ];

  return (
    <div className="">
      <div className=" border border-gray-200 flex items-center px-4 py-4 font-bold text-base bg-gray-100">Browse Categories</div>
      {
        list.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 text-base text-base flex items-center gap-3 px-4 py-3.5 hover:bg-gray-100 cursor-pointer"
          >
            <div>
                <img className="w-[20px] h-[20px]" src={item?.url} alt="" />
            </div>
            <div className="text-gray-600 font-bold">
                {item.title}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default SideBar;
