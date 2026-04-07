import React, { useState, useContext } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Section1 from "../../components/CustomizePage/Section1";
import { apparelData } from "../../../../constants/apparelData";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";

export default function ApparelCustomize() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = location.state?.product || {
    id: "apparel-custom",
    name: "Customized Apparel",
    price: 34.99,
    img: "/custom-product-img.png"
  };

  const [color, setColor] = useState("Red");
  const [material, setMaterial] = useState("Cotton base");
  const [parts, setParts] = useState("8 parts");
  const [element, setElement] = useState("Image 1");
  const [uploadedImage, setUploadedImage] = useState(null);
  
  // New slider states
  const [activeTab, setActiveTab] = useState("Text");
  const [horizontalPos, setHorizontalPos] = useState(50);
  const [verticalPos, setVerticalPos] = useState(50);
  const [zoom, setZoom] = useState(100);

  const handleUpload = () => {
    // Simulate image upload
    setUploadedImage("Custom_Design.png");
    toast.success("Image uploaded successfully!");
  };

  const getCustomizationLines = () => [
    `Tab: ${activeTab}`,
    `Color: ${color}`,
    `Material: ${material}`,
    `Parts: ${parts}`,
    `Element: ${element}`,
    `Horizontal Pos: ${horizontalPos}%`,
    `Vertical Pos: ${verticalPos}%`,
    `Zoom: ${zoom}%`,
    uploadedImage ? `Uploaded: ${uploadedImage}` : "No Image Uploaded",
  ];

  const handleAddToCart = () => {
    addToCart({
      ...product,
      qty: 1,
      customization: { 
        fontFamily: "N/A", 
        fontSize: "N/A", 
        isBold: false,
        isItalic: false,
        lines: getCustomizationLines()
      }
    });
    toast.success("Apparel added to cart!");
  };

  const handleCheckout = () => {
    navigate("/check-out", {
      state: {
        buyNowProduct: {
           ...product,
           qty: 1,
           customization: { fontFamily: "N/A", fontSize: "N/A", isBold: false, isItalic: false, lines: getCustomizationLines() }
        }
      }
    });
  };
  // Flatten all products from apparelData
  const allApparelProducts = Object.values(apparelData)
    .flatMap((cat) => cat.categories)
    .flatMap((sub) => sub.products);

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Custom Apparel" isBanner={false} />
      {/* MAIN DESIGNER CONTAINER */}
      <div className="w-[1100px] h-[480px]  bg-gray-200 p-5  mx-auto">
        <div className="flex gap-5 h-full">
          {/* LEFT SIDEBAR */}
          <div className="w-[230px] bg-white rounded-xl p-4 shadow flex flex-col">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              {['Text', 'Image', 'Tool', 'Element'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${activeTab === tab ? "bg-red-500 text-white shadow-sm" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Upload */}
            <button onClick={handleUpload} className="border rounded-md py-2 text-xs mb-3 font-semibold hover:bg-gray-50 transition-colors">
              {uploadedImage ? `Uploaded: ${uploadedImage}` : "+ Upload Image"}
            </button>

            {/* Colors */}
            <div className="mb-3">
              <p className="text-xs mb-1 font-semibold">Color: {color}</p>

              <div className="flex gap-2">
                <div onClick={() => setColor("Red")} className={`w-4 h-4 rounded-full bg-red-500 cursor-pointer transition-all ${color === "Red" ? "ring-2 ring-offset-2 ring-red-500 scale-110" : ""}`}></div>
                <div onClick={() => setColor("Blue")} className={`w-4 h-4 rounded-full bg-blue-500 cursor-pointer transition-all ${color === "Blue" ? "ring-2 ring-offset-2 ring-blue-500 scale-110" : ""}`}></div>
                <div onClick={() => setColor("Green")} className={`w-4 h-4 rounded-full bg-green-500 cursor-pointer transition-all ${color === "Green" ? "ring-2 ring-offset-2 ring-green-500 scale-110" : ""}`}></div>
                <div onClick={() => setColor("Yellow")} className={`w-4 h-4 rounded-full bg-yellow-500 cursor-pointer transition-all ${color === "Yellow" ? "ring-2 ring-offset-2 ring-yellow-500 scale-110" : ""}`}></div>
                <div onClick={() => setColor("Purple")} className={`w-4 h-4 rounded-full bg-purple-500 cursor-pointer transition-all ${color === "Purple" ? "ring-2 ring-offset-2 ring-purple-500 scale-110" : ""}`}></div>
              </div>
            </div>

            {/* Dropdowns */}
            <select value={material} onChange={(e) => setMaterial(e.target.value)} className="border rounded-md p-1 text-xs mb-2 outline-none">
              <option>Cotton base</option>
              <option>Polyester</option>
              <option>Blend</option>
            </select>

            <select value={parts} onChange={(e) => setParts(e.target.value)} className="border rounded-md p-1 text-xs mb-2 outline-none">
              <option>8 parts</option>
              <option>4 parts</option>
            </select>

            <select value={element} onChange={(e) => setElement(e.target.value)} className="border rounded-md p-1 text-xs mb-3 outline-none">
              <option>Image 1</option>
              <option>Text Box</option>
              <option>Logo</option>
            </select>

            {/* Sliders */}
            <div className="space-y-4 text-xs mt-2">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-700">Horizontal position</p>
                  <span className="text-gray-500">{horizontalPos}%</span>
                </div>
                <input type="range" value={horizontalPos} onChange={(e) => setHorizontalPos(e.target.value)} min="0" max="100" className="w-full accent-blue-500 cursor-pointer" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-700">Vertical position</p>
                  <span className="text-gray-500">{verticalPos}%</span>
                </div>
                <input type="range" value={verticalPos} onChange={(e) => setVerticalPos(e.target.value)} min="0" max="100" className="w-full accent-blue-500 cursor-pointer" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-700">Zoom</p>
                  <span className="text-gray-500">{zoom}%</span>
                </div>
                <input type="range" value={zoom} onChange={(e) => setZoom(e.target.value)} min="50" max="200" className="w-full accent-blue-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* CENTER CANVAS */}
          <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center relative">
            <img
              src="/custom-product-img.png"
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
          <div className="w-[120px] flex flex-col justify-between">
            <div className="bg-gray-400 rounded-xl p-2">
              <img src="/Mask group.png" alt="preview" className="w-full" />
            </div>

            <div className="flex flex-col gap-2 mt-auto">
              <button onClick={handleAddToCart} className="bg-white border-2 border-gray-200 text-gray-700 w-full py-2 rounded-lg font-bold text-xs hover:bg-gray-50 transition-colors">
                 Add to cart
              </button>
              <button onClick={handleCheckout} className="bg-[#C6131B] text-white w-full py-2 rounded-lg font-bold text-xs hover:bg-[#A50F16] transition-colors">
                 Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section1
        head="Related Products"
        data={allApparelProducts.slice(0, 10)}
        path="/apparel-product-description"
      />

      <Testmonial1 />
      <FaqSection />
    </div>
  );
}
