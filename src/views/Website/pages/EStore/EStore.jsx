import React from "react";
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
import { useNavigate } from "react-router-dom";

const EStore = () => {
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
        head="Shop ACME’s exclusive collection of branded merchandise.   "
        isButton={true}
        // desc="From business cards to banners — we deliver vibrant, sharp, and reliable prints."
        btnLink="/stamp"
        btnText="Shop Now"
        imgUrl="/estore.png"
      />
      <CategorySwiper data={Cat} />
      <Section1
        head="T-Shirt"
        desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={tshirt}
        onClick={() =>
          navigate("/estore-products", { state: { category: "tshirt" } })
        }
      />
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
