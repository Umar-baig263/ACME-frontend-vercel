import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import CategorySwiper from "../../components/main/CategorySwiper/CategorySwiper";
import Section1 from "../../components/EStore/Section1";
import Banner from "../../components/main/Banner/Banner";
import Section2 from "../../components/EStore/Section2";
// import Testimonial from "../../components/HomePage/Testimonial";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import { tshirt } from "../../../../constants/products/apparel/tshirt";
import { cap } from "../../../../constants/products/apparel/cap";
import { useNavigate, useLocation } from "react-router-dom";
  
import Filter from "../../components/Products/Filter";
import { apparel } from "../../../../constants/products/apparel";
import { useState } from "react";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";

const EStore = () => {
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
      key: "tshirt",
      name: "T-Shirt",
      img: "dpCat1.png",
    },
    {
      key: "jacket",
      name: "Jacket",
      img: "dpCat2.png",
    },
    {
      key: "cap",
      name: "Cap",
      img: "dpCat3.png",
    },
    {
      key: "shirt",
      name: "Shirt",
      img: "dpCat4.png",
    },
    {
      key: "paint",
      name: "Paint & Short",
      img: "dpCat5.png",
    },
  ];

  const [activeMain, setActiveMain] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const [selectedSpecificProducts, setSelectedSpecificProducts] = useState([]);

  const eStoreData = {
    tshirt: { title: "T-Shirt", products: apparel["T-Shirts"] },
    jacket: { title: "Jacket", products: apparel["Jackets"] },
    cap: { title: "Cap", products: apparel["Caps"] },
    shirt: { title: "Shirt", products: apparel["Shirts"] },
    paint: { title: "Paint & Short", products: apparel["Paint"] },
  };

  const mainCategories = Object.keys(eStoreData).map((key) => ({
    key,
    title: eStoreData[key].title,
    subs: [
      {
        name: "All " + eStoreData[key].title,
        products: eStoreData[key].products,
      },
    ],
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
    return fallbackData;
  };

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
      <Navbar breadcrumb="e-store" isBanner={false} />
      <HeaderBanner
        head="Shop ACME’s exclusive collection of branded merchandise."
        isButton={true}
        btnLink="/shop"
        btnText="Shop Now"
        imgUrl="/estore.png"
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

          {(!activeMain || activeMain === "tshirt") && (
            <ProductSwiper
              head="T-Shirt"
              desc="High-quality custom t-shirts for every occasion — choose your style and make a statement."
              data={getFilteredProducts("tshirt", apparel["T-Shirts"])}
              onProductClick={() =>
                navigate("/estore-products", { state: { category: "tshirt" } })
              }
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "cap") && (
            <ProductSwiper
              head="Cap"
              desc="Branded caps and headwear for high visibility and professional style."
              data={getFilteredProducts("cap", apparel["Caps"])}
              onProductClick={() =>
                navigate("/estore-products", { state: { category: "cap" } })
              }
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {!activeMain && (
            <div className="mt-10 lg:pl-10">
              <Banner
                color="text-white"
                heading="Have an Idea? Let's Design It"
                subheading="Get started with your custom branded merchandise in minutes — we deliver quality every time."
                isred={false}
                img="/estoreBanner.png"
                width="w-full"
                btntext="Shop Now"
                btnLink="/"
              />
            </div>
          )}

          {(!activeMain || activeMain === "jacket") && (
            <ProductSwiper
              head="Jacket"
              desc="Stay warm and promote your brand with our premium custom jackets."
              data={getFilteredProducts("jacket", apparel["Jackets"])}
              onProductClick={() =>
                navigate("/estore-products", { state: { category: "jacket" } })
              }
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "shirt") && (
            <ProductSwiper
              head="Shirt"
              desc="Professional branded shirts for your team — available in a variety of styles and fits."
              data={getFilteredProducts("shirt", apparel["Shirts"])}
              onProductClick={() =>
                navigate("/estore-products", { state: { category: "shirt" } })
              }
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {(!activeMain || activeMain === "paint") && (
            <ProductSwiper
              head="Paint & Short"
              desc="Comfortable and durable branded short-sleeve apparel for any setting."
              data={getFilteredProducts("paint", apparel["Paint"])}
              onProductClick={() =>
                navigate("/estore-products", { state: { category: "paint" } })
              }
              paddingClass="lg:px-10 md:px-5 px-5"
            />
          )}

          {!activeMain && <Section2 />}
        </div>
      </div>
      <Section1
        head="Cap"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={cap}
        onClick={() =>
          navigate("/estore-products", { state: { category: "cap" } })
        }
      />
      <Banner
        color="text-white"
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom Stamp in minutes"
        isred={false}
        img="/estoreBanner.png"
        width="w-full"
        btntext="Shop Now"
        btnLink="/"
      />
      <Section2 />
      <Testmonial1 />
      <LatestNews data={card} />
      <FaqSection />
    </div>
  );
};

export default EStore;
