import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import CategorySwiper from "../../components/main/CategorySwiper/CategorySwiper";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
// import Section1 from "../../components/DigitalPrinting/Section1";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import { businessCards } from "../../../../constants/products/digitalPrinting/businessCard";
import { cardPrintAds } from "../../../../constants/products/digitalPrinting/cardPrintAds";
import { signsBannersPosters } from "../../../../constants/products/digitalPrinting/signsBannersPosters";
import { promotionalProducts } from "../../../../constants/products/digitalPrinting/promotionalProducts";
import { stickersLabels } from "../../../../constants/products/digitalPrinting/stickersLabels";
import { packaging } from "../../../../constants/products/digitalPrinting/packaging";
import { useNavigate, useLocation } from "react-router-dom";

const DigitalPrinting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
           element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);
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
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Digital Printing" isBanner={false} />
      <HeaderBanner
        head="High-Quality Digital Printing Services"
        isButton={true}
        desc="From business cards to banners — we deliver vibrant, sharp, and reliable prints."
        btnLink="/stamp"
        btnText="Customize your stamp"
        imgUrl="/dpbannerimg.png"
      />
      <CategorySwiper data={Cat} />
      <div id="business-card-section" className="scroll-mt-40">
        <ProductSwiper
          head="Business Card"
          desc="From business cards to flyers, we create high-quality printed materials that leave a lasting impression on your audience."
          data={businessCards}
          onProductClick={() => navigate("/card-products?main=business")}
        />
      </div>
      <ProductSwiper
        head="Card & Print  Advertising "
        desc="From business cards to flyers, we create high-quality printed materials that leave a lasting impression on your audience."
        data={cardPrintAds}
        onProductClick={() => navigate("/card-products?main=card")}
      />
      <Banner
        color="text-white"
        heading="Fast. Affordable. Professional. Get Your Prints Today!"
        subheading="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        isred={false}
        img="/dbBanner.png"
        width="md:w-1/2 w-full"
        btntext="Shop Now"
        btnLink="/"
      />
      <ProductSwiper
        head="Signs, Banner &  Poster"
        desc="Whether indoors or outdoors, our eye-catching signs, banners, and posters are perfect for promotions, events, or branding visibility."
        data={signsBannersPosters}
        onProductClick={() => navigate("/card-products?main=sign")}
      />
      <ProductSwiper
        head="Promotional & Product"
        desc="Customized promotional items and product branding solutions designed to keep your business top of mind with your audience."
        data={promotionalProducts}
        onProductClick={() => navigate("/card-products?main=promotional")}
      />
      <ProductSwiper
        head="stickers & labels"
        desc="From product labeling to creative branding, our high-quality stickers and labels are designed to enhance visibility, deliver information, and make your packaging stand out."
        data={stickersLabels}
        onProductClick={() => navigate("/card-products?main=sticker")}
      />
      <ProductSwiper
        head="packaging"
        desc="Custom-designed packaging that protects your product while enhancing shelf appeal and reinforcing your brand identity."
        data={packaging}
        onProductClick={() => navigate("/card-products?main=packaging")}
      />
      <Testmonial1 />
      <LatestNews data={card} />
      <FaqSection />
    </div>
  );
};

export default DigitalPrinting;
