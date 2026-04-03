import React from "react";

export default function ProductCustomizer() {
  return (
    <div className=" min-h-screen py-4 px-24">
      <div className="bg-[#E9E9E9] rounded-xl shadow-md p-8">
        {/* Top Toolbar */}
        <div className="flex items-center gap-4 mb-4">
          {["Text", "Image", "Tool", "Element"].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-16 h-14 bg-[#FFFFFF] rounded-md cursor-pointer hover:bg-gray-200"
            >
              <div className="text-sm">{item}</div>
            </div>
          ))}

          {/* Product Tabs */}
          <div className="flex gap-3 ml-6">
            <div className="bg-[#FBFBFB] p-2 w-40">
              <div className="text-sm font-medium">
                Olympian Water Bottle - 27 oz
              </div>
              <div className="text-xs text-gray-600">$18.95</div>
            </div>

            {[
              "./customize-1.png",
              "./customize-2.png",
              "./customize-3.png",
              "./customize-4.png",
            ].map((icon, i) => (
              <div
                key={i}
                className="w-14 h-14 bg-[#D9D9D9] flex items-center justify-center"
              >
                <img
                  src={icon}
                  alt={`icon-${i}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-4">
          {/* Left Panel */}
          <div className="w-1/4 bg-[#FBFBFB] p-4 rounded-lg ">
            <button className="w-full border border-gray-300 py-3 rounded-md text-gray-500 mb-4">
              Upload Image
            </button>

            <div className="text-xs text-gray-400 mb-2">Image 1</div>
            <input
              type="text"
              value="0000124022"
              readOnly
              className="w-full border p-2 rounded-md text-sm mb-2"
            />

            <div className="flex gap-2 mb-4">
              <button className="bg-[#C6131B] text-white text-xs px-3 py-1 rounded">
                Copy
              </button>
              <button className="bg-gray-200 text-xs px-3 py-1 rounded">
                Delete
              </button>
            </div>

            {/* Sliders */}
            {[
              "Horizontal position",
              "Vertical position",
              "Rotation position",
            ].map((label, i) => (
              <div key={i} className="mb-4">
                <div className="text-xs mb-1 flex justify-between">
                  <span>{label}</span>
                  <span>[22.8]</span>
                </div>
                <input type="range" className="w-full" />
              </div>
            ))}
          </div>

          {/* Center Preview */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative">
              {/* Bottle Image */}
              <img
                src="./bottle.png"
                alt="bottle"
                className="h-76 object-contain"
              />

              {/* Logo Overlay */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 border-2 border-[#B0111D] border-dashed w-32 h-24 flex items-center justify-center">
                <div className="text-center text-xs text-gray-600">
                  YOUR LOGO
                </div>
              </div>
            </div>
          </div>

          {/* Right Thumbnail */}
          <div className="w-1/6 flex items-center justify-center">
            <div className="bg-[#423B3B] p-2 h-44 w-24">
              <img src="./bottle.png" alt="preview" />
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="border px-4 py-2 rounded-md">Add to cart</button>
          <button className="bg-[#B0111D] text-white px-4 py-2 rounded-md">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
