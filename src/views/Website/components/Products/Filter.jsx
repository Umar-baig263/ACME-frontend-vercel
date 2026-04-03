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
      {isOpen && <div className="pl-4 pt-1">{children}</div>}
    </div>
  );
};

const Filter = ({
  filter,
  onMainClick,
  onSubClick,
  selectedSub,
  selectedMain,
}) => {
  const [openCat, setOpenCat] = useState(selectedMain || "");

  // Sync openCat with selectedMain (URL or parent updates)
  useEffect(() => {
    if (selectedMain) setOpenCat(selectedMain);
  }, [selectedMain]);

  const toggleCategory = (key) => {
    setOpenCat((prev) => (prev === key ? "" : key));
    onMainClick(key);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <div className="text-4xl font-medium text-[#323232]">Filter</div>
        <div className="flex justify-between items-center p-2 rounded-md border text-sm border-gray-200">
          <input placeholder="Name Of Brand" className="outline-none w-full" />
          <FaSearch className="text-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        {filter?.map((main, i) => {
          const isOpen = openCat === main.key;
          return (
            <div key={i}>
              <FilterSection
                title={main.name}
                isOpen={isOpen}
                toggleOpen={() => toggleCategory(main.key)}
              >
                <div className="flex flex-col gap-1">
                  {main.sub?.map((sub, j) => (
                    <div
                      key={j}
                      onClick={() => onSubClick(sub.name, main.key)}
                      className={`cursor-pointer px-2 py-1 rounded transition-all duration-150 ${
                        selectedSub === sub.name && selectedMain === main.key
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              </FilterSection>
              {i < filter.length - 1 && <hr className="border-gray-300 my-2" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
