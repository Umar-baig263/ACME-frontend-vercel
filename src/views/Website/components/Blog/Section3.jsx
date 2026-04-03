import React from "react";
import ProductHeader from "../main/ProductHeader/ProductHeader";
import ProductCard from "../main/ProductCard/ProductCard";
// import ProductDesign1 from "../main/ProductDesign1/ProductDesign1";

const Section3 = () => {
  const products = [
    {
      name: "What is Lorem Ipsum",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at",
      img: "/blogImg1.png",
    },
    {
      name: "What is Lorem Ipsum",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at",
      img: "/blogImg2.png",
    },
    {
      name: "What is Lorem Ipsum",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at",
      img: "/blogImg3.png",
    },
    {
      name: "What is Lorem Ipsum",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at",
      img: "/blogImg4.png",
    },
  ];
  const blogsPerPage = 4;
  var currentProp;
  if (products.length > 4) {
    currentProp = products.slice(0, blogsPerPage);
  } else {
    currentProp = products;
  }
  return (
    <div className="md:mt-20 mt-10 flex flex-col gap-10">
      <div>
        <div className="lg:px-26 md:px-10 px-5 w-full flex md:flex-row flex-col items-end justify-between md:gap-10 gap-2">
          <div className="flex flex-col gap-3">
            <div className="font-bold md:text-3xl uppercase text-xl">
              What is Lorem Ipsum
            </div>
            <div className="md:text-base text-sm w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-26 md:px-10 px-5">
        {currentProp?.map((d, i) => (
          <div className="flex flex-col gap-3 ">
            <div className="w-full">
              <img src={d?.img} className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 pr-5">
              <div>
                <div className={`md:text-lg font-semibold text-sm`}>
                  {d?.name}
                </div>
              </div>
              <div className="md:text-sm text-xs w-full">{d?.desc} </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
