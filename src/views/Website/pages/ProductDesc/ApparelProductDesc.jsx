import React, { useEffect, useState } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import ProductSwiper from "../../components/main/ProductSwiper/ProductSwiper";
import ApparelDescSec from "../../components/ProductDesc/ApparelDescSec";
import { apparelData } from "../../../../constants/apparelData";
import { useParams, useNavigate } from "react-router-dom";

const ApparelProductDesc = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Compute allProducts synchronously to prevent any "Product not found" flash
  const allProducts = Object.values(apparelData)
    .flatMap((mainCat) => mainCat.categories)
    .flatMap((subCat) => subCat.products);

  const product = allProducts.find((p) => p.slug === slug);

  useEffect(() => {
    if (product) {
      let recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      recent = recent.filter((s) => s !== product.slug);
      recent.unshift(product.slug);
      if (recent.length > 10) recent = recent.slice(0, 10);
      localStorage.setItem("recentlyViewed", JSON.stringify(recent));
      window.scrollTo(0, 0); // scroll to top
    }
  }, [product]);

  const handleProductClick = (clickedProduct) => {
    // Navigate to same route but with new slug
    navigate(`/apparel-product-description/${clickedProduct.slug}`);
  };

  if (!product) return <p className="p-10 text-center">Product not found!</p>;

  const relatedProducts = allProducts
    .filter(
      (p) => p.slug !== product.slug && p.subCategory === product.subCategory,
    )
    .slice(0, 6);

  const recentlyViewed = (
    JSON.parse(localStorage.getItem("recentlyViewed")) || []
  )
    .filter((s) => s !== product.slug)
    .map((s) => allProducts.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb={`Apparel / Products / ${product.name}`} isBanner={false} />
      <ApparelDescSec product={product} />

      <ProductSwiper
        head="Related products"
        data={relatedProducts}
        isLink={true}
        onProductClick={handleProductClick}
      />
      <ProductSwiper
        head="Frequently bought together with this product"
        data={relatedProducts}
        isLink={true}
        onProductClick={handleProductClick}
      />
      {recentlyViewed.length > 0 && (
        <ProductSwiper
          head="Your recently viewed items"
          data={recentlyViewed}
          isLink={true}
          onProductClick={handleProductClick}
        />
      )}

      <ReviewSec isSearch={true} />
      <FaqSection />
    </div>
  );
};

export default ApparelProductDesc;
