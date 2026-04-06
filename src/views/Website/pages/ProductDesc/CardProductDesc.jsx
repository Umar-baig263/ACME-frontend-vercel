import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/main/Navbar/Navbar";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import CardDescSec1 from "../../components/ProductDesc/CardDescSec1";
import CardDescSec2 from "../../components/ProductDesc/CardDescSec2";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import { useParams, useNavigate } from "react-router-dom";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";

const CardProductDesc = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();

  let product = state?.product || state;

  if (!product || !product.id) {
      // Fallback to searching all digital printing products by slug
      const allProducts = Object.values(digitalPrintingData)
          .flatMap((main) => main.categories || [])
          .flatMap((sub) => sub.products || []);
      product = allProducts.find((p) => p.slug === slug) || {};
  }
  
  const relatedProducts = digitalPrintingData?.business?.categories[0]?.products || [];

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb={`Card Product / ${product?.name || 'Details'}`} isBanner={false} />
      <CardDescSec1 product={product} />
      <CardDescSec2 img="/cardDesc12.png" />
      <ProductSwiper
        head="Related products"
        data={relatedProducts}
        isLink={true}
        onProductClick={(item) =>
          navigate(`/card-product-description/${item.slug}`)
        }
      />
      <ReviewSec />
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

export default CardProductDesc;
