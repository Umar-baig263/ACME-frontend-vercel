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
    subs: [{ name: "All " + eStoreData[key].title, products: eStoreData[key].products }],
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
        btnLink="/stamp"
        btnText="Shop Now"
        imgUrl="/estore.png"
      />
      <CategorySwiper data={Cat} />
      <div id="hoodie-section" className="scroll-mt-40">
        <Section1
          head="T-Shirt"
          desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          data={tshirt}
          onClick={() =>
            navigate("/estore-products", { state: { category: "tshirt" } })
          }
        />
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
