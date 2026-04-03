import React from "react";
import ProductCard1 from "../main/ProductCard/ProductCard1";
import { products as allProducts } from "../../../../constants/products";

const Section1 = ({ head, data }) => {
  const currentData = data?.length ? data : allProducts.slice(0, 10);

  return (
    <div className="w-full md:mt-20 mt-10 lg:px-26 md:px-10 flex flex-col gap-10 px-5">
      <div className="text-center flex flex-col gap-2">
        <h2 className="md:text-3xl text-lg font-bold">{head}</h2>
        <p className="md:text-base text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {currentData.map((d) => (
          <ProductCard1
            key={d.id}
            id={d.id}
            name={d.name}
            img={d.img}
            desc={d.desc}
            price={Number(d.price)}
            isPrice={true} // Show price
            isDetail={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Section1;
