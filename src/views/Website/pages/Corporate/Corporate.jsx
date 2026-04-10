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
import { useNavigate } from "react-router-dom";
import Filter from "../../components/Products/Filter";
import { corporateGiftingData } from "../../../../constants/corporateGiftingData";
import { useState } from "react";

const Corporate = () => {
  const navigate = useNavigate();
  const Cat = [
    {
      key: "gifts",
      name: "Gift Boxes",
      img: "dpCat1.png",
    },
    {
      key: "mugs",
      name: "Mugs & Bottles",
      img: "dpCat2.png",
    },
    {
      key: "tech",
      name: "Tech Gifts",
      img: "dpCat3.png",
    },
    {
      key: "pens",
      name: "Pens & Notebooks",
      img: "dpCat4.png",
    },
  ];

  const [activeMain, setActiveMain] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const [selectedSpecificProducts, setSelectedSpecificProducts] = useState([]);

  const mainCategories = Object.keys(corporateGiftingData).map((key) => ({
    key,
    title: corporateGiftingData[key].title,
    subs: corporateGiftingData[key].categories.map((c) => ({
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
      const offset = 120;
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

  const getFilteredProducts = (mainKey, fallbackData) => {
    if (activeMain !== mainKey) return fallbackData;
    if (selectedSpecificProducts.length > 0) return selectedSpecificProducts;
    if (activeSub) {
      const subCatObj = corporateGiftingData[mainKey]?.categories.find(
        (c) => c.name === activeSub,
      );
      return subCatObj ? subCatObj.products : fallbackData;
    }
    return fallbackData;
  };

  // Extract initial product arrays from corporateGiftingData
  const giftBoxes = corporateGiftingData.gifts.categories.flatMap(
    (c) => c.products,
  );
  const mugsAndBottles = corporateGiftingData.mugs.categories.flatMap(
    (c) => c.products,
  );
  const techGifts = corporateGiftingData.tech.categories.flatMap(
    (c) => c.products,
  );
  const pensNotebooks = corporateGiftingData.pens.categories.flatMap(
    (c) => c.products,
  );
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Corporate Gifting" isBanner={false} />
      <HeaderBanner
        head="Thoughtful Corporate Gifts for Every Occasion"
        isButton={true}
        desc="Custom-branded gifts for employees, clients, and events."
        btnLink="/customize"
        btnText="Customize your product"
        imgUrl="/coprate.png"
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

          <div id="section-gifts">
            <ProductSwiper
              head="Top Selling Gift Boxes"
              desc="Thoughtfully curated gift boxes for employees and clients."
              data={getFilteredProducts("gifts", giftBoxes)}
              link="/corporate-products?main=gifts"
              onProductClick={(product) => navigate(`/corporate-product-description/${product.slug || product.id}`)}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>

          <div id="section-mugs">
            <ProductSwiper
              head="Customized Mugs & Bottles"
              desc="Hydration and coffee essentials branded with your logo."
              data={getFilteredProducts("mugs", mugsAndBottles)}
              link="/corporate-products?main=mugs"
              onProductClick={(product) => navigate(`/corporate-product-description/${product.slug || product.id}`)}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>

          {!activeMain && (
            <div className="mt-10 lg:pl-10">
              <Banner
                color="text-white"
                heading="We Personalize Every Gift for Your Brand"
                subheading="Custom corporate gifting made easy — choose products, upload logos, and we handle the rest."
                isred={false}
                img="/stamp.png"
                width="w-full"
                btntext="Shop Now"
                btnLink="/"
              />
            </div>
          )}

          <div id="section-tech">
            <ProductSwiper
              head="Useful Branded Tech Gifts"
              desc="Practical tech gadgets that keep your brand in their daily lives."
              data={getFilteredProducts("tech", techGifts)}
              link="/corporate-products?main=tech"
              onProductClick={(product) => navigate(`/corporate-product-description/${product.slug || product.id}`)}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>

          <div id="section-pens">
            <ProductSwiper
              head="Branded Pens & Notebooks"
              desc="Professional stationery and writing tools for the modern office."
              data={getFilteredProducts("pens", pensNotebooks)}
              link="/corporate-products?main=pens"
              onProductClick={(product) => navigate(`/corporate-product-description/${product.slug || product.id}`)}
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          </div>
        </div>
      </div>

      <Testmonial1 />
      {/* <LatestNews/> */}
      <FaqSection />
    </div>
  );
};

export default Corporate;
