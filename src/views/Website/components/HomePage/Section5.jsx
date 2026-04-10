import React from "react";
import RedButton from "../main/Buttons/RedButton";
import RedButtonLink from "../main/Buttons/RedButtonLink";

const Section5 = () => {
  const card = [
    {
      img: "/homes5img1.png",
      btnText: "Veiw All",
      btnLink: "/stamp-products",
      text: "Stamp",
    },
    {
      img: "/homes5img2.png",
      btnText: "Veiw All",
      btnLink: "/card-products?main=business",
      text: "Business Card",
    },
    {
      img: "/homes5img3.png",
      btnText: "Veiw All",
      btnLink: "/apparel-products?main=cap",
      text: "Caps",
    },
    {
      img: "/homes5img4.png",
      btnText: "Veiw All",
      btnLink: "/estore-products?main=hoodie",
      text: "Hoodie",
    },
  ];
  return (
    <div className="w-full md:mt-30 mt-20 lg:px-26 md:px-10 px-5">
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-10 sm:gap-5 gap-2 ">
        <div className="md:text-5xl text-3xl font-medium">
          Explore Our Most Popular Custom Products
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-lg">
            Discover our most popular customizable items, ready to be
            personalized your way
          </div>
          <div>
            <RedButtonLink text="Browse Products" link="/shop" />
          </div>
        </div>
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:mt-15 mt-5">
        {card?.map((d, i) => (
          <div className="flex flex-col gap-5 items-center">
            <div className="w-full">
              <img
                src={d?.img}
                className={`w-full object-cover ${i % 2 !== 0 ? "md:h-[80vh] h-[50vh]" : "md:h-[60vh] h-[50vh]"}`}
                alt=""
              />
            </div>
            <div className="text-2xl font-medium">{d?.text}</div>
            <div>
              <RedButtonLink
                width="md:px-10 px-20"
                text={d?.btnText}
                link={d?.btnLink}
              />
            </div>
          </div>
        ))}

        {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center md:gap-5 gap-2 w-full lg:mt-10 mt-5">
          {data?.map((d, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "lg:h-[80vh] h-[40vh]" : "lg:h-[60vh] h-[40vh]"
              } bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${Image_Url}${d.image})` }}
            >
              <div className="h-full w-full bg-black/30 flex items-end md:p-8 p-2 text-white lg:text-2xl text-xl font-palm">
                {d?.image_text}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Section5;
