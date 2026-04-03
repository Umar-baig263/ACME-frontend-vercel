import React from "react";
import RedButton from "../main/Buttons/RedButton";
import RedButtonLink from "../main/Buttons/RedButtonLink";

const Section3 = () => {
  const cards = [
    {
      index: 1,
      title: "Choose your option & add to cart",
      image: "/homes3icon1.png",
    },
    {
      index: 2,
      title: "Check out & upload your file",
      image: "/homes3icon2.png",
    },
    {
      index: 3,
      title: "Approve your proof",
      image: "/homes3icon3.png",
    },
  ];
  return (
    <div className="md:pt-30 pt-20 flex flex-col lg:px-26 md:px-10 px-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="md:text-4xl text-xl font-medium">
          Less Friction More Fun
        </div>
        <div className="md:text-lg text-sm font-medium">
          We understand the efforts it takes to create something remarkable
        </div>
        <div className="md:text-base text-xs">
          That’s why we’ve made our ordering process breeze, with just 3 steps
          to get you on your way to a final products
        </div>
      </div>
      <div className="md:mt-5 mt-2  lg:px-26 md:px-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5 mt-5 md:bg-[url('/homes3.png')] bg-center bg-no-repeat p-5 rounded-lg">
          {/* Step 1 */}
          {cards.map((card) => (
            <div
              key={card.index}
              className="flex flex-col items-center justify-center gap-10"
            >
              <div className="flex items-center justify-center md:px-15 md:py-15 px-10 py-10 border border-[#000000] border-3 bg-white rounded-2xl">
                <img
                  src={card.image}
                  alt={`icon-${card.index}`}
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="flex gap-5 items-center">
                <div className="text-5xl text-[#9A0F1E] font-bold">
                  {card.index}
                </div>
                <div className="text-lg   font-semibold leading-tight">
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <RedButtonLink text="Shop All  Product" link="/shop" />
      </div>
    </div>
  );
};

export default Section3;
