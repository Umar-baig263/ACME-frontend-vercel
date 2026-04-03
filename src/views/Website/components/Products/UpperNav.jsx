import React from "react";

const UpperNav = ({
  layouts,
  activeLayout,
  setActiveLayout,
  visibleProducts,
  totalProducts,
}) => {
  return (
    <div className="flex justify-between items-center text-xs bg-white md:px-10 px-5 py-2">
      {/* Left: Dynamic goods count */}
      <div className="font-bold text-black">
        Showing {Math.min(visibleProducts, totalProducts)} of {totalProducts}{" "}
        goods
      </div>

      {/* Right: Sort + Layout buttons */}
      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span>Sort By:</span>
          <select className="border px-2 py-1 outline-none">
            <option>Best Match</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        {/* Layout Toggle */}
        <div className="flex items-center gap-1">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setActiveLayout(layout.id)}
              className={`h-5 border flex gap-[1px] p-[1px] ${
                activeLayout === layout.id
                  ? "border-gray-400"
                  : "border-gray-300 bg-white"
              }`}
            >
              {[...Array(layout.cols)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 ${
                    activeLayout === layout.id ? "bg-gray-800" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
