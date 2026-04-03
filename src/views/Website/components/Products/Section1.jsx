import React, { useState, useEffect } from "react";
import RedButton from "../main/Buttons/RedButton";
import ProductCard2 from "../main/ProductCard/ProductCard2";
import Filter from "./Filter";
import Cate from "./Cat";
import UpperNav from "./UpperNav";
import { apparelData } from "../../../../constants/apparelData";
import { useNavigate } from "react-router-dom";

const Section1 = ({ defaultMain = "tshirt", defaultSub = null }) => {
  const navigate = useNavigate();
  const [activeLayout, setActiveLayout] = useState("grid3");
  const [visibleProducts, setVisibleProducts] = useState(16);

  const [selectedMainCat, setSelectedMainCat] = useState(defaultMain);
  const initialSub =
    defaultSub || apparelData[defaultMain]?.categories[0]?.name || null;
  const [selectedSubCat, setSelectedSubCat] = useState(initialSub);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const layouts = [
    { id: "grid2", cols: 5 },
    { id: "grid3", cols: 4 },
    { id: "grid4", cols: 3 },
    { id: "list", cols: 2 },
  ];

  // Recalculate subCategories whenever main category changes
  const subCategories = apparelData[selectedMainCat]?.categories || [];

  // Top slider categories
  const topCategories = subCategories.map((cat, i) => ({
    name: cat.name,
    img: cat.img,
    key: i,
  }));

  // Sync filtered products whenever selectedSubCat changes
  useEffect(() => {
    const sub = subCategories.find((c) => c.name === selectedSubCat);
    if (sub) setFilteredProducts(sub.products);
    else setFilteredProducts(subCategories.flatMap((c) => c.products));
  }, [selectedSubCat, selectedMainCat]);

  // Left filter main categories
  const mainCategories = Object.keys(apparelData).map((key) => ({
    key,
    title: apparelData[key].title,
    subs: apparelData[key].categories.map((c) => c.name),
  }));

  const handleLoadMore = () => setVisibleProducts((prev) => prev + 16);

  // Handle main category click
  const handleMainCategoryClick = (mainKey) => {
    setSelectedMainCat(mainKey);
    const firstSub = apparelData[mainKey]?.categories[0]?.name || null;
    setSelectedSubCat(firstSub); // automatically select first subcategory
  };

  // Handle subcategory click from sidebar
  const handleSubCategoryClick = (subName, mainKey) => {
    setSelectedMainCat(mainKey);
    setSelectedSubCat(subName);
  };

  // Handle top slider click
  const handleTopSliderClick = (subName) => {
    const existsInCurrentMain = subCategories.find((c) => c.name === subName);
    if (existsInCurrentMain) {
      setSelectedSubCat(subName);
    } else {
      const mainKey = Object.keys(apparelData).find((key) =>
        apparelData[key].categories.some((c) => c.name === subName),
      );
      if (mainKey) {
        setSelectedMainCat(mainKey);
        setSelectedSubCat(subName);
      }
    }
  };

  return (
    <div className="flex md:flex-row flex-col">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="w-full h-auto">
        {/* Top slider */}
        <div className="w-full border-b border-gray-200 flex justify-center items-center md:px-10 px-5 py-8 lg:pr-26 md:pr-10 pr-5">
          <Cate
            Cat={topCategories}
            setSelectedTopCat={handleTopSliderClick}
            selectedTopCat={selectedSubCat}
          />
        </div>

        {/* Layout & Products */}
        <div className="flex flex-col gap-10">
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

          <div className="md:px-10 px-5 py-5 border-gray-100 lg:pr-26 md:pr-10 cursor-pointer">
            <div
              className={`grid gap-4 ${
                activeLayout === "grid2"
                  ? "grid-cols-2 md:grid-cols-5"
                  : activeLayout === "grid3"
                    ? "grid-cols-2 md:grid-cols-4"
                    : activeLayout === "grid4"
                      ? "grid-cols-2 md:grid-cols-3"
                      : "grid-cols-1 md:grid-cols-2"
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
                  isPrice={false}
                  onClick={() =>
                    navigate(`/apparel-product-description/${d.slug}`)
                  }
                />
              ))}
            </div>
          </div>

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

export default Section1;
