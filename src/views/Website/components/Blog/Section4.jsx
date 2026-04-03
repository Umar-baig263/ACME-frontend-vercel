import React from "react";

const Section4 = () => {
  const data = [
    {
      img: "blog2.png",
      head: "What is Lorem Ipsum",
      desc: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
    },
    {
      img: "blog1.png",
      head: "What is Lorem Ipsum",
      desc: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
    },
  ];
  return (
    <div className="md:mt-20 mt-10 flex flex-col md:gap-5 lg:px-26 md:px-10 px-5">
      <div>
        <div className=" w-full flex md:flex-row flex-col  justify-between md:gap-10 gap-2">
          <div className="flex flex-col gap-3">
            <div className="font-bold md:text-3xl uppercase text-xl">
              What is Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 md:flex-row flex-col md:gap-20 gap-5 mt-5">
        {data?.map((d, i) => (
          <div className="md:w-1/2 w-full flex flex-col gap-5 " key={i}>
            <div className="w-full">
              <img className="w-full object-contain" src={d?.img} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">{d?.head}</div>
              <div className="text-base">{d?.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
