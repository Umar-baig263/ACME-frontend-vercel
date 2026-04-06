import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";

const FilterSection = ({ title, children, isOpen, toggleOpen }) => {
  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={toggleOpen}
        className="flex gap-2 items-center w-full text-left text-lg font-medium text-[#323232] cursor-pointer"
      >
        {title}
        <span className="ml-auto">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>
      {isOpen && <div className="pt-2">{children}</div>}
    </div>
  );
};

const Filter = ({
  filter,
  onMainClick,
  onSubClick,
  selectedSub,
  selectedMain,
  onProductClick,
  selectedProducts = [],
}) => {
  const [openCat, setOpenCat] = useState(selectedMain || "");
  const [openSubCat, setOpenSubCat] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync openCat with selectedMain (URL or parent updates)
  useEffect(() => {
    if (selectedMain) setOpenCat(selectedMain);
  }, [selectedMain]);

  const toggleCategory = (key) => {
    setOpenCat((prev) => (prev === key ? "" : key));
    onMainClick(key);
  };

  const toggleSubCategory = (subName) => {
    setOpenSubCat((prev) => (prev === subName ? "" : subName));
  };

  const filteredData = filter
    ?.map((main) => {
      if (!searchQuery) return main;
      const q = searchQuery.toLowerCase();
      const mainMatches = main.name?.toLowerCase().includes(q);

      const filteredSubs = main.sub
        ?.map((sub) => {
          const subMatches = sub.name?.toLowerCase().includes(q);
          const matchedProducts =
            sub.products?.filter((p) => p.name?.toLowerCase().includes(q)) ||
            [];

          if (mainMatches || subMatches || matchedProducts.length > 0) {
            return {
              ...sub,
              products:
                matchedProducts.length > 0 ? matchedProducts : sub.products,
            };
          }
          return null;
        })
        .filter(Boolean);

      if (mainMatches || (filteredSubs && filteredSubs.length > 0)) {
        return {
          ...main,
          sub:
            mainMatches && (!filteredSubs || filteredSubs.length === 0)
              ? main.sub
              : filteredSubs,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-4xl font-medium text-[#323232]">Filter</div>
        <div className="flex justify-between items-center p-2 rounded-md border text-sm border-gray-200">
          <input
            placeholder="Search Filter..."
            className="outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="text-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        {filteredData?.map((main, i) => {
          const isOpen = searchQuery ? true : openCat === main.key;
          return (
            <div key={i}>
              <FilterSection
                title={main.name}
                isOpen={isOpen}
                toggleOpen={() => toggleCategory(main.key)}
              >
                <div className="flex flex-col gap-3">
                  {main.sub?.map((sub, j) => {
                    const isSelectedSub =
                      selectedSub === sub.name && selectedMain === main.key;
                    const isProductsOpen = searchQuery
                      ? true
                      : openSubCat === sub.name;

                    return (
                      <div key={j} className="flex flex-col">
                        {/* Sub-category Row */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleSubCategory(sub.name)}
                            className={`flex items-center justify-center w-5 h-5 rounded transition-all duration-200 ${
                              isProductsOpen
                                ? "bg-[#c6131b] text-white"
                                : "bg-transparent text-gray-400 border border-gray-300 hover:border-[#c6131b] hover:text-[#c6131b]"
                            }`}
                          >
                            {isProductsOpen ? (
                              <FaAngleUp size={12} />
                            ) : (
                              <FaAngleDown size={12} />
                            )}
                          </button>
                          <div
                            onClick={() => onSubClick(sub.name, main.key)}
                            className={`cursor-pointer transition-all duration-150 text-base ${
                              isSelectedSub
                                ? "font-medium text-black"
                                : "text-gray-700 hover:text-black"
                            }`}
                          >
                            {sub.name}
                          </div>
                        </div>

                        {/* Products List (Visible if Red Dropdown is Clicked) */}
                        {isProductsOpen && sub.products && (
                          <div className="flex flex-col gap-2 mt-2 pl-[7px] max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#c6131b] scrollbar-track-gray-100 border-r-2 border-transparent hover:border-gray-100 pr-2">
                            {sub.products.map((prod, k) => {
                              const isProdSelected = selectedProducts.some(
                                (p) => p.id === prod.id,
                              );
                              return (
                                <div
                                  key={k}
                                  onClick={() =>
                                    onProductClick && onProductClick(prod)
                                  }
                                  className={`flex items-center gap-3 cursor-pointer text-sm transition-all duration-150 ${
                                    isProdSelected
                                      ? "text-[#c6131b] font-medium"
                                      : "text-gray-500 hover:text-black"
                                  }`}
                                >
                                  <div
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      isProdSelected
                                        ? "bg-[#c6131b]"
                                        : "bg-gray-300"
                                    }`}
                                  ></div>
                                  {prod.name}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </FilterSection>
              {i < filteredData.length - 1 && (
                <hr className="border-gray-200 my-3" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
