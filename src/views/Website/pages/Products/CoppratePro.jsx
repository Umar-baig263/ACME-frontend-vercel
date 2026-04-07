import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import CorpSec1 from "../../components/Products/CorpSec1";
import Banner from "../../components/main/Banner/Banner";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import { useLocation } from "react-router-dom";
import { gift } from "../../../../constants/gift";
import { tech } from "../../../../constants/tech";
import { pens } from "../../../../constants/pens";
import { bottles } from "../../../../constants/bottles";

const CoppratePro = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const dataMap = {
    gift,
    bottles,
    tech,
    pens,
  };

  const products = dataMap[category] || [];
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
        breadcrumb="products /  Corprate-Gifting / Bottles"
        isBanner={true}
        img="coppratePro.png"
      />
      <CorpSec1 products={products} />
      <Banner
        color="text-white"
        isred={false}
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom Stamp in minutes"
        btnLink="/contact"
        btntext="Contact Us"
        img="/bottelBanner.png"
      />
      <LatestNews margin={true} data={card} />
      <FaqSection />
    </div>
  );
};

export default CoppratePro;
