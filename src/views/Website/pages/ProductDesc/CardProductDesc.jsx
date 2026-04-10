import React, { useEffect, useState } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import CardDescSec1 from "../../components/ProductDesc/CardDescSec1";
import CardDescSec2 from "../../components/ProductDesc/CardDescSec2";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import { useParams, useNavigate } from "react-router-dom";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import { businessCards } from "../../../../constants/products/digitalPrinting/businessCard";
import { cardPrintAds } from "../../../../constants/products/digitalPrinting/cardPrintAds";
import { signsBannersPosters } from "../../../../constants/products/digitalPrinting/signsBannersPosters";
import { promotionalProducts } from "../../../../constants/products/digitalPrinting/promotionalProducts";
import { stickersLabels } from "../../../../constants/products/digitalPrinting/stickersLabels";
import { packaging } from "../../../../constants/products/digitalPrinting/packaging";

const CardProductDesc = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // 🔍 Find product by slug
  const getProductWithCategory = (slug) => {
    // 1. Search in main digitalPrintingData (the deep categories)
    for (const mainKey in digitalPrintingData) {
      const main = digitalPrintingData[mainKey];
      for (const cat of main.categories) {
        const matched = cat.products.find((p) => p.slug === slug);
        if (matched) return { product: matched, category: cat.name };
      }
    }
    
    // 2. Search in the representative top-level arrays used by DigitalPrinting page swipers
    const allRepProducts = [
      ...businessCards,
      ...cardPrintAds,
      ...signsBannersPosters,
      ...promotionalProducts,
      ...stickersLabels,
      ...packaging
    ];
    
    const matchedRep = allRepProducts.find((p) => p.slug === slug);
    if (matchedRep) {
      return { product: matchedRep, category: matchedRep.category || "General" };
    }

    return { product: null, category: null };
  };

  // 🔄 Update product & related products whenever slug changes
  useEffect(() => {
    setLoading(true);
    const { product, category } = getProductWithCategory(slug);
    if (product) {
      setProduct(product);
      setCategory(category);

      // ✅ Related products from same category
      const related = Object.values(digitalPrintingData)
        .flatMap((main) =>
          main.categories.flatMap((cat) =>
            cat.products.map((p) => ({ ...p, category: cat.name })),
          ),
        )
        .filter((p) => p.category === category && p.slug !== product.slug)
        .slice(0, 5); // max 5 related products
      setRelatedProducts(related);

      const timer = setTimeout(() => {
        setLoading(false);
        window.scrollTo(0, 0);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setProduct(null);
      setCategory(null);
      setRelatedProducts([]);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BC202B]"></div>
      </div>
    );
  }

  if (!product)
    return <div className="p-10 text-red-500 text-center">Product Not Found</div>;

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb={`Digital Printing / Cards / ${product?.name}`} isBanner={false} />
      <CardDescSec1 product={product} />
      <CardDescSec2 img="/cardDesc12.png" />
      <ProductSwiper
        head="Related products"
        data={relatedProducts}
        isLink={true}
        onProductClick={(item) =>
          navigate(`/card-product-description/${item.slug}`, { replace: true })
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
