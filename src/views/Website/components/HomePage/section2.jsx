import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  const cards = [
    {
      title: "DIGITAL PRINTING",
      image: "/homes2img.png",
      link: "/digital-printing",
    },
    {
      title: "STAMP",
      image: "/homes2img1.png",
      link: "/stamp",
    },
    {
      title: "APPAREL",
      image: "/homes2img2.png",
      link: "/apparel",
    },
    {
      title: "Corporate Gifting",
      image: "/homes2img3.png",
      link: "/corporate-gifting",
    },
    {
      title: "E-STORE",
      image: "/homes2img4.png",
      link: "/e-store",
    },
    {
      title: "MARKETING & ADVERTISING",
      image: "/homes2img5.png",
      link: "/marketing-advertising",
    },
    {
      title: "IT & NETWORK SOLUTION",
      image: "/homes2img6.png",
      link: "/it-network-solution",
    },
  ];
  return (
    <div className="md:pt-30 pt-20 flex flex-col lg:px-26 md:px-10 px-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="md:text-4xl text-xl font-medium">
          What We Do for You
        </div>
        <div className="md:text-base text-sm">
          Discover our most popular customizable items, ready to be personalized
          your way
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cards.map((card, index) => {
          if (index === 0) {
            return (
              <Link
                to={card.link}
                key={index}
                className={`flex flex-col sm:col-span-2 col-span-1 w-full  h-[250px] relative overflow-hidden  bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${card?.image})` }}
              >
                <div className="absolute bottom-5 left-3 w-[50%] text-lg font-medium">
                  {card?.title}
                </div>
              </Link>
            );
          } else {
            return (
              <Link
                to={card.link}
                key={index}
                className={`flex flex-col  w-full h-[250px] relative overflow-hidden  bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${card?.image})` }}
              >
                <div className="absolute bottom-5 left-3 w-[46%] text-base font-medium ">
                  {card.title}
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Section2;
