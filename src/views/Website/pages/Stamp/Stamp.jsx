import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
// import Section1 from "../../components/Stamp/Section1";
// import Section2 from "../../components/Stamp/Section2";
// import Section3 from "../../components/Stamp/Section3";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import CategorySwiper from "../../components/main/CategorySwiper/CategorySwiper";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import { trodatprinty } from "../../../../constants/products/stamp/trodatprinty";
import { rubberstamps } from "../../../../constants/products/stamp/rubberstamp";

import { useNavigate, useLocation } from "react-router-dom";
import { padsandinks } from "../../../../constants/products/stamp/padsandinks";
import { stencils } from "../../../../constants/products/stamp/stencils";
import { colop } from "../../../../constants/products/stamp/colop";
import { embossingseals } from "../../../../constants/products/stamp/embossingseals";

const Stamp = () => {
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
      name: "Trodat/Printy",
      img: "proCat1.png",
    },
    {
      name: "Colop/2000Plus",
      img: "proCat2.png",
    },
    {
      name: "Rubber Stamps",
      img: "proCat3.png",
    },
    {
      name: "Pads, Ink & Racks",
      img: "proCat4.png",
    },
    {
      name: "Embossing Seal",
      img: "proCat5.png",
    },
    {
      name: "Custom Stencils",
      img: "proCat1.png",
    },
    {
      name: "Colop/2000Plus",
      img: "proCat2.png",
    },
    {
      name: "Rubber Stamps",
      img: "proCat3.png",
    },
  ];
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Stamp" isBanner={false} />
      <HeaderBanner
        head="High-Quality Custom Stamps for Every Need"
        isButton={true}
        desc="Self-inking, logo & date stamps — customized to leave a professional mark."
        btnLink="/stamp"
        btnText="Customize your stamp"
        imgUrl="/stamp-banner.png"
      />
      <CategorySwiper data={Cat} />
      <div id="stamp-section" className="scroll-mt-40">
        <ProductSwiper
          head="Trodat/Printy"
          desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          data={trodatprinty}
          onProductClick={() => navigate("/stamp-products?main=trodat")}
        />
      </div>
      <ProductSwiper
        head="Colop/ 2000Plus"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={colop}
        onProductClick={() => navigate("/stamp-products?main=colop")}
      />
      <Banner
        color="text-white"
        heading="Ready to Customize Your Stamp?"
        subheading="Design your stamp in minutes — choose style, upload logo or text, and order easily."
        isred={false}
        img="stamp.png"
        btntext="Custom Stamp Now"
        btnLink="/"
      />
      <ProductSwiper
        head="Rubber Stamps"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={rubberstamps}
        onProductClick={() => navigate("/stamp-products?main=rubber")}
      />
      <ProductSwiper
        head="Pads, Inks & Racks"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={padsandinks}
        onProductClick={() => navigate("/stamp-products?main=pads")}
      />
      <ProductSwiper
        head="Embossing Seal"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={embossingseals}
        onProductClick={() => navigate("/stamp-products?main=embossing")}
      />
      <ProductSwiper
        head="Custom Stencils"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={stencils}
        onProductClick={() => navigate("/stamp-products?main=stencils")}
      />
      <FaqSection />
    </div>
  );
};

export default Stamp;
