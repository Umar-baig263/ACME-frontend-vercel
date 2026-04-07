import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";
import { FaTextHeight, FaImage, FaTools, FaShapes, FaArrowRight } from "react-icons/fa";

export default function ProductCustomizer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = location.state?.product || {
    id: "corporate-bottle",
    name: "Olympian Water Bottle - 27 oz",
    price: 18.95,
    img: "/bottle.png"
  };

  const [activeTab, setActiveTab] = useState("Image");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [horizontalPos, setHorizontalPos] = useState(50);
  const [verticalPos, setVerticalPos] = useState(50);
  const [rotationPos, setRotationPos] = useState(0);

  const tabs = [
    { id: "Text", icon: <FaTextHeight className="text-xl" /> },
    { id: "Image", icon: <FaImage className="text-xl" /> },
    { id: "Tool", icon: <FaTools className="text-xl" /> },
    { id: "Element", icon: <FaShapes className="text-xl" /> }
  ];

  const products = [
    { id: 1, img: "/bottle.png" },
    { id: 2, img: "/customize-2.png" }, // mug
    { id: 3, img: "/customize-3.png" }, // pen
    { id: 4, img: "/customize-4.png" }, // box
  ];

  const handleUpload = () => {
    setUploadedImage("User_Logo.png");
    toast.success("Image uploaded successfully!");
  };

  const getCustomizationLines = () => [
    `Tab: ${activeTab}`,
    `Horizontal Pos: ${horizontalPos}%`,
    `Vertical Pos: ${verticalPos}%`,
    `Rotation: ${rotationPos}°`,
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
    toast.success("Corporate item added to cart!");
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

  return (
    <div className="max-w-[1440px] mx-auto py-12 px-6 font-sans">
      <div className="bg-[#f8fafc] rounded-[40px] p-10 shadow-2xl border border-gray-100 mt-20 md:mt-2">
        
        {/* Top Product Selector */}
        <div className="flex items-center gap-6 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex-wrap">
          <div className="flex bg-gray-50 rounded-xl p-2 max-w-sm w-full outline outline-1 outline-gray-200">
            <div className="flex flex-col justify-center px-4 w-full text-center">
              <div className="text-lg font-black text-gray-800">{product.name}</div>
              <div className="text-md text-[#C6131B] font-bold">${product.price}</div>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto">
            {products.map((p) => (
              <div key={p.id} className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:border-[#C6131B] transition-colors relative overflow-hidden group">
                <img src={p.img} alt={`Product ${p.id}`} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Editor Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDEBAR CONTROLS */}
          <div className="w-full lg:w-[360px] shrink-0">
             <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm flex flex-col gap-6">
                
                {/* Tabs */}
                <div className="flex justify-between gap-2">
                   {tabs.map((t) => (
                      <button 
                        key={t.id} 
                        onClick={() => setActiveTab(t.id)}
                        className={`flex-1 aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${activeTab === t.id ? "bg-[#C6131B] text-white shadow-lg shadow-red-500/30 -translate-y-1" : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}
                      >
                         {t.icon}
                         <span className="text-[10px] font-bold uppercase tracking-wider">{t.id}</span>
                      </button>
                   ))}
                </div>

                {/* Upload Image Section */}
                <div className="pt-2">
                  <button onClick={handleUpload} className="w-full border-2 border-dashed border-gray-300 py-6 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 hover:border-gray-400 transition-colors flex flex-col items-center gap-2">
                    <FaImage className="text-3xl text-gray-400" />
                    {uploadedImage ? `Uploaded: ${uploadedImage}` : "+ Upload Custom Logo"}
                  </button>
                </div>

                {uploadedImage && (
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                     <p className="text-xs font-bold text-gray-500 mb-2">Attached Element:</p>
                     <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm">
                        <span className="text-sm text-gray-700 font-medium truncate flex-1">{uploadedImage}</span>
                        <button className="bg-[#C6131B] text-white text-[10px] px-3 py-1.5 rounded-lg font-bold hover:bg-red-800 transition-colors">COPY</button>
                        <button onClick={() => setUploadedImage(null)} className="bg-gray-200 text-gray-700 text-[10px] px-3 py-1.5 rounded-lg font-bold hover:bg-gray-300 transition-colors">DEL</button>
                     </div>
                  </div>
                )}

                {/* Position Sliders */}
                <div className="flex flex-col gap-6 pt-4 border-t border-gray-100">
                  {/* Horizontal */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between font-bold text-gray-700 text-xs">
                      <span>Horizontal Position</span>
                      <span className="text-gray-400">[{horizontalPos}%]</span>
                    </div>
                    <input type="range" min="0" max="100" value={horizontalPos} onChange={(e)=>setHorizontalPos(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C6131B]" />
                  </div>
                  {/* Vertical */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between font-bold text-gray-700 text-xs">
                      <span>Vertical Position</span>
                      <span className="text-gray-400">[{verticalPos}%]</span>
                    </div>
                    <input type="range" min="0" max="100" value={verticalPos} onChange={(e)=>setVerticalPos(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C6131B]" />
                  </div>
                  {/* Rotation */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between font-bold text-gray-700 text-xs">
                      <span>Rotation Degree</span>
                      <span className="text-gray-400">[{rotationPos}°]</span>
                    </div>
                    <input type="range" min="-180" max="180" value={rotationPos} onChange={(e)=>setRotationPos(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C6131B]" />
                  </div>
                </div>

             </div>
          </div>

          {/* MAIN PREVIEW CANVAS */}
          <div className="flex-1 bg-white rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden flex items-center justify-center p-12 min-h-[500px]">
             
             {/* Main Big Item */}
             <div className="relative group">
                <img src={product.img} alt="Product Item" className="h-[450px] object-contain drop-shadow-2xl" />
                
                {/* Render bounding box for logo */}
                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-28 border-[3px] border-dashed border-[#C6131B] rounded-xl bg-[#C6131B]/10 flex items-center justify-center transition-all shadow-[0_0_20px_rgba(198,19,27,0.2)] backdrop-blur-sm"
                  style={{
                    transform: `translate(-50%, -50%) translate(${horizontalPos - 50}px, ${verticalPos - 50}px) rotate(${rotationPos}deg)`
                  }}
                >
                  <span className="font-black text-[#C6131B] text-center text-sm px-4 tracking-widest leading-snug drop-shadow-lg">
                    {uploadedImage ? "LOGO ATTACHED!" : "YOUR LOGO HERE"}
                  </span>
                </div>
             </div>

             {/* Small right side thumbnail box */}
             <div className="absolute right-6 top-6 w-28 h-28 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center p-2 shadow-inner">
               <img src={product.img} alt="Thumbnail preview" className="object-contain h-full w-full opacity-60 mix-blend-multiply" />
             </div>
          </div>
        </div>

        {/* BOTTOM ACTIONS */}
        <div className="flex justify-end gap-5 mt-8 pt-8 border-t border-gray-200">
           <button onClick={handleAddToCart} className="bg-white border-2 border-gray-200 text-gray-700 px-12 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-gray-50 transition-all hover:border-gray-300 shadow-sm">
              Add to cart
           </button>
           <button onClick={handleCheckout} className="bg-linear-to-r from-[#C6131B] to-[#9A0F1E] text-white px-12 py-4 rounded-xl font-black flex items-center gap-3 uppercase tracking-widest text-sm hover:shadow-[0_10px_30px_-5px_rgba(198,19,27,0.4)] transition-all transform hover:-translate-y-1">
              Proceed to checkout <FaArrowRight className="text-lg" />
           </button>
        </div>

      </div>
    </div>
  );
}
