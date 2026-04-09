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
import Filter from "../../components/Products/Filter";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import { useState } from "react";

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
      key: "business",
      name: "Business Card",
      img: "dpCat1.png",
    },
    {
      key: "card",
      name: " Card & Print Advertising",
      img: "dpCat2.png",
    },
    {
      key: "sign",
      name: "Signs, Banner & Poster",
      img: "dpCat3.png",
    },
    {
      key: "sticker",
      name: "Stickers & Labels",
      img: "dpCat4.png",
    },
    {
      key: "promotional",
      name: "Promotional Product",
      img: "dpCat5.png",
    },
    {
      key: "packaging",
      name: "Packaging",
      img: "dpCat6.png",
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

  const [activeMain, setActiveMain] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const [selectedSpecificProducts, setSelectedSpecificProducts] = useState([]);

  const mainCategories = Object.keys(digitalPrintingData).map((key) => ({
    key,
    title: digitalPrintingData[key].title,
    subs: digitalPrintingData[key].categories.map((c) => ({
      name: c.name,
      products: c.products,
    })),
  }));

  const handleProductClick = (product) => {
    setSelectedSpecificProducts((prev) => {
      const isSelected = prev.some((p) => p.id === product.id);
      return isSelected
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Adjusted offset for navbar and swiper
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMainClick = (key) => {
    const isDeactivating = activeMain === key;
    setActiveMain((prev) => (prev === key ? "" : key));
    setActiveSub("");
    setSelectedSpecificProducts([]);

    if (!isDeactivating && key) {
      setTimeout(() => scrollToSection(`section-${key}`), 100);
    }
  };

  const handleSubClick = (subName, mainKey) => {
    setActiveMain(mainKey);
    setActiveSub((prev) => (prev === subName ? "" : subName));
    setSelectedSpecificProducts([]);
    setTimeout(() => scrollToSection(`section-${mainKey}`), 100);
  };

  // Helper function to return filtered products for an active category Swiper
  const getFilteredProducts = (mainKey, fallbackData) => {
    if (activeMain !== mainKey) return fallbackData;

    if (selectedSpecificProducts.length > 0) return selectedSpecificProducts;

    if (activeSub) {
      const subCatObj = digitalPrintingData[mainKey]?.categories.find(
        (c) => c.name === activeSub,
      );
      return subCatObj ? subCatObj.products : fallbackData;
    }

    return fallbackData;
  };

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Digital Printing" isBanner={false} />
      <HeaderBanner
        head="High-Quality Digital Printing Services"
        isButton={true}
        desc="From business cards to banners — we deliver vibrant, sharp, and reliable prints."
        btnLink="/card-customize"
        btnText="Customize your card"
        imgUrl="/dpbannerimg.png"
      />

      <div className="max-w-[1500px] mx-auto flex md:flex-row flex-col w-full pt-10 px-4 md:px-8">
        {/* SIDEBAR */}
        <div className="md:w-[30%] lg:w-[25%] px-2 md:px-5 border-r border-[#E5E5E5] flex-shrink-0 sticky top-32 h-fit">
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

          <div id="section-business">
            <ProductSwiper
              head="Business Card"
              desc="From business cards to flyers, we create high-quality printed materials that leave a lasting impression on your audience."
              data={getFilteredProducts("business", businessCards)}
              onProductClick={() => navigate("/card-products?main=business")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>
          <div id="section-card">
            <ProductSwiper
              head="Card & Print Advertising"
              desc="From business cards to flyers, we create high-quality printed materials that leave a lasting impression on your audience."
              data={getFilteredProducts("card", cardPrintAds)}
              onProductClick={() => navigate("/card-products?main=card")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>

          {!activeMain && (
            <div className="mt-10 lg:pl-10">
              <Banner
                color="text-white"
                heading="Fast. Affordable. Professional. Get Your Prints Today!"
                subheading="Premium business cards, banners, and marketing materials tailored to your brand."
                isred={false}
                img="/dbBanner.png"
                width="w-full"
                btntext="Shop Now"
                btnLink="/card-template"
              />
            </div>
          )}

          <div id="section-sign">
            <ProductSwiper
              head="Signs, Banner & Poster"
              desc="Whether indoors or outdoors, our eye-catching signs, banners, and posters are perfect for promotions, events, or branding visibility."
              data={getFilteredProducts("sign", signsBannersPosters)}
              onProductClick={() => navigate("/card-products?main=sign")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>

          <div id="section-promotional">
            <ProductSwiper
              head="Promotional & Product"
              desc="Customized promotional items and product branding solutions designed to keep your business top of mind with your audience."
              data={getFilteredProducts("promotional", promotionalProducts)}
              onProductClick={() => navigate("/card-products?main=promotional")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>
          <div id="section-sticker">
            <ProductSwiper
              head="stickers & labels"
              desc="From product labeling to creative branding, our high-quality stickers and labels are designed to enhance visibility, deliver information, and make your packaging stand out."
              data={getFilteredProducts("sticker", stickersLabels)}
              onProductClick={() => navigate("/card-products?main=sticker")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>

          <div id="section-packaging">
            <ProductSwiper
              head="packaging"
              desc="Custom-designed packaging that protects your product while enhancing shelf appeal and reinforcing your brand identity."
              data={getFilteredProducts("packaging", packaging)}
              onProductClick={() => navigate("/card-products?main=packaging")}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>
        </div>
      </div>

      <Testmonial1 />
      <LatestNews data={card} />
      <FaqSection />
    </div>
  );
};

export default DigitalPrinting;
