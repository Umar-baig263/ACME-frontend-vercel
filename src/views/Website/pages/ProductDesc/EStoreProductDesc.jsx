import React, { useState, useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import CardDescSec2 from "../../components/ProductDesc/CardDescSec2";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import EstoreDesc from "../../components/ProductDesc/EstoreDesc";
import Section1 from "../../components/EStore/Section1";
import { products } from "../../../../constants/products";
import { apparelData } from "../../../../constants/apparelData";
import { stampData } from "../../../../constants/stampData";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import { corporateGiftingData } from "../../../../constants/corporateGiftingData";
import { useParams, useNavigate } from "react-router-dom";

const EStoreProductDesc = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const decodedSlug = decodeURIComponent(slug);

    // Master search across ALL data sources
    const flattenAndFind = () => {
      // 1. Basic products
      let found = (products || []).find((p) => p.slug === decodedSlug);
      if (found) return { product: found, type: "shop" };

      // 2. Apparel
      for (const mainKey in apparelData) {
        for (const cat of apparelData[mainKey].categories) {
          found = cat.products.find((p) => p.slug === decodedSlug);
          if (found) return { product: found, type: "apparel" };
        }
      }

      // 3. Stamps
      for (const mainKey in stampData) {
        for (const cat of stampData[mainKey].categories) {
          found = cat.products.find((p) => p.slug === decodedSlug);
          if (found) return { product: found, type: "stamp" };
        }
      }

      // 4. Digital Printing / Cards
      for (const mainKey in digitalPrintingData) {
        for (const cat of digitalPrintingData[mainKey].categories) {
          found = cat.products.find((p) => p.slug === decodedSlug);
          if (found) return { product: found, type: "card" };
        }
      }

      // 5. Corporate Gifting
      for (const mainKey in corporateGiftingData) {
        for (const cat of corporateGiftingData[mainKey].categories) {
          found = cat.products.find((p) => p.slug === decodedSlug);
          if (found) return { product: found, type: "corporate" };
        }
      }

      return null;
    };

    const result = flattenAndFind();

    // SMART REDIRECT: If we land on /shop/ but it's a specialized product, redirect with replace:true
    if (
      result &&
      result.type !== "shop" &&
      window.location.pathname.startsWith("/shop/")
    ) {
      const routes = {
        apparel: "/apparel-product-description",
        stamp: "/stamp-description",
        card: "/card-product-description",
        corporate: "/corporate-product-description",
      };
      navigate(`${routes[result.type]}/${decodedSlug}`, { replace: true });
      return;
    }

    setProduct(result ? result.product : null);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BC202B]"></div>
      </div>
    );
  }

  return (
    <div className="md:pt-30 pt-20">
      <Navbar
        breadcrumb={`Product / ${product?.name || slug}`}
        isBanner={false}
      />
      <EstoreDesc product={product} />
      <CardDescSec2 img="/estoredesct23.png" />
      <Section1 head="Related Product" isLink={true} data={products} />
      <ProductSwiper
        head="Your recently viewed items"
        data={products}
        isLink={true}
        onProductClick={(item) =>
          navigate(`/shop/${item.slug}`, { replace: true })
        }
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
