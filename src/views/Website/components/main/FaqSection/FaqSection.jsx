import React, { act, useState } from "react";
// import BlogBody from '../../BlogBody/BlogBody';

const FaqSection = () => {
  const faqData = [
    {
      question: "How does the customization process work?",
      ans: "ACME is a platform that allows you to create and print custom designs on various products like t-shirts, mugs, and more. We provide an easy-to-use interface for designing and ordering your custom items.",
    },
    {
      question: "Can I order a single item or is there a minimum quantity?",
      ans: "ACME is a platform that allows you to create and print custom designs on various products like t-shirts, mugs, and more. We provide an easy-to-use interface for designing and ordering your custom items.",
    },
    {
      question: "What’s the average delivery time for custom orders?",
      ans: "ACME is a platform that allows you to create and print custom designs on various products like t-shirts, mugs, and more. We provide an easy-to-use interface for designing and ordering your custom items.",
    },
    {
      question: "Do you offer design support if I need help with my artwork?",
      ans: "ACME is a platform that allows you to create and print custom designs on various products like t-shirts, mugs, and more. We provide an easy-to-use interface for designing and ordering your custom items.",
    },
    {
      question: "What is ACME?",
      ans: "ACME is a platform that allows you to create and print custom designs on various products like t-shirts, mugs, and more. We provide an easy-to-use interface for designing and ordering your custom items.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:px-26 md:px-10 px-5 md:my-30 my-20 flex md:flex-row flex-col md:gap-10 gap-5 ">
      {/* <p className='absolute -top-2 rounded-full md:h-20 h-10 w-[2px] mb-5 bg-linear-to-t from-[#5DAABA] to-transparent'></p> */}
      {/* <h2 className="text-center xl:text-5xl md:text-4xl text-3xl font-palm leading-tight mb-8 mt-5">
                Frequently Asked Questions
            </h2> */}

      <div className="md:w-[40%] w-full flex flex-col gap-5 ">
        <div className="md:text-5xl text-3xl font-bold">
          Frequently Asked Questions
        </div>
        <div className="md:text-base text-sm ">
          Got questions? We've got answers. Everything you need to know before
          placing your order, all in one place.
        </div>
      </div>
      <div className="md:w-[60%] w-full">
        <div className="w-full flex flex-col gap-4">
          {faqData?.map((item, index) => (
            <div
              key={index}
              className={`border-b border-[#A6A6A6] pb-4 cursor-pointer px-3 py-3 ${activeIndex === index ? "bg-gray-100" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <div className="md:text-lg text-sm">
                  {index + 1}. {item?.question}
                </div>
                {/* <h3 className="md:text-lg text-sm">{item?.question}</h3> */}
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-2 text-xs md:px-10 px-5">{item?.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
