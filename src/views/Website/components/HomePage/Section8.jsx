import React from "react";
import RedButton from "../main/Buttons/RedButton";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import ProductCard from "../main/ProductCard/ProductCard";
import RedButtonLink from "../main/Buttons/RedButtonLink";

const Section8 = () => {
  const products = [
    {
      name: "Mother’s day Mug ",
      price: "$99.00",
      img: "hs8img1.png",
      desc: "No need to customize—just pick your favorite ready-made products",
    },
    {
      name: "Father’s day cap",
      price: "$99.00",
      img: "hs8img2.png",
      desc: "No need to customize—just pick your favorite ready-made products",
    },
    {
      name: "Merry christmas T-shirt",
      price: "$99.00",
      img: "hs8img3.png",
      desc: "No need to customize—just pick your favorite ready-made products",
    },
    {
      name: "happy birthday scarf",
      price: "$99.00",
      img: "hs8img4.png",
      desc: "No need to customize—just pick your favorite ready-made products",
    },
    {
      name: "Marriage gift",
      price: "$99.00",
      img: "hs8img5.png",
      desc: "No need to customize—just pick your favorite ready-made products",
    },
    {
      name: "BFF Wooden Photo ",
      price: "$99.00",
      img: "hs8img6.png",
      desc: "No need to customize—just pick your favorite ready-made products",
    },
  ];
  return (
    <div className="w-full md:mt-30 mt-20 bg-gray-100">
      <div className=" lg:p-26 md:p-10 p-5 ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-5 sm:col-span-2 col-span-2 ">
            <div className="md:text-3xl text-lg font-bold">E-Store</div>
            <div className="md:text-xl text-sm">
              No need to customize—just pick your favorite ready-made products
              and get them delivered to your doorstep.
            </div>
            <div>
              <RedButtonLink text="Explore All Products" link="/e-store" />
            </div>
          </div>
          {products.map((d, i) => (
            <div className="flex flex-col gap-3 relative">
              <div className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md">
                <AiOutlineHeart />
              </div>
              <div className="w-full">
                <img src={d?.img} className="w-full object-cover" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="md:text-lg text-sm">{d?.name} </div>
                <div className="md:text-lg text-sm font-bold">{d?.price}</div>
              </div>
              <div className="md:text-sm text-xs w-full">{d?.desc} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
