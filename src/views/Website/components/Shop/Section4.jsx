import React from "react";
import ProductHeader from "../main/ProductHeader/ProductHeader";
// import ProductDesign1 from "../main/ProductDesign1/ProductDesign1";
import ProductCard from "../main/ProductCard/ProductCard";
import { products } from "../../../../constants/products";
import { Link } from "react-router-dom";

const Section4 = () => {
  const allProducts = products;
  const blogsPerPage = 8;
  var currentProp;
  if (allProducts.length > 8) {
    currentProp = allProducts.slice(0, blogsPerPage);
  } else {
    currentProp = allProducts;
  }
  return (
    <div className="md:mt-30 mt-20 flex flex-col gap-10">
      <div>
        <ProductHeader
          head="Apparel"
          subHead="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-26 md:px-10 px-5">
        {allProducts.map((d) => (
          <Link to={`/shop/${d.slug}`}>
            <ProductCard
              key={d.id}
              id={d.id}
              name={d?.name}
              img={d?.img}
              desc={d?.desc}
              isDetail={false}
              price={d?.price}
              isPrice={false}
              category="shop"
              slug={d.slug}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section4;
