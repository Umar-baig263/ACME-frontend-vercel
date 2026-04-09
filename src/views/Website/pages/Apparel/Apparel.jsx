import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import CategorySwiper from "../../components/main/CategorySwiper/CategorySwiper";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
// import Section1 from "../../components/Apparel/Section1";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import { useNavigate, useLocation } from "react-router-dom";
import Filter from "../../components/Products/Filter";
import { apparelData } from "../../../../constants/apparelData";
import { useState } from "react";
import NewsCard from "../DigitalPrintingCategories/NewsCard";

const Apparel = () => {
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
      key: "paint",
      name: "Paint & Short",
      img: "dpCat3.png",
    },
    {
      key: "cap",
      name: "Cap",
      img: "dpCat4.png",
    },
    {
      key: "shirt",
      name: "Shirt",
      img: "dpCat5.png",
    },
  ];

  const [activeMain, setActiveMain] = useState("");
  const [activeSub, setActiveSub] = useState("");
  const [selectedSpecificProducts, setSelectedSpecificProducts] = useState([]);

  const mainCategories = Object.keys(apparelData).map((key) => ({
    key,
    title: apparelData[key].title,
    subs: apparelData[key].categories.map((c) => ({
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
      const subCatObj = apparelData[mainKey]?.categories.find(
        (c) => c.name === activeSub,
      );
      return subCatObj ? subCatObj.products : fallbackData;
    }
    return fallbackData;
  };

  // Import product arrays from constants (Note: Apparel component used apparel named import previously)
  // Since we're using apparelData for mapping, we can derive fallback data from it.
  const tshirts = apparelData.tshirt.categories.flatMap((c) => c.products);
  const jackets = apparelData.jacket.categories.flatMap((c) => c.products);
  const paints = apparelData.paint.categories.flatMap((c) => c.products);
  const caps = apparelData.cap.categories.flatMap((c) => c.products);
  const shirts = apparelData.shirt.categories.flatMap((c) => c.products);

  const newsItems = [
    {
      id: 1,
      image: "/latest-img1.png",
      title: "Importance of Custom Stamps for Your Business",
      excerpt:
        "Custom stamps are more than just office tools — they're a mark of identity and efficiency.",
      link: "#",
    },
    {
      id: 2,
      image: "/latest-img2.png",
      title: "Importance of Custom Stamps for Your Business",
      excerpt:
        "Custom stamps are more than just office tools — they're a mark of identity and efficiency.",
      link: "#",
    },
  ];
  return (
    <div className="md:pt-30 pt-20 md:pb-20">
      <div className=" md:pb-20">
        <Navbar breadcrumb="Apparel" isBanner={false} />
        <HeaderBanner
          head="Your Everyday Wardrobe Starts Here"
          isButton={true}
          desc="T-shirts, shirts, and essentials for every mood — shop all in one place."
          btnLink="/apparel-customize"
          btnText="Customize your apparel"
          imgUrl="/apparel.png"
        />

        <div className="max-w-[1500px] mx-auto flex md:flex-row flex-col w-full pt-10 px-4 md:px-8">
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

            <div id="section-tshirt">
              <ProductSwiper
                head="T-Shirt"
                desc="High-quality custom t-shirts for every occasion — choose your style and make a statement."
                data={getFilteredProducts("tshirt", tshirts)}
                onProductClick={() => navigate(`/apparel-products?main=tshirt`)}
                paddingClass="lg:px-10 md:px-5 px-5"
              />
            </div>

            <div id="section-jacket">
              <ProductSwiper
                head="Jacket"
                desc="Find inspiration in these thoughtfully curated product collections — stay warm and stylish."
                data={getFilteredProducts("jacket", jackets)}
                onProductClick={() => navigate(`/apparel-products?main=jacket`)}
                paddingClass="lg:px-10 md:px-5 px-5"
              />
            </div>

            {!activeMain && (
              <div className="mt-10 lg:pl-10">
                <Banner
                  color="text-white"
                  heading="HELP WHEN YOU NEED IT, EVERY STEP OF THE WAY."
                  subheading="T-shirts, shirts, and essentials for every mood — shop all in one place."
                  isred={false}
                  img="/apparelBanner.png"
                  width="w-full"
                  btntext="Shop Now"
                  btnLink="/"
                />
              </div>
            )}

            <div id="section-paint">
              <ProductSwiper
                head="Paint & Short"
                desc="Custom short-sleeve apparel designed for comfort and durability in any setting."
                data={getFilteredProducts("paint", paints)}
                onProductClick={() => navigate(`/apparel-products?main=paint`)}
                paddingClass="lg:px-10 md:px-5 px-5"
              />
            </div>

            <div id="section-cap">
              <ProductSwiper
                head="Cap"
                desc="From baseball caps to trucker hats, our high-quality headwear is perfect for any brand."
                data={getFilteredProducts("cap", caps)}
                onProductClick={() => navigate(`/apparel-products?main=cap`)}
                paddingClass="lg:px-10 md:px-5 px-5"
              />
            </div>

            <div id="section-shirt">
              <ProductSwiper
                head="Shirt"
                desc="Formal, slim fit, or linen — choose the perfect custom shirt for your professional wardrobe."
                data={getFilteredProducts("shirt", shirts)}
                onProductClick={() => navigate(`/apparel-products?main=shirt`)}
                paddingClass="lg:px-10 md:px-5 px-5"
              />
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-gray-50 pb-16 px-4 sm:px-8 flex justify-center">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-medium tracking-widest uppercase mb-12">
            Latest News
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </div>
  );
};

export default Apparel;
