import React, { useState, useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import StampDesc from "../../components/ProductDesc/StampDesc";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import { useParams } from "react-router-dom";
import { stampData } from "../../../../constants/stampData";
import { trodatprinty } from "../../../../constants/products/stamp/trodatprinty";
import { rubberstamps } from "../../../../constants/products/stamp/rubberstamp";
import { padsandinks } from "../../../../constants/products/stamp/padsandinks";
import { stencils } from "../../../../constants/products/stamp/stencils";
import { colop } from "../../../../constants/products/stamp/colop";
import { embossingseals } from "../../../../constants/products/stamp/embossingseals";

const StampProductDesc = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  // Flatten all products
  const allProducts = Object.values(stampData)
    .flatMap((main) => main.categories)
    .flatMap((sub) => sub.products);

  const allRepProducts = [
    ...trodatprinty,
    ...rubberstamps,
    ...padsandinks,
    ...stencils,
    ...colop,
    ...embossingseals,
  ];

  useEffect(() => {
    setLoading(true);
    const found =
      allProducts.find((p) => p.slug === slug) ||
      allRepProducts.find((p) => p.slug === slug);

    setProduct(found);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BC202B]"></div>
      </div>
    );
  }

  if (!product)
    return (
      <div className="p-10 text-center text-red-500">Product not found</div>
    );
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb={`Stamp / Products / ${product.name}`} isBanner={false} />
      <StampDesc product={product} />
      <Banner
        color="text-white"
        isred={false}
        heading="Ready to Bring Your Brand to Life?"
        subheading="Let’s create something impactful together."
        btnLink="/stamp"
        width={"w-1/2"}
        btntext="Contact Us"
        img="/stampDescBanner.png"
      />
      <ReviewSec isSearch={true} />
      <FaqSection />
    </div>
  );
};

export default StampProductDesc;
