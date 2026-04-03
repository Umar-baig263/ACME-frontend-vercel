import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const tabs = [
  "Matte",
  "Glossy",
  "Embossed",
  "Uncoated",
  "White Plastic",
  "Premium Plus",
  "Soft Touch",
  "Foil Accent",
  "Painted Edge",
];

const ProductPreviewSection = () => {
  const [activeTab, setActiveTab] = useState("Matte");

  return (
    <div className="mt-10">
      {/* TOP TABS */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-3 border-b">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="cursor-pointer flex flex-col items-center"
            >
              <span
                className={`text-sm ${
                  activeTab === tab
                    ? "text-[#C6131B] font-medium"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </span>

              {/* underline */}
              <div
                className={`mt-2 h-[3px] w-full ${
                  activeTab === tab ? "bg-[#C6131B]" : "bg-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        {/* LEFT IMAGE */}
        <div className=" flex items-center justify-center">
          <img
            src="/matte-img.png"
            alt="preview"
            className="w-full max-w-[400px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* TITLE + RATING */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">{activeTab}</h2>

            {/* Stars */}
            <div className="flex text-[#FFB400] text-[15px]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <AiFillStar key={i} />
                ))}
            </div>

            <span className="text-sm text-gray-600">4.7 (10934)</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 mt-3">
            Mess-free, self-inking stamps for clean, reliable impressions —
            every time.
          </p>

          {/* HIGHLIGHTS + OPTIONS */}
          <div className="grid grid-cols-2 gap-10 mt-6">
            {/* Highlights */}
            <div>
              <h3 className="font-medium mb-2">Highlights</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Subtle & sophisticated</li>
                <li>• Best for displaying text & finer details</li>
                <li>• Minimizes glare & reflections</li>
              </ul>
            </div>

            {/* Options */}
            <div>
              <h3 className="font-medium mb-2">Options</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Thickness: 14pt standard, 16pt premium</li>
                <li>• Shapes: Standard, square</li>
                <li>• Special finishes: Metallic foil</li>
                <li>• Corners: Standard, rounded</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-[#C6131B] text-white px-5 py-2 text-sm">
              Browse design
            </button>
            <button className="border px-5 py-2 text-sm">
              Upload Your design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewSection;
