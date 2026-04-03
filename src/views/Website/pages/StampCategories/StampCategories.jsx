import React, { useState, useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import ProductCard4 from "../../components/main/ProductCard/ProductCard4";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { stampData } from "../../../../constants/stampData";
import { useSearchParams } from "react-router-dom";

const StampCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

  const initMain = searchParams.get("main") || "trodat";
  const initSubParam = searchParams.get("sub");
  const initSub = initSubParam !== null && initSubParam !== "[object Object]" && !isNaN(Number(initSubParam)) ? Number(initSubParam) : 0;

  const [activeMain, setActiveMain] = useState(initMain);
  const [openSubcategories, setOpenSubcategories] = useState({ [initMain]: initSub });
  const [openMain, setOpenMain] = useState({ [initMain]: true });
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Sync if URL params change
  useEffect(() => {
    const main = searchParams.get("main") || "trodat";
    const subP = searchParams.get("sub");
    const sub = subP !== null && subP !== "[object Object]" && !isNaN(Number(subP)) ? Number(subP) : 0;

    setActiveMain(main);
    setOpenMain((prev) => ({ ...prev, [main]: true }));
    setOpenSubcategories((prev) => ({ ...prev, [main]: sub }));
  }, [searchParams]);

  const current = stampData[activeMain];
  const activeIndex = openSubcategories[activeMain] ?? 0;

  // 🔎 Search across all categories & products
  const searchResults = [];

  if (searchQuery.trim() !== "") {
    current?.categories.forEach((cat, i) => {
      const matchSub = cat.name.toLowerCase().includes(searchQuery);

      // If subcategory matches → show all products
      if (matchSub) {
        searchResults.push(...cat.products);
      }

      // Otherwise search inside each product
      cat.products.forEach((p) => {
        if (p.name.toLowerCase().includes(searchQuery)) {
          searchResults.push(p);
        }
      });
    });
  }

  // Filter products based on selection
  const filteredProducts =
    searchQuery.trim() !== ""
      ? searchResults // 🔎 if searching → show search results
      : current?.categories[activeIndex]?.products.filter(
          (p) =>
            selectedProducts.length === 0 || selectedProducts.includes(p.id),
        ) || [];

  // Toggle subcategory
  const handleToggle = (mainKey, index) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [mainKey]: prev[mainKey] === index ? null : index,
    }));
  };

  // Toggle main category dropdown
  const handleMainToggle = (key) => {
    setOpenMain((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setActiveMain(key);
  };

  // ✅ Dot click handler
  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  return (
    <div className="md:pt-30 pt-20 bg-[#FFFFFF]">
      <Navbar breadcrumb={`Stamp / ${current?.title}`} isBanner={false} />

      {/* Banner */}
      <div className="w-full">
        <img src="/stampcategories-banner.png" className="w-full" alt="" />
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-[1400px] mx-auto flex gap-10 mt-10 pl-14 pr-6">
        {/* LEFT FILTER */}
        <div className="w-[260px] hidden lg:block">
          <h2 className="text-[32px] font-medium text-[#323232] mb-5">
            Filter
          </h2>

          {/* SEARCH */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Name of brand"
              className="w-full border border-[#D9D9D9] rounded-md px-4 py-2.5 text-sm focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-[#323232] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* MAIN CATEGORIES */}
          <div className="space-y-5">
            {Object.entries(stampData).map(([key, value]) => (
              <div key={key}>
                {/* Main Category Header */}
                <div
                  className="flex justify-between items-center pb-3 border-b border-[#E5E5E5] cursor-pointer"
                  onClick={() => handleMainToggle(key)}
                >
                  <span className="text-lg font-medium text-[#323232]">
                    {value.title}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-[#323232] transition-transform duration-200 ${
                      openMain[key] ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Subcategory Dropdown */}
                {openMain[key] && activeMain === key && (
                  <div className="mt-2 space-y-2">
                    {value.categories.map((cat, i) => (
                      <div key={i}>
                        <div
                          onClick={() => handleToggle(key, i)}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          {/* Chevron with bg toggle */}
                          <div
                            className={`w-5 h-5 rounded-sm flex items-center justify-center transition-all duration-200 ${
                              openSubcategories[key] === i
                                ? "bg-[#C6131B]"
                                : "bg-transparent border border-[#ACACAC]"
                            }`}
                          >
                            {openSubcategories[key] === i ? (
                              <ChevronUpIcon className="w-3 h-3 text-white" />
                            ) : (
                              <ChevronDownIcon className="w-3 h-3 text-[#ACACAC]" />
                            )}
                          </div>

                          <span className="text-[15px] font-medium text-[#323232]">
                            {cat.name}
                          </span>
                        </div>

                        {/* Products */}
                        {openSubcategories[key] === i && (
                          <div className="ml-2 mt-2 space-y-2 max-h-[150px] overflow-y-auto">
                            {cat.products.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-start gap-5"
                              >
                                {/* ✅ Dot with click */}
                                <span
                                  className={`w-1.5 h-1.5 rounded-full mt-2 cursor-pointer transition-colors ${
                                    selectedProducts.includes(item.id)
                                      ? "bg-[#C6131B]"
                                      : "bg-gray-400"
                                  }`}
                                  onClick={() => handleSelectProduct(item.id)}
                                ></span>

                                <span className="text-[14px] text-[#323232]">
                                  {item.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 border-l border-[#D9D9D9]">
          {/* TOP CATEGORIES */}
          <div className="flex justify-center gap-5 overflow-x-auto pb-8 pt-2 border-b border-[#D9D9D9]">
            {current?.categories.map((c, index) => (
              <div
                key={index}
                onClick={() =>
                  setOpenSubcategories((prev) => ({
                    ...prev,
                    [activeMain]: index,
                  }))
                }
                className="flex flex-col items-center flex-shrink-0 cursor-pointer"
              >
                <div className="w-[150px] h-[150px] bg-[#F4F4F4] rounded-full flex items-center justify-center">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-[110px] h-[110px] object-contain"
                  />
                </div>

                <p className="mt-4 text-lg font-medium text-center w-[150px] leading-tight">
                  {c.name}
                </p>

                <div
                  className={`mt-2 h-[2px] w-16 ${
                    openSubcategories[activeMain] === index
                      ? "bg-[#C6131B]"
                      : "bg-transparent"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* TOP BAR */}
          <div className="flex justify-between items-center mb-6 px-12 py-5">
            <p className="text-sm font-bold text-[#323232]">
              Showed {filteredProducts.length} goods
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#323232]">Sort by:</span>
              <select className="border px-2 py-1 text-sm">
                <option>Best Match</option>
              </select>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-10">
            {filteredProducts.map((p) => (
              <ProductCard4 key={p.id} {...p} isPrice />
            ))}
          </div>

          {/* LOAD MORE */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#9A0F1E] text-white px-6 py-2 text-sm mb-20">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampCategories;
