import React, { useEffect, useMemo, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const allProducts = useMemo(
    () =>
      Object.values(apparelData)
        .flatMap((mainCat) => mainCat.categories)
        .flatMap((subCat) => subCat.products),
    [],
  );

  const product = useMemo(
    () => allProducts.find((p) => p.slug === slug) || null,
    [allProducts, slug],
  );

  useEffect(() => {
    setLoading(true);
    if (product) {
      // Update recently viewed
      let recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      recent = recent.filter((s) => s !== slug);
      recent.unshift(slug);
      if (recent.length > 10) recent = recent.slice(0, 10);
      localStorage.setItem("recentlyViewed", JSON.stringify(recent));
    }

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug, product]);

  const handleProductClick = (clickedProduct) => {
    // Navigate to same route but with new slug
    navigate(`/apparel-product-description/${clickedProduct.slug}`, { replace: true });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BC202B]"></div>
      </div>
    );
  }

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
