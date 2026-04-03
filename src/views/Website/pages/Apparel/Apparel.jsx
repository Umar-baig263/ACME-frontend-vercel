import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import CategorySwiper from "../../components/main/CategorySwiper/CategorySwiper";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
// import Section1 from "../../components/Apparel/Section1";
import LatestNews from "../../components/main/LastestNews/LastestNews";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import NewsCard from "../DigitalPrintingCategories/NewsCard";
import { apparel } from "../../../../constants/products/apparel";
import { useNavigate } from "react-router-dom";

const Apparel = () => {
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
        <Navbar breadcrumb="apparel" isBanner={false} />
        <HeaderBanner
          head="Your Everyday Wardrobe Starts Here"
          isButton={true}
          desc="T-shirts, shirts, and essentials for every mood — shop all in one place."
          btnLink="/stamp"
          btnText="Customize your stamp"
          imgUrl="/apparel.png"
        />
        <CategorySwiper data={Cat} />
        <ProductSwiper
          head="T-Shirt"
          desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          data={apparel["T-Shirts"]}
          onProductClick={() => navigate(`/apparel-products?main=tshirt`)}
        />
        <ProductSwiper
          head="Jacket"
          desc="Find inspiration in these thoughtfully curated product collections."
          data={apparel["Jackets"]}
          onProductClick={() => navigate(`/apparel-products?main=jacket`)}
        />
        <Banner
          color="text-white"
          heading="HELP WHEN YOU NEED IT, EVERY STEP OF THE WAY."
          subheading="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          isred={false}
          img="/apparelBanner.png"
          width="md:w-1/2 w-full"
          btntext="Shop Now"
          btnLink="/"
        />
        <ProductSwiper
          head="Paint & Short"
          desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          data={apparel["Paint"]}
          onProductClick={() => navigate(`/apparel-products?main=paint`)}
        />
        <ProductSwiper
          head="Cap"
          desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          data={apparel["Caps"]}
          onProductClick={() => navigate(`/apparel-products?main=cap`)}
        />
        <ProductSwiper
          head="Shirt"
          desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
          data={apparel["Shirts"]}
          onProductClick={() => navigate(`/apparel-products?main=shirt`)}
        />
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
