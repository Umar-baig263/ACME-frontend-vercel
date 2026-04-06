import React, { useState, useEffect } from "react";
import RedButton from "../main/Buttons/RedButton";
import ProductCard2 from "../main/ProductCard/ProductCard2";
import Filter from "./Filter";
import Cate from "./Cat";
import UpperNav from "./UpperNav";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import { useNavigate, useSearchParams } from "react-router-dom";

const CardSec1 = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const defaultMain = searchParams.get("main") || "business";
  const defaultSub = searchParams.get("sub") || null;

  const [activeLayout, setActiveLayout] = useState("grid3");
  const [visibleProducts, setVisibleProducts] = useState(16);

  const [selectedMainCat, setSelectedMainCat] = useState(defaultMain);

  const initialSub =
    defaultSub || digitalPrintingData[defaultMain]?.categories[0]?.name || null;

  const [selectedSubCat, setSelectedSubCat] = useState(initialSub);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const layouts = [
    { id: "grid2", cols: 5 },
    { id: "grid3", cols: 4 },
    { id: "grid4", cols: 3 },
    { id: "list", cols: 2 },
  ];

  // Current Main Category Subcategories
  const subCategories = digitalPrintingData[selectedMainCat]?.categories || [];

  // Top Slider Categories
  const topCategories = subCategories.map((cat, i) => ({
    name: cat.name,
    img: cat.img,
    key: i,
  }));

  // Sync Products on Subcategory Change
  useEffect(() => {
    const sub = subCategories.find((c) => c.name === selectedSubCat);

    if (sub) {
      setFilteredProducts(sub.products);
    } else {
      setFilteredProducts(subCategories.flatMap((c) => c.products));
    }
  }, [selectedSubCat, selectedMainCat]);

  // Left Sidebar Main Categories
  const mainCategories = Object.keys(digitalPrintingData).map((key) => ({
    key,
    title: digitalPrintingData[key].title,
    subs: digitalPrintingData[key].categories.map((c) => c.name),
  }));

  const handleLoadMore = () => setVisibleProducts((prev) => prev + 16);

  // LEFT → Main Category Click
  const handleMainCategoryClick = (mainKey) => {
    setSelectedMainCat(mainKey);
    const firstSub = digitalPrintingData[mainKey]?.categories[0]?.name || null;
    setSelectedSubCat(firstSub);
  };

  // LEFT → Subcategory Click
  const handleSubCategoryClick = (subName, mainKey) => {
    setSelectedMainCat(mainKey);
    setSelectedSubCat(subName);
  };

  // TOP SLIDER → Subcategory click
  const handleTopSliderClick = (subName) => {
    const existsInCurrentMain = subCategories.find((c) => c.name === subName);

    if (existsInCurrentMain) {
      setSelectedSubCat(subName);
    } else {
      const mainKey = Object.keys(digitalPrintingData).find((key) =>
        digitalPrintingData[key].categories.some((c) => c.name === subName),
      );

      if (mainKey) {
        setSelectedMainCat(mainKey);
        setSelectedSubCat(subName);
      }
    }
  };

  return (
    <div className="flex md:flex-row flex-col w-full">
      {/* SIDEBAR */}
      <div className="md:w-[30%] px-5 py-10 border-r border-gray-200 lg:ml-26 md:ml-10 ml-5">
        <Filter
          filter={mainCategories.map((cat) => ({
            key: cat.key,
            name: cat.title,
            sub: cat.subs.map((subName) => ({ name: subName })),
          }))}
          onMainClick={handleMainCategoryClick}
          onSubClick={handleSubCategoryClick}
          selectedMain={selectedMainCat}
          selectedSub={selectedSubCat}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full h-auto">
        {/* TOP SLIDER */}
        <div className="w-full border-b border-gray-200 flex justify-center items-center md:px-10 px-5 py-8 lg:pr-26 md:pr-10 pr-5 overflow-x-auto">
          <Cate
            Cat={topCategories}
            setSelectedTopCat={handleTopSliderClick}
            selectedTopCat={selectedSubCat}
          />
        </div>

        <div className="flex flex-col gap-10">
          {/* LAYOUT OPTIONS */}
          <div className="border-b md:px-10 px-5 py-4 border-gray-100 lg:pr-26 md:pr-10">
            <UpperNav
              layouts={layouts}
              activeLayout={activeLayout}
              setActiveLayout={setActiveLayout}
              visibleProducts={Math.min(
                visibleProducts,
                filteredProducts.length,
              )}
              totalProducts={filteredProducts.length}
            />
          </div>

          {/* PRODUCTS GRID */}
          <div className="md:px-10 px-5 py-5 border-gray-100 lg:pr-26 md:pr-10 cursor-pointer">
            <div
              className={`grid gap-4 w-full ${
                activeLayout === "grid2"
                  ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-5"
                  : activeLayout === "grid3"
                    ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
                    : activeLayout === "grid4"
                      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
              }`}
            >
              {filteredProducts.slice(0, visibleProducts).map((d) => (
                <ProductCard2
                  key={d.id || d.name}
                  name={d.name}
                  desc={d.desc}
                  img={d.img}
                  people={d.people}
                  was={d.priceWas}
                  now={d.priceNow}
                  text={d.text}
                  star={d.stars}
                  rating={d.rating}
                  isDetail={true}
                  isPrice={true}
                  price={d.price || "$21.99"}
                  onClick={() =>
                    navigate(`/card-product-description/${d.slug}`)
                  }
                />
              ))}
            </div>
          </div>

          {/* LOAD MORE */}
          {visibleProducts < filteredProducts.length && (
            <div className="w-full flex justify-center items-center">
              <RedButton text="Load More" onClick={handleLoadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSec1;
