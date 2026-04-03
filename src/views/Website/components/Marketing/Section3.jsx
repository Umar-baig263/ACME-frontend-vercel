import React from "react";

const Section3 = () => {
  const card = [
    {
      img01: "marketicon1.png",
      img02: "marketicon10.png",
      heading: "High-Quality Printing",
      desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      img01: "marketicon2.png",
      img02: "marketicon20.png",
      heading: "Fast Service",
      desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      img01: "marketicon3.png",
      img02: "marketicon30.png",
      heading: "Custom Design",
      desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      img01: "marketicon4.png",
      img02: "marketicon40.png",
      heading: "Experienced Team",
      desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];
  return (
    <div className="lg:px-26 md:px-10 px-5 md:py-15 py-5  gap-5 flex flex-col md:mt-30 mt-20 bg-gray-100">
      <div className="flex flex-col gap-5 lg:px-26 md:px-10 px-5 text-center">
        <div className="md:text-3xl text-xl font-bold">How It Works</div>
        <div className="md:text-lg text-base">
          We offer high-quality print materials designed to capture attention
          and elevate your brand. Our creative team crafts each piece to reflect
          your identity, with fast delivery and reliable service — all at
          affordable prices.
        </div>
      </div>
      <div className="md:bg-[url('/section3.png')] bg-center bg-no-repeat grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row  md:py-10 py-5 gap-6 ">
        {card?.map((d, i) => (
          <div
            className="group cursor-pointer flex flex-col p-7 gap-2 bg-white hover:bg-linear-to-t hover:from-[#9A0F1E] hover:to-[#C6131B] items-center justify-center hover:text-white"
            key={i}
          >
            <div className="group-hover:hidden block">
              <img
                className="w-22 object-contain"
                src={d.img01}
                alt=""
              />
            </div>
            <div className=" group-hover:block hidden">
              <img
                className="w-22 object-contain"
                src={d.img02}
                alt=""
              />
            </div>
            <div className="font-bold text-lg ">{d?.heading}</div>
            <div className=" text-sm text-center">{d?.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
