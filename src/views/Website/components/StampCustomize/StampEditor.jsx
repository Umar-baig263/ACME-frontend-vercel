import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";
import * as htmlToImage from "html-to-image";
import {
  FaTextHeight,
  FaImage,
  FaTools,
  FaShapes,
  FaBold,
  FaItalic,
  FaPaintBrush,
  FaPlus,
  FaBars,
  FaChevronDown,
  FaArrowRight,
  FaTrash,
  FaPencilAlt,
  FaSlash,
  FaTable,
  FaSquare,
  FaStar,
  FaDrawPolygon,
  FaCircle,
  FaCloudUploadAlt,
  FaEllipsisV,
} from "react-icons/fa";

const StampEditor = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("text");

  // Customization States
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [isBold, setIsBold] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [stampColor, setStampColor] = useState("text-blue-600");
  const [xPos, setXPos] = useState(22.8);
  const [yPos, setYPos] = useState(22.8);
  const [rotation, setRotation] = useState(0);

  const [activeShape, setActiveShape] = useState("Rectangle");
  const [activeTool, setActiveTool] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const [lines, setLines] = useState([
    "Frau Dr. med. Wiebke Freulein",
    "Sandstr. 11, 44143 Dortmund",
    "Telefon: 0271 - 12 12 123",
  ]);

  const tabs = [
    { id: "text", name: "Text", icon: <FaTextHeight className="text-xl" /> },
    { id: "image", name: "Image", icon: <FaImage className="text-xl" /> },
    { id: "tool", name: "Tool", icon: <FaTools className="text-xl" /> },
    { id: "element", name: "Element", icon: <FaShapes className="text-xl" /> },
  ];

  const fontOptions = [
    "Arial",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
  ];
  const colorOptions = [
    { id: "text-black", hex: "#000000", name: "Black" },
    { id: "text-blue-600", hex: "#2563EB", name: "Blue" },
    { id: "text-red-600", hex: "#DC2626", name: "Red" },
  ];

  // Cart Payload Builder
  const buildProductPayload = () => ({
    id: `custom-stamp-${Date.now()}`,
    name: "Custom Trodat Printy Stamp",
    price: 29.98,
    qty: 1,
    image: "/trodatprinty-img1.png",
    customDetails: {
      data: lines.join(" | "),
      style: {
        fontFamily,
        fontSize,
        isBold,
        isItalic,
        color: stampColor,
        activeShape,
        activeTool,
      },
      images: uploadedImages.map((img) => img.src), // Pass lightweight Base64 to cart payload memory if needed
      layout: "stamp",
      themeColor: stampColor.replace("text-", ""), // Compatible with checkout reader
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (uploadedImages.length >= 3) {
        toast.error("Maximum 3 images allowed for custom stamp");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImages([
          ...uploadedImages,
          {
            id: Date.now(),
            src: event.target.result,
            token: `STAMP-${Math.floor(Math.random() * 90000) + 10000}`,
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (id) => {
    setUploadedImages(uploadedImages.filter((img) => img.id !== id));
  };

  const captureStampImage = async () => {
    const stampElement = document.getElementById("stamp-capture-element");
    if (!stampElement) return "/trodatprinty-img1.png";

    try {
      const dataUrl = await htmlToImage.toJpeg(stampElement, {
        quality: 0.8,
        backgroundColor: "#ffffff",
        pixelRatio: 1,
      });
      return dataUrl;
    } catch (e) {
      console.error("Failed to capture stamp", e);
      return "/trodatprinty-img1.png";
    }
  };

  const handleAddToCart = async () => {
    toast.info("Generating stamp image...", { autoClose: 1000 });
    await new Promise((resolve) => setTimeout(resolve, 300)); // DOM settle buffer

    const base64Image = await captureStampImage();
    const payload = buildProductPayload();
    payload.image = base64Image;
    payload.img = base64Image;
    addToCart(payload);

    toast.success("Custom Stamp successfully added to your cart!");
  };

  const handleCheckout = async () => {
    toast.info("Generating stamp image...", { autoClose: 1000 });
    await new Promise((resolve) => setTimeout(resolve, 300)); // DOM settle buffer

    const base64Image = await captureStampImage();
    const payload = buildProductPayload();
    payload.image = base64Image;
    payload.img = base64Image;
    addToCart(payload);

    navigate("/check-out");
  };

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-5 font-sans">
      <div className="bg-[#F4F4F4] rounded-3xl p-8 shadow-sm">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#C6131B] text-white shadow-lg"
                    : "bg-white text-gray-400 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span className="text-sm font-medium mt-2">{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center gap-6 shadow-sm border border-gray-100">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">TR 4910 (3/8" X 11/32")</h2>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[#C6131B] font-bold text-xl">$29.98</span>
                <span className="text-gray-400 line-through text-sm">
                  List Price: $31.95
                </span>
              </div>
              <p className="text-green-600 text-sm font-semibold">
                You Save: $1.95
              </p>
            </div>
            <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/trodatprinty-img1.png"
                className="w-full h-full object-contain"
                alt="Selected Stamp"
              />
            </div>
            <button className="bg-[#C6131B] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#A50F16] transition-colors">
              Customize your stamp
            </button>
          </div>
        </div>

        <div className="flex gap-8 mt-10">
          {/* Sidebar Controls */}
          <div className="w-1/3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[600px] flex flex-col gap-6">
            {activeTab === "text" && (
              <>
                {/* Typography Section */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Typography
                  </label>
                  <div className="relative">
                    <select
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none font-medium"
                    >
                      {fontOptions.map((font) => (
                        <option key={font} value={font}>
                          {font}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Font Size & Styles */}
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-bold mb-2">
                      Font Size (px)
                    </label>
                    <div className="relative">
                      <select
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none font-medium"
                      >
                        {[12, 14, 16, 18, 20, 24, 28, 32].map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex gap-2 pb-1 relative group">
                    <button
                      onClick={() => setIsBold(!isBold)}
                      className={`w-12 h-12 flex items-center justify-center border rounded-xl transition-colors ${isBold ? "border-[#C6131B] bg-red-50 text-[#C6131B]" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                    >
                      <FaBold />
                    </button>
                    <button
                      onClick={() => setIsItalic(!isItalic)}
                      className={`w-12 h-12 flex items-center justify-center border rounded-xl transition-colors ${isItalic ? "border-[#C6131B] bg-red-50 text-[#C6131B]" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                    >
                      <FaItalic />
                    </button>
                  </div>
                </div>

                {/* Colors Section */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Ink Color
                  </label>
                  <div className="flex gap-4">
                    {colorOptions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setStampColor(c.id)}
                        className={`flex flex-col items-center gap-2 p-2 border-2 rounded-xl w-1/3 transition-all ${stampColor === c.id ? "border-[#C6131B] bg-red-50" : "border-gray-100 hover:bg-gray-50"}`}
                      >
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: c.hex }}
                        ></div>
                        <span className="text-xs font-bold text-gray-700">
                          {c.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Line Inputs */}
                <div className="flex flex-col gap-4 mt-2">
                  <label className="block text-gray-700 font-bold">
                    Content Lines
                  </label>
                  {lines.map((text, i) => (
                    <div key={i} className="flex flex-col gap-1 relative">
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          value={text}
                          onChange={(e) => {
                            const newLines = [...lines];
                            newLines[i] = e.target.value;
                            setLines(newLines);
                          }}
                          placeholder={`Line ${i + 1}`}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none"
                        />
                        <button
                          onClick={() =>
                            setLines(lines.filter((_, index) => index !== i))
                          }
                          className="absolute right-4 text-red-300 hover:text-red-500 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setLines([...lines, ""])}
                    className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl py-3 font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <FaPlus className="text-sm" /> Add Line
                  </button>
                </div>
              </>
            )}

            {activeTab === "tool" && (
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    setActiveTool(activeTool === "Pencil" ? null : "Pencil")
                  }
                  className={`w-16 h-16 flex items-center justify-center border-2 rounded-xl transition-all ${activeTool === "Pencil" ? "border-red-500 text-red-500 bg-red-50 shadow-sm" : "border-gray-100 text-gray-400 bg-gray-50 hover:bg-gray-100"}`}
                >
                  <FaPencilAlt className="text-2xl" />
                </button>
                <button
                  onClick={() =>
                    setActiveTool(activeTool === "Slash" ? null : "Slash")
                  }
                  className={`w-16 h-16 flex items-center justify-center border-2 rounded-xl transition-all ${activeTool === "Slash" ? "border-red-500 text-red-500 bg-red-50 shadow-sm" : "border-gray-100 text-gray-400 bg-gray-50 hover:bg-gray-100"}`}
                >
                  <FaSlash className="text-2xl" />
                </button>
                <button
                  onClick={() =>
                    setActiveTool(activeTool === "Table" ? null : "Table")
                  }
                  className={`w-16 h-16 flex items-center justify-center border-2 rounded-xl transition-all ${activeTool === "Table" ? "border-red-500 text-red-500 bg-red-50 shadow-sm" : "border-gray-100 text-gray-400 bg-gray-50 hover:bg-gray-100"}`}
                >
                  <FaTable className="text-2xl" />
                </button>
              </div>
            )}

            {activeTab === "image" && (
              <div className="flex flex-col gap-6">
                <label className="w-full h-32 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span className="text-gray-500 font-semibold flex items-center gap-2">
                    <FaCloudUploadAlt className="text-2xl" /> Upload Image
                  </span>
                </label>

                <div className="flex gap-2">
                  {uploadedImages.map((img, idx) => (
                    <button
                      key={img.id}
                      className="px-5 py-2 text-xs font-bold bg-white border border-red-500 rounded text-red-500"
                    >
                      Image {idx + 1}
                    </button>
                  ))}
                  {uploadedImages.length === 0 && (
                    <span className="text-xs text-gray-400 py-2">
                      No images uploaded
                    </span>
                  )}
                  {uploadedImages.length > 0 && uploadedImages.length < 3 && (
                    <label className="px-5 py-2 text-xs font-bold bg-white border border-gray-200 rounded text-gray-400 flex items-center gap-1 cursor-pointer hover:bg-gray-50">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <FaPlus /> Add Image
                    </label>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  {uploadedImages.map((img, idx) => (
                    <div
                      key={img.id}
                      className="flex flex-col gap-1 relative group"
                    >
                      <label className="text-xs font-bold text-gray-700">
                        Image {idx + 1}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          readOnly
                          value={img.token}
                          className="w-full p-3 border border-gray-200 rounded-lg outline-none text-sm bg-gray-50 text-gray-500 font-mono"
                        />
                        <button className="text-gray-400 hover:text-gray-600 px-2 cursor-grab active:cursor-grabbing">
                          <FaBars />
                        </button>
                      </div>

                      {/* REAL Dropdown mapped to action */}
                      <div className="absolute top-[100%] right-10 w-24 bg-white shadow-lg border border-gray-100 rounded-md py-1 z-10 hidden group-hover:flex flex-col">
                        <button className="text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 font-bold">
                          Copy
                        </button>
                        <button
                          onClick={() => removeImage(img.id)}
                          className="text-left px-4 py-2 text-xs bg-red-600 text-white hover:bg-red-700 font-bold transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "element" && (
              <div className="grid grid-cols-5 gap-4">
                {[
                  { icon: <FaSquare />, label: "Rectangle" },
                  { icon: <FaStar />, label: "Star" },
                  { icon: <FaArrowRight />, label: "Arrow" },
                  { icon: <FaDrawPolygon />, label: "Polygon" },
                  { icon: <FaCircle />, label: "Circle" },
                ].map((shape, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveShape(
                          activeShape === shape.label ? "None" : shape.label,
                        )
                      }
                      className={`w-12 h-12 flex items-center justify-center border-2 rounded-xl text-lg transition-all ${activeShape === shape.label ? "border-red-500 text-red-500 bg-red-50 shadow-sm" : "border-gray-100 text-gray-400 bg-gray-50 hover:bg-gray-100"}`}
                    >
                      {shape.icon}
                    </button>
                    <span className="text-[9px] font-semibold text-gray-500 capitalize">
                      {shape.label}
                    </span>
                  </div>
                ))}

                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={`filler-${i}`}
                    className="flex flex-col items-center gap-2"
                  >
                    <button className="w-12 h-12 border-2 border-transparent bg-gray-50 rounded-xl text-gray-300 flex items-center justify-center pointer-events-none">
                      <div className="w-5 h-5 bg-gray-200 rounded-sm"></div>
                    </button>
                    <span className="text-[9px] font-semibold text-gray-300 capitalize">
                      Shape
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Positioning Sliders */}
            <div className="mt-auto flex flex-col gap-6 border-t border-gray-100 pt-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-bold text-[13px] text-gray-800">
                  <span>Horizontal size</span>
                  <span className="text-gray-500 font-mono">
                    [{xPos.toFixed(1)}]
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={xPos}
                  onChange={(e) => setXPos(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-[#C6131B]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-bold text-[13px] text-gray-800">
                  <span>Vertical size</span>
                  <span className="text-gray-500 font-mono">
                    [{yPos.toFixed(1)}]
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={yPos}
                  onChange={(e) => setYPos(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-[#C6131B]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-bold text-[13px] text-gray-800">
                  <span>Rotation position</span>
                  <span className="text-gray-500 font-mono">
                    [{rotation.toFixed(1)}]
                  </span>
                </div>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-[#C6131B]"
                />
              </div>
            </div>
          </div>

          {/* Design Area */}
          <div className="w-2/3 flex flex-col gap-6">
            <div className="flex-1 bg-white rounded-[40px] shadow-sm border border-gray-100 flex items-center justify-center p-12 relative overflow-hidden">
              {/* Blueprint Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              {/* Stamp Design Box */}
              <div
                id="stamp-capture-element"
                className={`relative border-gray-300 flex flex-col items-center justify-center bg-white shadow-xl ${stampColor} ${
                  activeShape === "Circle"
                    ? "rounded-full border-4 border-dashed"
                    : activeShape === "Star" || activeShape === "Polygon"
                      ? "border-none"
                      : activeShape === "Arrow"
                        ? "border-none"
                        : "rounded-[30px] border-4 border-dashed" // Default Rectangle
                }`}
                style={{
                  fontFamily: fontFamily,
                  fontStyle: isItalic ? "italic" : "normal",
                  width: `${350 + xPos * 5}px`,
                  height: `${150 + yPos * 5}px`,
                  padding: "40px",
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {/* Complex Shape SVG Boundaries */}
                {activeShape === "Star" && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <polygon
                      points="50,2 63,38 100,38 70,60 81,98 50,76 19,98 30,60 0,38 37,38"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                )}
                {activeShape === "Polygon" && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <polygon
                      points="50,2 98,25 98,75 50,98 2,75 2,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                )}
                {activeShape === "Arrow" && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <polygon
                      points="2,25 60,25 60,5 98,50 60,95 60,75 2,75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                )}

                {uploadedImages.length > 0 && (
                  <div className="flex gap-4 mb-4 z-10 justify-center">
                    {uploadedImages.map((img) => (
                      <img
                        key={img.id}
                        src={img.src}
                        alt="Uploaded logo"
                        className="max-h-24 object-contain brightness-0 mix-blend-multiply opacity-80"
                        style={{
                          filter: `drop-shadow(0 0 0 ${stampColor.includes("red") ? "#DC2626" : stampColor.includes("black") ? "#000" : "#2563EB"})`,
                        }}
                      />
                    ))}
                  </div>
                )}

                <div
                  className={`flex z-10 flex-col items-center text-center leading-tight w-full ${activeTool === "Table" ? "divide-y divide-current border-y border-current" : ""}`}
                >
                  {lines.map((line, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: `${fontSize}px`,
                        fontWeight: isBold ? "900" : "500",
                        paddingTop: activeTool === "Table" ? "8px" : "0px",
                        paddingBottom: activeTool === "Table" ? "8px" : "0px",
                        marginBottom:
                          activeTool === "Table" ? "0px" : "6px",
                      }}
                      className={`whitespace-nowrap w-full ${activeTool === "Slash" && idx === 0 ? "border-b-2 border-dashed border-current pb-2 mb-4" : ""}`}
                    >
                      {line || " "}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handleAddToCart}
                className="bg-white border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors"
              >
                Add to cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-[#C6131B] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#A50F16] transition-colors"
              >
                Proceed to checkout <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampEditor;
