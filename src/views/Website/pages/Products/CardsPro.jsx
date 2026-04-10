import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import CardSec1 from "../../components/Products/CardSec1";
import Banner from "../../components/main/Banner/Banner";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import { useLocation } from "react-router-dom";

const CardsPro = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const mainCat = params.get("main") || "business";

  useEffect(() => {
    const el = document.getElementById("products-section");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);
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
        breadcrumb="Digital Printing / Cards"
        isBanner={true}
        img="CardProductBanner.png"
      />
      <div id="products-section">
        <CardSec1 defaultMain={mainCat} />
      </div>
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
