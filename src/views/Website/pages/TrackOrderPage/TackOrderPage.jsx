import React, { useState } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import RedButton from "../../components/main/Buttons/RedButton";
import TrackOrder from "../../components/main/TrackOrder/TrackOrder";
import { FaXmark } from "react-icons/fa6";

const TackOrderPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const orderItems = [
    {
      name: "Canned Food",
      category: "Dried Fruits",
      volume: "125g",
      quantity: 3,
      price: 1500,
      image: "product123.png",
    },
    {
      name: "Canned Food",
      category: "Dried Fruits",
      volume: "125g",
      quantity: 3,
      price: 1500,
      image: "product123.png",
    },
  ];

  const statusSteps = [
    { label: "Processing", date: "9 Jul, 2025" },
    { label: "Shipped", date: "10 Jul, 2025" },
    { label: "Delivered", date: "10 Jul, 2025" },
  ];

  const activeStep = 1; // 0 = Processing, 1 = Shipped, 2 = Delivered

  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar breadcrumb="track-order" isBanner={false} />

      {isOpen ? (
        <div className="mt-10 flex flex-col gap-2 lg:px-26 md:px-10 px-5">
          <div className="flex w-full justify-end items-center ">
            <div onClick={() => setIsOpen(false)} className="cursor-pointer text-xl">
              <FaXmark />
            </div>
          </div>
          <div>
            <TrackOrder
              item={orderItems}
              steps={statusSteps}
              active={activeStep}
            />
          </div>
        </div>
      ) : (
        <div className="mt-10 lg:px-26 md:px-10 px-5 w-full md:flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold text-center">
              Track You Order
            </div>
            <div className="w-full">
              <input
                className="p-2 border border-gray-400 outline-none md:w-[500px] w-full"
                type="text"
                placeholder="Enter your Order Number"
                name=""
                id=""
              />
            </div>
            <div onClick={() => setIsOpen(true)}>
              <RedButton width="w-full" text="Track Order" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TackOrderPage;
