import React from "react";
import ProductCard2 from "../main/ProductCard/ProductCard2";
import { products as allProducts } from "../../../../constants/products";
import { useNavigate } from "react-router-dom";

const Section1 = ({ head, data, path }) => {
  const navigate = useNavigate();
  const currentData = data?.length ? data : allProducts.slice(0, 10);

  return (
    <div className="w-full md:mt-20 mt-10 lg:px-26 md:px-10 flex flex-col gap-10 px-5">
      <div className="text-center flex flex-col gap-2">
        <h2 className="md:text-3xl text-lg font-bold">{head}</h2>
        <p className="md:text-base text-sm">
          Select a template to begin your customization journey.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 py-10">
        {currentData.map((d) => (
          <ProductCard2
            key={d.id || d.name}
            name={d.name}
            desc={d.desc}
            img={d.img}
            was={d.priceWas || d.oldPrice}
            now={d.priceNow || d.price}
            rating={d.rating}
            reviews={d.reviews}
            isDetail={true}
            isPrice={false}
            onClick={() =>
              navigate(`${path}/${d.slug}`, {
                state: { product: d },
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Section1;
