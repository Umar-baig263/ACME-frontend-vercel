import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import CardSec1 from "../../components/Products/cardSec1";
import Banner from "../../components/main/Banner/Banner";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import FaqSection from "../../components/main/FaqSection/FaqSection";

const CardsPro = () => {
  const card = [
    {
      head: "Importance of Custom Stamps for Your Business",
      desc: "Custom stamps are more than just office tools — they’re a mark of identity and efficiency.",
      img: "s6img1.png",
    },
    {
      head: "Importance of Custom Stamps for Your Business",
      desc: "Custom stamps are more than just office tools — they’re a mark of identity and efficiency.",
      img: "s6img2.png",
    },
  ];
  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar
        breadcrumb="products /  Card"
        isBanner={true}
        img="CardProductBanner.png"
      />
      <CardSec1 />
      <Banner
        color="text-white"
        isred={false}
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom Stamp in minutes"
        btnLink="/stamp"
        btntext="Contact Us"
        img="/cardProductBanner13.png"
      />
      <LatestNews margin={true} data={card} />
      <FaqSection />
    </div>
  );
};

export default CardsPro;
