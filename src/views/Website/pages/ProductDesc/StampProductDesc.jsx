import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import StampDesc from "../../components/ProductDesc/StampDesc";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import { useParams } from "react-router-dom";
import { stampData } from "../../../../constants/stampData";

const StampProductDesc = () => {
  const { slug } = useParams();

  // Flatten all products
  const allProducts = Object.values(stampData)
    .flatMap((main) => main.categories)
    .flatMap((sub) => sub.products);

  const product = allProducts.find((p) => p.slug === slug);

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
