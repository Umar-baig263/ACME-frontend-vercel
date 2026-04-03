import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Section2 = () => {
  const faqData = [
    {
      question: "Weatherproof & long-lasting material",
      img: "icon1.png",
      img1: "icon10.png",
      ans: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum  typesetting industry. Lorem Ipsum",
    },
    {
      question: "Custom sizes & shapes",
      img: "icon2.png",
      img1: "icon20.png",
      ans: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum  typesetting industry. Lorem Ipsum",
    },
    {
      question: "Clear print & finishing",
      img: "icon3.png",
      img1: "icon30.png",
      ans: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum  typesetting industry. Lorem Ipsum",
    },
    {
      question: "Fast turnaround time",
      img: "icon4.png",
      img1: "icon40.png",
      ans: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum  typesetting industry. Lorem Ipsum",
    },
    {
      question: "Expert support",
      img: "icon5.png",
      img1: "icon50.png",
      ans: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum  typesetting industry. Lorem Ipsum",
    },
  ];
  console.log(faqData);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:px-26 md:px-10 px-5 md:mt-30 mt-20 flex md:flex-row flex-col gap-15">
      <div className="md:w-1/2 w-full">
        <img src="/signSec2.png" alt="" />
      </div>
      <div className="md:w-1/2 w-full md:px-10 px-0">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold">why choose us?</div>
          <div className="text-lg">
            From posters to brochures, we provide creative and high-quality
            marketing materials tailored to your business needs.
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          {faqData?.map((item, index) => (
            <div
              key={index}
              className={` bg-gray-100 pb-4 cursor-pointer px-3 py-3 `}
              onClick={() => toggleFAQ(index)}
            >
              <div className="group flex justify-between gap-2 items-center">
                <div className="flex gap-3">
                  <div
                    className={`px-2 py-2  ${
                      activeIndex === index
                        ? "border border-[#C6131B] bg-[#C6131B]"
                        : "bg-white border border-black"
                    }`}
                  >
                    {activeIndex === index ? (
                      <img src={item?.img1} className="w-[24px]" />
                    ) : (
                      <img src={item?.img} className="w-[24px]" />
                    )}
                  </div>
                  <div className="md:text-lg text-sm font-bold ">
                    {item?.question}
                  </div>
                </div>

                {/* <h3 className="md:text-lg text-sm">{item?.question}</h3> */}
                <div
                  className={`p-2 rounded-full  ${
                    activeIndex === index
                      ? "border border-black bg-white text-black"
                      : " border border-[#C6131B] text-white bg-[#C6131B]"
                  }`}
                >
                  {activeIndex === index ? <FaAngleDown /> : <FaAngleUp />}
                </div>
              </div>

              {activeIndex === index && (
                <p className=" md:text-lg text-sm md:px-15 px-5 md:mt-0 mt-5">{item?.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
