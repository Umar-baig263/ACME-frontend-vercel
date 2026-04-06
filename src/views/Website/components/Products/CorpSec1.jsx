import React, { useState, useEffect } from "react";
import RedButton from "../main/Buttons/RedButton";
import ProductCard1 from "../main/ProductCard/ProductCard1";
import ProductCard2 from "../main/ProductCard/ProductCard2";
import Filter from "../Products/Filter";
import UpperNav from "../Products/UpperNav";
import { corporateGiftingData } from "../../../../constants/corporateGiftingData";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CorpSec1 = ({ defaultMain = "gifts", defaultSub = null }) => {
  const navigate = useNavigate();

  const [activeLayout, setActiveLayout] = useState("grid3");
  const [visibleProducts, setVisibleProducts] = useState(16);

  // Selected categories
  const [selectedMain, setSelectedMain] = useState(defaultMain);
  const initialSub =
    defaultSub ||
    corporateGiftingData[defaultMain]?.categories[0]?.name ||
    null;
  const [selectedSub, setSelectedSub] = useState(initialSub);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSpecificProducts, setSelectedSpecificProducts] = useState([]);

  const layouts = [
    { id: "grid2", cols: 5 },
    { id: "grid3", cols: 4 },
    { id: "grid4", cols: 3 },
    { id: "list", cols: 2 },
  ];

  const mainCategories = Object.keys(corporateGiftingData).map((key) => ({
    key,
    name: corporateGiftingData[key].title,
    subs: corporateGiftingData[key].categories.map((c) => ({
      name: c.name,
      products: c.products,
    })),
  }));

  const subCategories = corporateGiftingData[selectedMain]?.categories || [];

  // Update products
  useEffect(() => {
    const sub = subCategories.find((s) => s.name === selectedSub);
    if (sub) setFilteredProducts(sub.products);
    else setFilteredProducts(subCategories.flatMap((s) => s.products));
  }, [selectedMain, selectedSub]);

  // Handle main category click
  const handleMainClick = (mainKey) => {
    setSelectedMain(mainKey);
    const firstSub = corporateGiftingData[mainKey]?.categories[0]?.name;
    setSelectedSub(firstSub);
    setSelectedSpecificProducts([]);
  };

  // Handle sub click
  const handleSubClick = (subName, mainKey) => {
    setSelectedMain(mainKey);
    setSelectedSub(subName);
    setSelectedSpecificProducts([]);
  };

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 16);
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const urlMain = params.get("main");
  const urlSub = params.get("sub");

  useEffect(() => {
    if (urlMain) setSelectedMain(urlMain);
    if (urlSub) setSelectedSub(urlSub);
  }, [urlMain, urlSub]);

  const handleProductClickFromSidebar = (product) => {
    setSelectedSpecificProducts((prev) => {
      const isSelected = prev.some((p) => p.id === product.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const displayProducts =
    selectedSpecificProducts.length > 0
      ? selectedSpecificProducts
      : filteredProducts;

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[30%] px-5 py-10 border-r border-gray-200 lg:ml-26 md:ml-10 ml-5">
        <Filter
          filter={mainCategories.map((cat) => ({
            key: cat.key,
            name: cat.name,
            sub: cat.subs.map((subObj) => ({
              name: subObj.name,
              products: subObj.products,
            })),
          }))}
          selectedMain={selectedMain}
          selectedSub={selectedSub}
          onMainClick={handleMainClick}
          onSubClick={handleSubClick}
          onProductClick={handleProductClickFromSidebar}
          selectedProducts={selectedSpecificProducts}
        />
      </div>

      {/* Right Side */}
      <div className="w-full">
        {/* Header */}
        <div className="border-b flex justify-between items-center md:px-10 px-5 py-10 lg:pr-26 md:pr-10">
          <div className="flex flex-col gap-2 w-3/4">
            <div className="text-3xl font-bold">
              {corporateGiftingData[selectedMain]?.title}
            </div>

            <div className="text-lg">
              {corporateGiftingData[selectedMain]?.description}
            </div>

            <div className="text-lg">
              Over {displayProducts.length}{" "}
              <span className="text-yellow-500">★★★★★</span> reviews
            </div>

            <div className="flex gap-2 text-sm">
              <div className="p-2 rounded-md bg-gray-200 cursor-pointer">
                Upload Design
              </div>
              <div className="p-2 rounded-md bg-gray-200 cursor-pointer">
                Record
              </div>
            </div>
          </div>
        </div>

        {/* Layout nav */}
        <div className="border-b md:px-10 px-5 py-4 border-gray-100">
          <UpperNav
            layouts={layouts}
            activeLayout={activeLayout}
            setActiveLayout={setActiveLayout}
            visibleProducts={Math.min(visibleProducts, displayProducts.length)}
            totalProducts={displayProducts.length}
          />
        </div>

        {/* Product grid */}
        <div className="md:px-10 px-5 py-5 lg:pr-26 md:pr-10 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="font-bold text-3xl">SHOP BY</div>
            <div className="text-lg">
              Mess-free, reliable corporate products — every time.
            </div>
          </div>

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
            {displayProducts.slice(0, visibleProducts).map((p, i) => (
              <ProductCard2
                key={p.id || i}
                name={p.name}
                desc={p.desc}
                img={p.img}
                star={p.stars}
                rating={p.rating}
                people={p.people}
                isDetail={true}
                isPrice={false}
                onClick={() =>
                  navigate(`/corporate-product-description/${p.slug}`)
                }
              />
            ))}
          </div>
        </div>

        {visibleProducts < displayProducts.length && (
          <div className="w-full flex justify-center items-center mb-10">
            <RedButton text="Load More" onClick={handleLoadMore} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CorpSec1;
