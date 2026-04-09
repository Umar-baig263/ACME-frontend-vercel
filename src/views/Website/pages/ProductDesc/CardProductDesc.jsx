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

const CardProductDesc = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // 🔍 Find product by slug
  const getProductWithCategory = (slug) => {
    for (const mainKey in digitalPrintingData) {
      const main = digitalPrintingData[mainKey];
      for (const cat of main.categories) {
        const matched = cat.products.find((p) => p.slug === slug);
        if (matched) return { product: matched, category: cat.name };
      }
    }
    return { product: null, category: null };
  };

  // 🔄 Update product & related products whenever slug changes
  useEffect(() => {
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
    } else {
      setProduct(null);
      setCategory(null);
      setRelatedProducts([]);
    }
  }, [slug]);

  if (!product)
    return <div className="p-10 text-red-500">Product Not Found</div>;

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
