import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Section1 from "../../components/EStore/Section1";

export default function ProductCustomize() {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="product-customize" isBanner={false} />
      {/* MAIN DESIGNER CONTAINER */}
      <div className="w-[1100px] h-[480px]  bg-gray-200 p-5  mx-auto">
        <div className="flex gap-5 h-full">
          {/* LEFT SIDEBAR */}
          <div className="w-[230px] bg-white rounded-xl p-4 shadow flex flex-col">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button className="px-2 py-1 bg-gray-200 rounded text-xs">
                Text
              </button>
              <button className="px-2 py-1 bg-red-500 text-white rounded text-xs">
                Image
              </button>
              <button className="px-2 py-1 bg-gray-200 rounded text-xs">
                Tool
              </button>
              <button className="px-2 py-1 bg-gray-200 rounded text-xs">
                Element
              </button>
            </div>

            {/* Upload */}
            <button className="border rounded-md py-2 text-xs mb-3">
              Upload Image
            </button>

            {/* Colors */}
            <div className="mb-3">
              <p className="text-xs mb-1">Color</p>

              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
            </div>

            {/* Dropdowns */}
            <select className="border rounded-md p-1 text-xs mb-2">
              <option>Cotton base</option>
            </select>

            <select className="border rounded-md p-1 text-xs mb-2">
              <option>8 parts</option>
            </select>

            <select className="border rounded-md p-1 text-xs mb-3">
              <option>Image 1</option>
            </select>

            {/* Sliders */}
            <div className="space-y-2 text-xs">
              <div>
                <p>Horizontal position</p>
                <input type="range" className="w-full" />
              </div>

              <div>
                <p>Vertical position</p>
                <input type="range" className="w-full" />
              </div>

              <div>
                <p>Zoom</p>
                <input type="range" className="w-full" />
              </div>
            </div>
          </div>

          {/* CENTER CANVAS */}
          <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center relative">
            <img
              src="../../../../../public/custom-product-img.png"
              alt="shirt"
              className="w-[865px]"
            />

            {/* Undo / Redo */}
            <div className="absolute right-3 top-1/2 flex flex-col gap-2">
              <button className="bg-white shadow px-2 py-1 rounded text-xs">
                ↺
              </button>
              <button className="bg-white shadow px-2 py-1 rounded text-xs">
                ↻
              </button>
            </div>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="w-[120px]">
            <div className="bg-gray-400 rounded-xl p-2">
              <img
                src="../../../../../public/Mask group.png"
                alt="preview"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Testmonial1 />
      <FaqSection />
    </div>
  );
}
