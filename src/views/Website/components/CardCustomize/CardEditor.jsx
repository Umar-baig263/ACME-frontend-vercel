import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";
import * as htmlToImage from "html-to-image";
import {
  FaTextHeight,
  FaImage,
  FaPalette,
  FaThLarge,
  FaBold,
  FaItalic,
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaChevronDown,
  FaArrowRight,
  FaSyncAlt,
  FaUpload,
  FaIdCard,
  FaGripLines,
  FaColumns,
} from "react-icons/fa";

const CardEditor = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("text");
  const [side, setSide] = useState("front");
  const [formData, setFormData] = useState({
    name: "John Doe",
    title: "Senior Marketing Manager",
    company: "ACME Solutions Inc.",
    phone: "+1 (555) 000-1234",
    email: "john.doe@acme.com",
    website: "www.acmesolutions.com",
    address: "123 Business Ave, New York, NY",
  });

  const [style, setStyle] = useState({
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#1a1a1a",
    alignment: "left",
    isBold: false,
    isItalic: false,
  });

  const [logo, setLogo] = useState(null);
  const [theme, setTheme] = useState("default"); // default, modern, classic
  const [cardLayout, setCardLayout] = useState("classic"); // classic, minimal, split

  const tabs = [
    { id: "text", name: "Content", icon: <FaTextHeight className="text-3xl" /> },
    { id: "logo", name: "Logo", icon: <FaImage className="text-3xl" /> },
    { id: "style", name: "Style", icon: <FaPalette className="text-3xl" /> },
    {
      id: "templates",
      name: "Layouts",
      icon: <FaThLarge className="text-3xl" />,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const getAlignmentClass = () => {
    if (style.alignment === "center") return "items-center text-center";
    if (style.alignment === "right") return "items-end text-right";
    return "items-start text-left";
  };

  const getFontFamilyClass = () => {
    if (style.fontFamily === "Space Mono") return "font-spacemono";
    if (style.fontFamily === "Playfair Display") return "font-playfair";
    return "font-montserrat";
  };

  const buildProductPayload = () => ({
    id: `custom-card-${Date.now()}`,
    name: "Premium Custom Business Card",
    price: 24.99,
    qty: 1,
    image: "/business-img1.png", // Stand-in for generated image
    customDetails: {
      data: formData,
      style: style,
      layout: cardLayout,
      themeColor: theme,
      hasLogo: !!logo,
      logoData: logo, // Optional: Store logo payload base64 securely
    },
  });

  const captureCardImage = async () => {
    const cardElement = document.getElementById("card-capture-element");
    if (!cardElement) return "/business-img1.png";

    try {
      // Temporarily stash transform if rotated to safely capture without distortion
      const originalTransform = cardElement.style.transform;
      if (side === "back") cardElement.style.transform = "none";

      const dataUrl = await htmlToImage.toJpeg(cardElement, {
        quality: 0.8,
        backgroundColor: '#ffffff',
        pixelRatio: 1
      });

      if (side === "back") cardElement.style.transform = originalTransform;

      // Ensure base64 string propagates properly 
      return dataUrl;
    } catch (e) {
      console.error("Failed to capture card", e);
      return "/business-img1.png";
    }
  };

  const handleAddToCart = async () => {
    toast.info("Generating card image...", { autoClose: 1000 });
    await new Promise(resolve => setTimeout(resolve, 300)); // DOM settle buffer

    const base64Image = await captureCardImage();
    const payload = buildProductPayload();
    payload.image = base64Image;
    payload.img = base64Image; // Attach to both keys forcefully
    addToCart(payload);
    
    toast.success("Premium Custom Card successfully added to your cart!");
  };

  const handleCheckout = async () => {
    toast.info("Generating card image...", { autoClose: 1000 });
    await new Promise(resolve => setTimeout(resolve, 300)); // DOM settle buffer

    const base64Image = await captureCardImage();
    const payload = buildProductPayload();
    payload.image = base64Image;
    payload.img = base64Image; // Attach to both keys forcefully
    addToCart(payload);
    
    navigate("/check-out");
  };

  const layoutThemes = {
    default: {
      primary: "#C6131B",
      secondary: "from-[#C6131B] to-[#9A0F1E]",
      dark: "#60050b",
    },
    modern: {
      primary: "#2563eb",
      secondary: "from-[#2563eb] to-[#1e40af]",
      dark: "#10215e",
    },
    classic: {
      primary: "#1f2937",
      secondary: "from-[#1f2937] to-[#111827]",
      dark: "#000000",
    },
  };
  const activeTheme = layoutThemes[theme];

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-5 font-sans">
      <div className="bg-[#F4F4F4] rounded-[40px] p-8 shadow-sm border border-gray-100">
        {/* Header Section MATCHING STAMP/APPAREL EDITOR */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex gap-4 items-center pl-2">
            {/* Tabs & Labels Group */}
            <div className="flex flex-col gap-2 relative">
              <div className="bg-white rounded-[24px] p-2 flex gap-1 shadow-sm relative z-10 w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-[18px] transition-all duration-300 ${
                      activeTab === tab.id 
                      ? "bg-[#C6131B] text-white shadow-md shadow-red-200" 
                      : "bg-transparent text-[#1F2937] hover:bg-gray-50"
                    }`}
                  >
                    {tab.icon}
                  </button>
                ))}
                {/* Dynamic Speech Bubble Tail */}
                <div 
                   className="absolute -bottom-[6px] w-[18px] h-[18px] bg-white rotate-45 z-0 transition-all duration-300 shadow-sm rounded-sm"
                   style={{ left: `${(tabs.findIndex(t => t.id === activeTab) * 76) + 35}px` }}
                ></div>
              </div>

              {/* Labels below the tabs */}
              <div className="flex relative z-10 mt-1">
                {tabs.map((tab) => (
                  <div key={tab.id} className="w-[76px] flex justify-center">
                    <span className={`text-[12px] font-extrabold ${activeTab === tab.id ? 'text-[#1F2937]' : 'text-gray-400'}`}>
                      {tab.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Front/Back Toggle Group */}
            <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 ml-4 h-fit self-start mt-2">
              <button
                onClick={() => setSide("front")}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${side === "front" ? "bg-[#C6131B] text-white" : "text-gray-500 hover:bg-gray-50 uppercase tracking-widest opacity-60"}`}
              >
                Front View
              </button>
              <button
                onClick={() => setSide("back")}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${side === "back" ? "bg-[#C6131B] text-white" : "text-gray-500 hover:bg-gray-50 uppercase tracking-widest opacity-60"}`}
              >
                Back View
              </button>
            </div>
          </div>

          <button className="bg-[#C6131B] text-white px-8 py-3.5 rounded-[14px] font-bold text-sm tracking-wide shadow-lg shadow-red-200 hover:bg-[#A50F16] transition-all mt-2">
            Customize your card
          </button>
        </div>

        <div className="flex gap-8 mt-4">
          {/* Sidebar Editor Panel */}
          <div
            className="w-1/3 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col gap-8 h-[600px] overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {activeTab === "text" && (
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Card Details
                </h3>

                {[
                  {
                    label: "Full Name",
                    name: "name",
                    placeholder: "e.g. John Doe",
                  },
                  {
                    label: "Job Title",
                    name: "title",
                    placeholder: "e.g. Marketing Manager",
                  },
                  {
                    label: "Company",
                    name: "company",
                    placeholder: "e.g. ACME Solutions",
                  },
                  {
                    label: "Phone Number",
                    name: "phone",
                    placeholder: "+1 (555) 000-0000",
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    placeholder: "hello@example.com",
                  },
                  {
                    label: "Website",
                    name: "website",
                    placeholder: "www.example.com",
                  },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#C6131B] focus:border-transparent outline-none transition-all font-medium text-gray-700"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "style" && (
              <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Typography & Style
                </h3>

                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-500">
                    FONT FAMILY
                  </label>
                  <div className="relative">
                    <select
                      value={style.fontFamily}
                      onChange={(e) =>
                        setStyle({ ...style, fontFamily: e.target.value })
                      }
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none font-semibold text-gray-700"
                    >
                      <option value="Montserrat">Montserrat</option>
                      <option value="Space Mono">Space Mono</option>
                      <option value="Playfair Display">Playfair Display</option>
                    </select>
                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-500">
                    ALIGNMENT
                  </label>
                  <div className="flex bg-gray-50 p-2 rounded-2xl border border-gray-200 gap-2">
                    {[
                      { id: "left", icon: <FaAlignLeft /> },
                      { id: "center", icon: <FaAlignCenter /> },
                      { id: "right", icon: <FaAlignRight /> },
                    ].map((align) => (
                      <button
                        key={align.id}
                        onClick={() =>
                          setStyle({ ...style, alignment: align.id })
                        }
                        className={`flex-1 flex items-center justify-center py-3 rounded-xl transition-all ${style.alignment === align.id ? "bg-white shadow-md text-[#C6131B]" : "text-gray-400 hover:text-gray-600"}`}
                      >
                        {align.icon}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-sm font-bold text-gray-500">
                    TEXT STYLES
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() =>
                        setStyle({ ...style, isBold: !style.isBold })
                      }
                      className={`flex items-center justify-center gap-2 py-4 border-2 rounded-2xl font-bold transition-all ${style.isBold ? "border-[#C6131B] text-[#C6131B] bg-red-50" : "border-gray-100 text-gray-600 hover:bg-gray-50"}`}
                    >
                      <FaBold /> Bold
                    </button>
                    <button
                      onClick={() =>
                        setStyle({ ...style, isItalic: !style.isItalic })
                      }
                      className={`flex items-center justify-center gap-2 py-4 border-2 rounded-2xl font-bold transition-all ${style.isItalic ? "border-[#C6131B] text-[#C6131B] bg-red-50" : "border-gray-100 text-gray-600 hover:bg-gray-50"}`}
                    >
                      <FaItalic /> Italic
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "logo" && (
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Company Logo
                </h3>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-3xl p-10 bg-gray-50 hover:bg-gray-100 transition-all">
                  {logo ? (
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={logo}
                        alt="Uploaded Logo"
                        className="h-24 object-contain"
                      />
                      <button
                        className="text-sm font-bold text-red-500 hover:text-red-700"
                        onClick={() => setLogo(null)}
                      >
                        Remove Logo
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <FaUpload className="text-gray-400 text-xl" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-700">
                          Upload your logo
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                      <label className="mt-4 bg-[#C6131B] text-white px-6 py-2 rounded-xl font-bold cursor-pointer hover:bg-[#9A0F1E] transition-all">
                        Browse Files
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleLogoUpload}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "templates" && (
              <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-left-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Structural Layout
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        id: "classic",
                        name: "Classic",
                        icon: <FaIdCard className="text-2xl mb-2 opacity-80" />,
                      },
                      {
                        id: "minimal",
                        name: "Minimal",
                        icon: (
                          <FaGripLines className="text-2xl mb-2 opacity-80" />
                        ),
                      },
                      {
                        id: "split",
                        name: "Split",
                        icon: (
                          <FaColumns className="text-2xl mb-2 opacity-80" />
                        ),
                      },
                    ].map((layout) => (
                      <button
                        key={layout.id}
                        onClick={() => setCardLayout(layout.id)}
                        className={`flex flex-col items-center justify-center py-4 border-2 rounded-2xl font-bold transition-all ${cardLayout === layout.id ? "border-[#C6131B] text-[#C6131B] bg-red-50" : "border-gray-100 text-gray-500 hover:bg-gray-50"}`}
                      >
                        {layout.icon}
                        <span className="text-xs uppercase tracking-wider">
                          {layout.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Color Themes
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        id: "default",
                        name: "Crimson Red",
                        color: "bg-[#C6131B]",
                      },
                      {
                        id: "modern",
                        name: "Ocean Blue",
                        color: "bg-blue-600",
                      },
                      {
                        id: "classic",
                        name: "Midnight Black",
                        color: "bg-gray-800",
                      },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`flex flex-col items-center gap-3 p-4 border-2 rounded-2xl transition-all ${theme === t.id ? "border-[#C6131B] bg-red-50" : "border-gray-100 hover:bg-gray-50"}`}
                      >
                        <div
                          className={`w-full h-12 rounded-xl ${t.color} shadow-inner`}
                        ></div>
                        <span className="font-bold text-sm text-gray-700">
                          {t.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Design & Preview Area MATCHING STAMP/APPAREL */}
          <div className="w-2/3 flex flex-col gap-8">
            {/* Main Interactive Canvas */}
            <div className="aspect-[1.75/1] bg-white rounded-[48px] shadow-2xl border border-gray-100 flex items-center justify-center p-16 relative overflow-hidden group">
              {/* Premium Background Pattern */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              ></div>
              <div
                className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-500"
                style={{ backgroundColor: activeTheme.primary }}
              ></div>
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-50"></div>

              {/* The Actual Business Card View */}
              <div
                id="card-capture-element"
                className={`w-full h-full max-w-[600px] max-h-[350px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col relative overflow-hidden transition-all duration-700 transform ${side === "back" ? "rotate-y-180" : ""} ${getFontFamilyClass()}`}
              >
                {side === "front" ? (
                  <div className="w-full h-full relative z-10 flex">
                    {/* CLASSIC LAYOUT FRONT */}
                    {cardLayout === "classic" && (
                      <div className="p-10 flex flex-col justify-between w-full h-full z-10">
                        <div className="flex justify-between w-full">
                          <div
                            className={`flex flex-col gap-1 flex-1 ${getAlignmentClass()}`}
                          >
                            <div
                              className="font-black text-2xl tracking-tighter uppercase mb-2"
                              style={{ color: activeTheme.primary }}
                            >
                              {formData.company || "Company"}
                            </div>
                            <div
                              className={`text-2xl text-gray-900 tracking-tight ${style.isBold ? "font-black" : "font-medium"} ${style.isItalic ? "italic" : ""}`}
                            >
                              {formData.name || "Name"}
                            </div>
                            <div
                              className={`text-sm text-[#8a8a8e] uppercase tracking-[0.2em] mt-1 ${style.isBold ? "font-bold" : "font-normal"} ${style.isItalic ? "italic" : ""}`}
                            >
                              {formData.title || "Job Title"}
                            </div>
                          </div>
                          <div
                            className={`w-16 h-16 shrink-0 bg-linear-to-br ${activeTheme.secondary} rounded-xl flex items-center justify-center rotate-12 shadow-lg overflow-hidden`}
                          >
                            {logo ? (
                              <img
                                src={logo}
                                alt="logo"
                                className="w-full h-full object-cover -rotate-12 bg-white"
                              />
                            ) : (
                              <span className="text-white font-black text-2xl italic">
                                C
                              </span>
                            )}
                          </div>
                        </div>

                        <div
                          className={`flex flex-col gap-2 mt-auto w-full ${getAlignmentClass()}`}
                        >
                          {formData.phone && (
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: activeTheme.primary }}
                              ></div>
                              {formData.phone}
                            </div>
                          )}
                          {formData.email && (
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "#d1d5db" }}
                              ></div>
                              {formData.email}
                            </div>
                          )}
                          {formData.website && (
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: "#d1d5db" }}
                              ></div>
                              {formData.website}
                            </div>
                          )}
                        </div>
                        {/* Design Accent Classic */}
                        <div
                          className="absolute right-0 bottom-0 w-32 h-32 rounded-tl-[100px] opacity-10 pointer-events-none"
                          style={{
                            background: `linear-gradient(to top left, ${activeTheme.primary}, transparent)`,
                          }}
                        ></div>
                      </div>
                    )}

                    {/* MINIMAL LAYOUT FRONT */}
                    {cardLayout === "minimal" && (
                      <div className="p-10 flex flex-col justify-center items-center text-center w-full h-full z-10 space-y-6">
                        <div
                          className={`w-16 h-16 shrink-0 bg-linear-to-br ${activeTheme.secondary} rounded-full flex items-center justify-center shadow-md overflow-hidden mx-auto`}
                        >
                          {logo ? (
                            <img
                              src={logo}
                              alt="logo"
                              className="w-full h-full object-cover bg-white"
                            />
                          ) : (
                            <span className="text-white font-black text-2xl italic">
                              M
                            </span>
                          )}
                        </div>
                        <div>
                          <div
                            className={`text-2xl text-gray-900 tracking-tight ${style.isBold ? "font-black" : "font-medium"} ${style.isItalic ? "italic" : ""}`}
                          >
                            {formData.name || "Name"}
                          </div>
                          <div
                            className={`text-xs text-[#8a8a8e] uppercase tracking-[0.2em] mt-1 ${style.isBold ? "font-bold" : "font-normal"} ${style.isItalic ? "italic" : ""}`}
                          >
                            {formData.title || "Job Title"}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-2 justify-center text-xs font-semibold text-gray-600">
                          {formData.phone && <span>{formData.phone}</span>}
                          {formData.email && <span>{formData.email}</span>}
                        </div>
                        {/* Design Accent Minimal */}
                        <div
                          className="absolute left-0 top-0 w-full h-1"
                          style={{ backgroundColor: activeTheme.primary }}
                        ></div>
                      </div>
                    )}

                    {/* SPLIT LAYOUT FRONT */}
                    {cardLayout === "split" && (
                      <div className="flex w-full h-full z-10 bg-white">
                        <div
                          className="w-1/3 h-full flex flex-col items-center justify-center relative shadow-[5px_0_15px_rgba(0,0,0,0.05)] border-r border-gray-100 z-20"
                          style={{
                            background: `linear-gradient(to bottom, ${activeTheme.primary}, ${activeTheme.dark})`,
                          }}
                        >
                          <div
                            className={`w-20 h-20 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-2xl overflow-hidden mb-4`}
                          >
                            {logo ? (
                              <img
                                src={logo}
                                alt="logo"
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span
                                className="font-black text-4xl italic"
                                style={{ color: activeTheme.primary }}
                              >
                                S
                              </span>
                            )}
                          </div>
                          <div className="text-white/80 font-black text-sm tracking-widest uppercase text-center px-4 w-full truncate">
                            {formData.company || "Company"}
                          </div>
                        </div>
                        <div
                          className={`w-2/3 h-full flex flex-col justify-center p-8 bg-gray-50/50 ${getAlignmentClass()}`}
                        >
                          <div
                            className={`text-2xl text-gray-900 tracking-tight ${style.isBold ? "font-black" : "font-medium"} ${style.isItalic ? "italic" : ""}`}
                          >
                            {formData.name || "Name"}
                          </div>
                          <div
                            className={`text-sm text-[#8a8a8e] uppercase tracking-[0.2em] mt-1 mb-8 ${style.isBold ? "font-bold" : "font-normal"} ${style.isItalic ? "italic" : ""}`}
                          >
                            {formData.title || "Job Title"}
                          </div>
                          <div className="flex flex-col gap-3">
                            {formData.phone && (
                              <div className="text-sm font-medium text-gray-600 flex items-center gap-3">
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{
                                    backgroundColor: activeTheme.primary,
                                  }}
                                ></span>
                                {formData.phone}
                              </div>
                            )}
                            {formData.email && (
                              <div className="text-sm font-medium text-gray-600 flex items-center gap-3">
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{
                                    backgroundColor: activeTheme.primary,
                                  }}
                                ></span>
                                {formData.email}
                              </div>
                            )}
                            {formData.website && (
                              <div className="text-sm font-medium text-gray-600 flex items-center gap-3">
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{
                                    backgroundColor: activeTheme.primary,
                                  }}
                                ></span>
                                {formData.website}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="w-full h-full relative z-10 flex"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    {/* CLASSIC LAYOUT BACK */}
                    {cardLayout === "classic" && (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                        <div
                          className={`w-24 h-24 bg-linear-to-br ${activeTheme.secondary} rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500 overflow-hidden`}
                        >
                          {logo ? (
                            <img
                              src={logo}
                              alt="logo"
                              className="w-full h-full object-cover bg-white"
                            />
                          ) : (
                            <span className="text-white font-black text-4xl italic">
                              C
                            </span>
                          )}
                        </div>
                        <div
                          className={`text-center tracking-tighter text-gray-900 uppercase ${style.isBold ? "font-black" : "font-medium"} ${style.isItalic ? "italic" : ""}`}
                          style={{ fontSize: "2rem", lineHeight: "1" }}
                        >
                          {formData.company || "ACME Solutions"}
                        </div>
                        <div className="text-sm font-bold text-[#8a8a8e] tracking-widest uppercase text-center mt-2">
                          {formData.website || "Premium Printing"}
                        </div>
                      </div>
                    )}

                    {/* MINIMAL LAYOUT BACK */}
                    {cardLayout === "minimal" && (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gray-50">
                        <div
                          className={`text-center tracking-widest text-gray-900 uppercase ${style.isBold ? "font-black" : "font-medium"} ${style.isItalic ? "italic" : ""}`}
                          style={{ fontSize: "1.5rem" }}
                        >
                          {formData.company || "ACME Solutions"}
                        </div>
                        <div
                          className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center overflow-hidden mx-auto border-2`}
                          style={{ borderColor: activeTheme.primary }}
                        >
                          {logo ? (
                            <img
                              src={logo}
                              alt="logo"
                              className="w-full h-full object-cover bg-white"
                            />
                          ) : (
                            <span
                              className="font-black text-xs italic"
                              style={{ color: activeTheme.primary }}
                            >
                              M
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* SPLIT LAYOUT BACK */}
                    {cardLayout === "split" && (
                      <div
                        className="w-full h-full flex flex-col items-center justify-center gap-6"
                        style={{
                          background: `linear-gradient(to bottom right, ${activeTheme.primary}, ${activeTheme.dark})`,
                        }}
                      >
                        <div
                          className={`w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-2xl overflow-hidden`}
                        >
                          {logo ? (
                            <img
                              src={logo}
                              alt="logo"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span
                              className="font-black text-4xl italic"
                              style={{ color: activeTheme.primary }}
                            >
                              S
                            </span>
                          )}
                        </div>
                        <div
                          className={`text-center tracking-widest text-white uppercase ${style.isBold ? "font-black" : "font-medium"} ${style.isItalic ? "italic" : ""}`}
                          style={{ fontSize: "1.5rem" }}
                        >
                          {formData.company || "ACME Solutions"}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Hover Indicator */}
              <button
                onClick={() => setSide(side === "front" ? "back" : "front")}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-200 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-bold text-gray-700 hover:bg-white hover:border-gray-300 transition-all transform hover:-translate-y-1 active:scale-95 z-20"
              >
                <FaSyncAlt style={{ color: activeTheme.primary }} /> Flip to{" "}
                {side === "front" ? "Back" : "Front"}
              </button>
            </div>

            {/* Application Mockup & Actions */}
            <div className="flex gap-8">
              <div className="flex-1 bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 flex items-center gap-8">
                <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border-2 border-gray-100">
                  <img
                    src="/business-img1.png"
                    className="w-24 h-24 object-contain brightness-105"
                    alt="Card Bundle"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg text-gray-800">
                    Premium Matte Finish
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    Standard 3.5" x 2.0" • High-quality 16pt cardstock with
                    smooth sensory finish.
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-2xl font-black text-[#C6131B]">
                      $24.99
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full uppercase">
                      Best Value
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions MATCHING STAMP/APPAREL EDITOR */}
            <div className="flex justify-end gap-5 mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-white border-2 border-gray-200 text-[#1F2937] px-10 py-3.5 rounded-[16px] font-bold text-[15px] hover:bg-gray-50 transition-colors shadow-sm"
              >
                Add to cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-[#C6131B] text-white px-10 py-3.5 rounded-[16px] font-bold text-[15px] flex items-center gap-3 shadow-[0_4px_14px_rgba(198,19,27,0.25)] hover:bg-[#A50F16] hover:shadow-lg transition-all"
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

export default CardEditor;
