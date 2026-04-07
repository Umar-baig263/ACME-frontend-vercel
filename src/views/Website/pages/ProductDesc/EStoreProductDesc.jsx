import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import CardDescSec2 from "../../components/ProductDesc/CardDescSec2";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import EstoreDesc from "../../components/ProductDesc/EstoreDesc";
import Section1 from "../../components/EStore/Section1";
// import ProductSlider from "../../components/main/ProductSlider/ProductSlider";
import { products } from "../../../../constants/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const EStoreProductDesc = () => {
  const { category, slug } = useParams();
  const categoryStr = category || "Product";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const product = products.find((p) => p.slug === slug);
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb={`${categoryStr} / ${slug}`} isBanner={false} />
      <EstoreDesc />
      <CardDescSec2 img="/estoredesct23.png" />
      <Section1
        head="Related Product"
        // desc="."
        isLink={true}
        data={products}
      />
      <ProductSwiper
        head="Your recently viewed items"
        // desc="Mess-free, self-inking stamps for clean, reliable impressions — every time."
        data={products}
        isLink={true}
      />
      <ReviewSec isSearch={true} />
      <Banner
        color="text-white"
        isred={false}
        heading="Let Design It For You"
        subheading="Design your stamp in minutes — choose style, upload logo or text, and order easily."
        btnLink="/stamp"
        width="w-1/2"
        btntext="Contact Us"
        img="/cardDescBanner.png"
      />
      <FaqSection />
    </div>
  );
};

export default EStoreProductDesc;
