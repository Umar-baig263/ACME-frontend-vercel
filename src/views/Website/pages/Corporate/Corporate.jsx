import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import CategorySwiper from "../../components/main/CategorySwiper/CategorySwiper";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
// import Section1 from "../../components/Corporate/Section1";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import { giftBoxes } from "../../../../constants/products/corporateGifting/giftBoxes";
import { mugsAndBottles } from "../../../../constants/products/corporateGifting/mugsAndBottles";
import { techGifts } from "../../../../constants/products/corporateGifting/techGifts";
import { pensNotebooks } from "../../../../constants/products/corporateGifting/pensNotebooks";
import { useNavigate } from "react-router-dom";

const Corporate = () => {
  const navigate = useNavigate();
  const Cat = [
    {
      name: "Business Card",
      img: "dpCat1.png",
    },
    {
      name: " Card & Print Advertising",
      img: "dpCat2.png",
    },
    {
      name: "Signs, Banner & Poster",
      img: "dpCat3.png",
    },
    {
      name: "Stickers & Labels",
      img: "dpCat4.png",
    },
    {
      name: "Promotional Product",
      img: "dpCat5.png",
    },
    {
      name: "Packaging",
      img: "dpCat6.png",
    },
    {
      name: "Promotional Product",
      img: "dpCat3.png",
    },
    {
      name: "Packaging",
      img: "dpCat4.png",
    },
  ];
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="corporate-gifting" isBanner={false} />
      <HeaderBanner
        head="Thoughtful Corporate Gifts for Every Occasion"
        isButton={true}
        desc="Custom-branded gifts for employees, clients, and events."
        btnLink="/stamp"
        btnText="Customize your stamp"
        imgUrl="/coprate.png"
      />
      <CategorySwiper data={Cat} />
      <ProductSwiper
        head="Top Selling Gift Boxes"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={giftBoxes}
        onProductClick={() => navigate("/corporate-products?main=gifts")}
      />
      <ProductSwiper
        head="Customized Mugs & Bottles"
        desc="Find inspiration in these thoughtfully curated product collections."
        data={mugsAndBottles}
        onProductClick={() => navigate("/corporate-products?main=mugs")}
      />
      <Banner
        color="text-white"
        heading="We Personalize Every Gift for Your Brand"
        subheading="Design your stamp in minutes — choose style, upload logo or text, and order easily."
        isred={false}
        img="/stamp.png"
        width="md:w-1/2 w-full"
        btntext="Shop Now"
        btnLink="/"
      />
      <ProductSwiper
        head="Useful Branded Tech Gifts"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={techGifts}
        onProductClick={() => navigate("/corporate-products?main=tech")}
      />
      <ProductSwiper
        head="Branded Pens & Notebooks"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={pensNotebooks}
        onProductClick={() => navigate("/corporate-products?main=pens")}
      />

      <Testmonial1 />
      {/* <LatestNews/> */}
      <FaqSection />
    </div>
  );
};

export default Corporate;
