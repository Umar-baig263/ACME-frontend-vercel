import React from "react";

const Section2 = () => {
  const data = [
    {
      heading: "100% Secure Checkout",
      description: "Lorem Ipsum is simply dummy text",
      url: "sec2icon1.png",
    },
    {
      heading: "Free Shipping Over $50",
      description: "Lorem Ipsum is simply dummy text",
      url: "sec2icon2.png",
    },
    {
      heading: "24/7 Customer Support",
      description: "Lorem Ipsum is simply dummy text",
      url: "sec2icon3.png",
    },
  ];
  return (
    <div className="md:mt-30 mt-20 lg:px-26 md:px-10 px-5 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold">
          Trusted by Hundreds of Happy Customers
        </div>
        <div className="text-lg">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        {data?.map((d, i) => (
          <div key={i} className="flex items-center gap-5 bg-gray-100 py-3 px-5">
            <div className="">
              <div className="p-3 rounded-lg bg-[#9A0F1E]">
                <img src={d?.url} className="w-full" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-base">{d?.heading}</div>
              <div className="text-sm">{d?.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
