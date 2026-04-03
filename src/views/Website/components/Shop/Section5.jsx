import React from "react";
import ProductHeader from "../main/ProductHeader/ProductHeader";
// import ProductDesign2 from "../main/ProductDesign2/ProductDesign2";
import ProductCard from "../main/ProductCard/ProductCard";
import { products } from "../../../../constants/products";
import { Link } from "react-router-dom";

const Section5 = () => {
  const allProducts = products;
  const blogsPerPage = 4;
  var currentProp;
  if (allProducts.length > 4) {
    currentProp = allProducts.slice(0, blogsPerPage);
  } else {
    currentProp = allProducts;
  }
  return (
    <div className="md:mt-30 mt-20 flex flex-col gap-10">
      <div>
        <ProductHeader
          head="e-STORE"
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
              desc={d?.desc}
              img={d?.img}
              people={d?.people}
              was={d?.priceWas}
              now={d?.priceNow}
              text={d?.text}
              star={d?.stars}
              rating={d?.rating}
              isDetail={true}
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

export default Section5;
