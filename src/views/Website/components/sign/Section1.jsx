import React from "react";

const Section1 = () => {
  const card = [
    {
      head: "Acrylic Sign",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      imgurl: "/signImg1.png",
    },
    {
      head: "Metal Nameplate",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      imgurl: "/signImg2.png",
    },
    {
      head: "Shop Board",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      imgurl: "/signImg3.png",
    },
    {
      head: "Door Sign",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      imgurl: "/signImg4.png",
    },
    {
      head: "Lightbox Sign",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      imgurl: "/signImg5.png",
    },
    {
      head: "Directional Sign",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      imgurl: "/signImg6.png",
    },
  ];
  return (
    <div className="lg:px-26 md:px-10 px-5 md:mt-30 mt-20 flex flex-col gap-10">
      <div className="flex justify-center item-center gap-5 lg:px-26 md:px-10 px-5 text-center">
        <div className="md:w-3/4 w-full">
          <div className="md:text-3xl text-base font-bold">
            Find the Perfect Sign for Every Space
          </div>
          <div className="md:text-lg text-sm">
            From posters to brochures, we provide creative and high-quality
            marketing materials tailored to your business needs.
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 grid-flow-row gap-5">
        {card?.map((d, i) => (
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <img
                className="w-full h-[250px] object-container"
                src={d?.imgurl}
                alt=""
              />
            </div>
            <div className="text-xl font-bold">{d?.head}</div>
            <div className="text-base">
             {d?.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
