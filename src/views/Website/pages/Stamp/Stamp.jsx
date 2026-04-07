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
import Filter from "../../components/Products/Filter";
import { stampData } from "../../../../constants/stampData";
import { useState } from "react";

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
      key: "trodat",
      name: "Trodat/Printy",
      img: "proCat1.png",
    },
    {
      key: "colop",
      name: "Colop/2000Plus",
      img: "proCat2.png",
    },
    {
      key: "rubber",
      name: "Rubber Stamps",
      img: "proCat3.png",
    },
    {
      key: "pads",
      name: "Pads, Ink & Racks",
      img: "proCat4.png",
    },
    {
      key: "embossing",
      name: "Embossing Seal",
      img: "proCat5.png",
    },
    {
      key: "stencils",
      name: "Custom Stencils",
      img: "proCat1.png",
    },
  ];

  const [activeMain, setActiveMain] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const [selectedSpecificProducts, setSelectedSpecificProducts] = useState([]);

  const mainCategories = Object.keys(stampData).map((key) => ({
    key,
    title: stampData[key].title,
    subs: stampData[key].categories.map((c) => ({
      name: c.name,
      products: c.products,
    })),
  }));

  const handleMainClick = (key) => {
    setActiveMain((prev) => (prev === key ? "" : key));
    setActiveSub("");
    setSelectedSpecificProducts([]);
  };

  const handleSubClick = (subName, mainKey) => {
    setActiveMain(mainKey);
    setActiveSub((prev) => (prev === subName ? "" : subName));
    setSelectedSpecificProducts([]);
  };

  const handleProductClick = (product) => {
    setSelectedSpecificProducts((prev) => {
      const isSelected = prev.some((p) => p.id === product.id);
      return isSelected
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
  };

  const getFilteredProducts = (mainKey, fallbackData) => {
    if (activeMain !== mainKey) return fallbackData;
    if (selectedSpecificProducts.length > 0) return selectedSpecificProducts;
    if (activeSub) {
      const subCatObj = stampData[mainKey]?.categories.find((c) => c.name === activeSub);
      return subCatObj ? subCatObj.products : fallbackData;
    }
    return fallbackData;
  };
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Stamp" isBanner={false} />
      <HeaderBanner
        head="High-Quality Custom Stamps for Every Need"
        isButton={true}
        desc="Self-inking, logo & date stamps — customized to leave a professional mark."
        btnLink="/stamp-customize"
        btnText="Customize your stamp"
        imgUrl="/stamp-banner.png"
      />

      <div className="max-w-[1500px] mx-auto flex md:flex-row flex-col w-full pt-10 px-4 md:px-8">
        {/* SIDEBAR */}
        <div className="md:w-[30%] lg:w-[25%] px-2 md:px-5 border-r border-[#E5E5E5] flex-shrink-0">
          <Filter
            filter={mainCategories.map((cat) => ({
              key: cat.key,
              name: cat.title,
              sub: cat.subs.map((subObj) => ({
                name: subObj.name,
                products: subObj.products,
              })),
            }))}
            selectedMain={activeMain}
            selectedSub={activeSub}
            onMainClick={handleMainClick}
            onSubClick={handleSubClick}
            onProductClick={handleProductClick}
            selectedProducts={selectedSpecificProducts}
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 w-full min-w-0 lg:pl-10 pb-20 overflow-hidden">
          <CategorySwiper
            data={Cat}
            activeCategory={activeMain}
            onCategoryClick={handleMainClick}
            paddingClass="lg:px-10 md:px-5 px-5"
          />

          {(!activeMain || activeMain === "trodat") && (
            <ProductSwiper
              head="Trodat/Printy"
              desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
              data={getFilteredProducts("trodat", trodatprinty)}
              onProductClick={() => navigate("/stamp-products?main=trodat")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "colop") && (
            <ProductSwiper
              head="Colop/ 2000Plus"
              desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
              data={getFilteredProducts("colop", colop)}
              onProductClick={() => navigate("/stamp-products?main=colop")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {!activeMain && (
            <div className="mt-10 lg:pl-10">
              <Banner
                color="text-white"
                heading="Ready to Customize Your Stamp?"
                subheading="Design your stamp in minutes — choose style, upload logo or text, and order easily."
                isred={false}
                img="stamp.png"
                btntext="Custom Stamp Now"
                btnLink="/stamp-customize"
              />
            </div>
          )}

          {(!activeMain || activeMain === "rubber") && (
            <ProductSwiper
              head="Rubber Stamps"
              desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
              data={getFilteredProducts("rubber", rubberstamps)}
              onProductClick={() => navigate("/stamp-products?main=rubber")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "pads") && (
            <ProductSwiper
              head="Pads, Inks & Racks"
              desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
              data={getFilteredProducts("pads", padsandinks)}
              onProductClick={() => navigate("/stamp-products?main=pads")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "embossing") && (
            <ProductSwiper
              head="Embossing Seal"
              desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
              data={getFilteredProducts("embossing", embossingseals)}
              onProductClick={() => navigate("/stamp-products?main=embossing")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "stencils") && (
            <ProductSwiper
              head="Custom Stencils"
              desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
              data={getFilteredProducts("stencils", stencils)}
              onProductClick={() => navigate("/stamp-products?main=stencils")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}
        </div>
      </div>
      <FaqSection />
    </div>
  );
};

export default Stamp;
