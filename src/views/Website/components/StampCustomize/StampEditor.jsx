import React, { useState, useContext } from "react";
import { FaTextHeight, FaImage, FaTools, FaShapes, FaBold, FaItalic, FaPaintBrush, FaPlus, FaBars, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";

const StampEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const product = location.state?.product || {
    id: "stamp-tr4910",
    name: 'TR 4910 (3/8" X 11/32")',
    price: 29.98,
    img: "/trodatprinty-img1.png"
  };

  const [activeTab, setActiveTab] = useState("text");
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [lines, setLines] = useState(["Frau Dr. med. Wiebke Freulein", "Sandstr. 11, 44143 Dortmund", "Telefon: 0271 - 12 12 123"]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      qty: 1,
      customization: { fontFamily, fontSize, isBold, isItalic, lines }
    });
    toast.success("Added to cart!");
  };

  const handleCheckout = () => {
    navigate("/check-out", {
      state: {
        buyNowProduct: {
           ...product,
           qty: 1,
           customization: { fontFamily, fontSize, isBold, isItalic, lines }
        }
      }
    });
  };

  const tabs = [
    { id: "text", name: "Text", icon: <FaTextHeight className="text-xl" /> },
    { id: "image", name: "Image", icon: <FaImage className="text-xl" /> },
    { id: "tool", name: "Tool", icon: <FaTools className="text-xl" /> },
    { id: "element", name: "Element", icon: <FaShapes className="text-xl" /> },
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-5 font-sans">
      <div className="bg-[#f0f2f5] rounded-3xl p-8 shadow-sm">
        
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
                <span className="text-gray-400 line-through text-sm">List Price: $31.95</span>
              </div>
              <p className="text-green-600 text-sm font-semibold">You Save: $1.95</p>
            </div>
            <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
               <img src="/trodatprinty-img1.png" className="w-full h-full object-contain" alt="Selected Stamp" />
            </div>
            <button onClick={handleCheckout} className="bg-[#C6131B] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#A50F16] transition-colors">
              Customize your stamp
            </button>
          </div>
        </div>

        <div className="flex gap-8 mt-10">
          
          {/* Sidebar Controls */}
          <div className="w-1/3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[600px] flex flex-col gap-6">
            
            {/* Typography Section */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Typography</label>
              <div className="relative">
                <select 
                  value={fontFamily} 
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none font-medium"
                >
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Arial">Arial</option>
                  <option value="Helvetica">Helvetica</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Font Size & Styles */}
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-bold mb-2">Font Size</label>
                <div className="relative">
                  <select 
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none font-medium"
                  >
                    {[12, 14, 16, 18, 20, 24].map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex gap-2 pb-1">
                <button onClick={() => setIsBold(!isBold)} className={`w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 ${isBold ? 'bg-gray-200 shadow-inner' : ''}`}><FaBold className="text-gray-600" /></button>
                <button onClick={() => setIsItalic(!isItalic)} className={`w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 ${isItalic ? 'bg-gray-200 shadow-inner' : ''}`}><FaItalic className="text-gray-600" /></button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50"><FaPaintBrush className="text-gray-600" /></button>
              </div>
            </div>

            {/* Line Inputs */}
            <div className="flex flex-col gap-4">
              {lines.map((text, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <label className="text-gray-600 text-sm font-semibold">Line {i + 1}</label>
                  <div className="relative flex items-center">
                    <input 
                      type="text" 
                      value={text}
                      onChange={(e) => {
                        const newLines = [...lines];
                        newLines[i] = e.target.value;
                        setLines(newLines);
                      }}
                      placeholder="Enter your text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none"
                    />
                    <FaBars className="absolute right-4 text-gray-300" />
                  </div>
                </div>
              ))}
              <button 
                onClick={() => setLines([...lines, ""])}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl py-3 font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                style={{ width: 'fit-content', paddingLeft: '24px', paddingRight: '24px' }}
              >
                <FaPlus className="text-sm" /> Add More
              </button>
            </div>

            {/* Positioning Sliders */}
            <div className="mt-4 flex flex-col gap-6 border-t pt-6">
               <div className="flex flex-col gap-2">
                 <div className="flex justify-between font-bold text-gray-700">
                   <span>Horizontal position</span>
                   <span className="text-gray-400">[ 22.8 ]</span>
                 </div>
                 <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C6131B]" />
               </div>
               <div className="flex flex-col gap-2">
                 <div className="flex justify-between font-bold text-gray-700">
                   <span>Vertical position</span>
                   <span className="text-gray-400">[ 22.8 ]</span>
                 </div>
                 <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C6131B]" />
               </div>
            </div>

          </div>

          {/* Design Area */}
          <div className="w-2/3 flex flex-col gap-6">
            
            <div className="flex-1 bg-white rounded-[40px] shadow-sm border border-gray-100 flex items-center justify-center p-12 relative overflow-hidden">
               {/* Blueprint Grid Background */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               
               {/* Stamp Design Box */}
               <div className="relative border-4 border-dashed border-blue-600 rounded-[30px] p-12 flex flex-col items-center justify-center bg-white shadow-xl min-w-[500px]"
                    style={{
                      fontFamily: fontFamily,
                      fontWeight: isBold ? 'bold' : 'normal',
                      fontStyle: isItalic ? 'italic' : 'normal',
                      fontSize: `${fontSize}px`
                    }}>
                  <div className="flex flex-col items-center justify-center">
                     {lines.map((text, idx) => (
                       <div key={idx} className="text-blue-600 mb-2">
                         {text || `Line ${idx + 1} Placeholder`}
                       </div>
                     ))}
                  </div>
               </div>

               {/* Real Application Preview Image Small */}
               <div className="absolute right-8 top-12 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="/stamp-preview.jpg" className="w-full h-full object-cover" alt="Real application" />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 opacity-70">
                     <div className="border-2 border-dashed border-blue-600 p-2 scale-50">
                        <p className="text-[10px] font-bold text-blue-600 text-center">STAMP PREVIEW</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-4 mt-4">
               <button onClick={handleAddToCart} className="bg-white border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                  Add to cart
               </button>
               <button onClick={handleCheckout} className="bg-[#C6131B] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#A50F16] transition-colors">
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
