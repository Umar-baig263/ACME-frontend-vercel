import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";
import * as htmlToImage from "html-to-image";
import { FaTextHeight, FaImage, FaTools, FaShapes, FaTrash, FaClone, FaPlus, FaStar, FaHeart, FaCertificate, FaShieldAlt, FaLightbulb, FaSmile, FaCrown, FaFire, FaBolt, FaSkull, FaRocket, FaGhost, FaArrowRight } from "react-icons/fa";

export default function ProductCustomizer() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Initial Product Data
  const initialProduct = location.state?.product || {
    name: "Custom Project",
    price: 0.00,
    img: null,
  };

  // Product Variation State
  const [currentBaseImg, setCurrentBaseImg] = useState(initialProduct.img);
  const [currentProductName, setCurrentProductName] = useState(initialProduct.name);
  const [currentProductPrice, setCurrentProductPrice] = useState(initialProduct.price);

  // UI State
  const [activeTab, setActiveTab] = useState("Image");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [items, setItems] = useState([]);
  const [draggingItemId, setDraggingItemId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedItemId) {
        const item = items.find(i => i.id === selectedItemId);
        if (item) {
            if (item.type === 'text') setActiveTab('Text');
            else if (item.type === 'element') setActiveTab('Art');
            else if (item.type === 'image') setActiveTab('Image');
        }
    }
  }, [selectedItemId]);

  // Find the currently selected item
  const selectedItem = items.find((item) => item.id === selectedItemId);

  const artElements = [
    { icon: <FaStar />, name: "Star" },
    { icon: <FaHeart />, name: "Heart" },
    { icon: <FaCertificate />, name: "Badge" },
    { icon: <FaShieldAlt />, name: "Shield" },
    { icon: <FaLightbulb />, name: "Idea" },
    { icon: <FaSmile />, name: "Smile" },
    { icon: <FaCrown />, name: "Crown" },
    { icon: <FaFire />, name: "Fire" },
    { icon: <FaBolt />, name: "Bolt" },
    { icon: <FaSkull />, name: "Skull" },
    { icon: <FaRocket />, name: "Rocket" },
    { icon: <FaGhost />, name: "Ghost" }
  ];

  const colorOptions = [
    "#000000", "#FFFFFF", "#FF0000", "#0000FF", "#00FF00", 
    "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080"
  ];

  const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&family=Lobster&family=Roboto+Mono:wght@700&family=Permanent+Marker&family=Inter:wght@400;700;900&family=Righteous&family=Fredoka+One&family=Shadows+Into+Light&family=Monoton&family=Dancing+Script&display=swap');
`;

  const fontOptions = [
    "Inter", "Bebas Neue", "Pacifico", "Lobster", "Roboto Mono", 
    "Playfair Display", "Permanent Marker", "Monoton"
  ];

  // Add Item Logic
  const addItem = (type, content) => {
    const newItem = {
      id: Date.now(),
      type,
      content,
      x: 50,
      y: 65,
      scale: 40,
      rotate: 0,
      color: "#000000",
      font: "Inter",
      hasBorder: false,
    };
    setItems((prev) => [...prev, newItem]);
  };

  // Image Upload Handler (for design)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => addItem("image", ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Base Product Upload Handler
  const handleBaseUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setCurrentBaseImg(ev.target.result);
        if (currentProductName === "Custom Project") setCurrentProductName("My Custom Product");
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove Base Image
  const removeBaseImage = () => {
    setCurrentBaseImg(null);
    setCurrentProductName("Custom Project");
    toast.info("Base item removed.");
  };

  // Update selected item values
  const updateSelected = (key, val) => {
    if (!selectedItemId) return;
    setItems((prev) =>
      prev.map((item) => (item.id === selectedItemId ? { ...item, [key]: val } : item))
    );
  };

  // Delete Item
  const deleteItem = () => {
    if (!selectedItemId) return;
    setItems((prev) => prev.filter((item) => item.id !== selectedItemId));
    setSelectedItemId(null);
  };

  // Duplicate Item
  const copyItem = () => {
    if (!selectedItem) return;
    const newItem = { ...selectedItem, id: Date.now(), x: selectedItem.x + 2, y: selectedItem.y + 2 };
    setItems((prev) => [...prev, newItem]);
    setSelectedItemId(newItem.id);
  };

  // Dragging Logic
  const handleMouseDown = (e, id) => {
    e.preventDefault();
    setSelectedItemId(id);
    setDraggingItemId(id);
  };

  const handleMouseMove = (e) => {
    if (!draggingItemId || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setItems((prev) =>
      prev.map((item) =>
        item.id === draggingItemId ? { ...item, x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) } : item
      )
    );
  };

  const handleMouseUp = () => {
    setDraggingItemId(null);
  };

  useEffect(() => {
    if (draggingItemId) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingItemId]); // Remove unnecessary dependencies that reset listeners on every move

  // Cart / Checkout Process
  const handleProcess = async (shouldNavigate) => {
    const captureEl = document.getElementById("main-bottle-area");
    if (!captureEl) return;

    const TID = toast.loading(shouldNavigate ? "Preparing Checkout..." : "Adding to cart...");

    try {
      await new Promise((r) => setTimeout(r, 100));
      const dataUrl = await htmlToImage.toJpeg(captureEl, {
        quality: 0.8,
        backgroundColor: "#ffffff",
      });

      addToCart({
        id: Date.now(),
        name: currentProductName,
        price: currentProductPrice,
        qty: 1,
        image: dataUrl,
        customDetails: {
          design: items,
          baseProduct: currentProductName
        }
      });

      toast.success("Design saved successfully!", { id: TID });
      if (shouldNavigate) navigate("/check-out");
    } catch (err) {
      toast.error("Process failed, try again.", { id: TID });
    }
  };

  return (
    <div className=" min-h-screen py-4 px-24 font-sans">
      <div className="bg-[#E9E9E9] rounded-xl shadow-md p-8">
        
        {/* Top Toolbar */}
        <div className="flex items-center gap-4 mb-4">
          {[
            { id: "Text", icon: <FaTextHeight /> },
            { id: "Image", icon: <FaImage /> },
            { id: "Tool", icon: <FaTools /> },
            { id: "Element", icon: <FaShapes /> },
          ].map((tab) => (
            <div
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === "Text" && activeTab !== "Text") addItem("text", "YOUR TEXT");
              }}
              className={`flex flex-col items-center justify-center w-16 h-14 rounded-md cursor-pointer transition-all ${
                activeTab === tab.id ? "bg-[#C6131B] text-white shadow-lg font-bold" : "bg-[#FFFFFF] text-gray-400 hover:bg-gray-100"
              }`}
            >
              <div className="text-lg">{tab.icon}</div>
              <div className="text-[10px] uppercase mt-1 tracking-tighter">{tab.id}</div>
            </div>
          ))}

          {/* Product Variation Tabs */}
          <div className="flex gap-3 ml-6">
            <div className="bg-[#FBFBFB] p-2 w-48 rounded-lg border border-white/50 shadow-sm flex flex-col justify-center">
              <div className="text-[12px] font-bold text-gray-800 line-clamp-1">{currentProductName}</div>
              <div className="text-[11px] text-[#C6131B] font-bold">${currentProductPrice}</div>
            </div>

            {[
              { img: "/customize-1.png", name: "Olympian Bottle", price: 18.95 },
              { img: "/customize-2.png", name: "Travel Mug", price: 22.50 },
              { img: "/customize-3.png", name: "Ceramic Mug", price: 12.00 },
              { img: "/customize-4.png", name: "Sport Bottle", price: 15.99 },
            ].map((p, i) => (
              <div
                key={i}
                onClick={() => {
                   setCurrentBaseImg(p.img);
                   setCurrentProductName(p.name);
                   setCurrentProductPrice(p.price);
                }}
                className={`w-14 h-14 bg-[#D9D9D9] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${currentBaseImg === p.img ? 'border-[#C6131B]' : 'border-transparent'}`}
              >
                <img src={p.img} alt={`icon-${i}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-6 h-[550px]">
          
          {/* Left Panel: Tabs Content & Controls */}
          <div className="w-1/4 bg-[#FBFBFB] p-6 rounded-2xl shadow-sm border border-white flex flex-col gap-6 overflow-y-auto">
            
            {/* Tab Specific Content */}
            <div className="flex-1">
                {activeTab === 'Image' && (
                    <div className="flex flex-col gap-4">
                        {!currentBaseImg ? (
                            <label className="w-full border-2 border-dashed border-[#C6131B] py-8 rounded-xl text-[#C6131B] font-bold text-xs flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-red-50 transition-all">
                                <input type="file" className="hidden" onChange={handleBaseUpload} accept="image/*" />
                                <FaPlus className="text-xl" /> Upload Base Item
                            </label>
                        ) : (
                            <button 
                                onClick={removeBaseImage}
                                className="w-full py-4 bg-red-50 text-[#C6131B] rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 border border-red-100"
                            >
                                <FaTrash /> Remove Base Item
                            </button>
                        )}
                        <p className="text-[10px] text-gray-400 text-center italic">Upload the item you want to design (e.g. Bottle, Cup, Shirt)</p>
                        
                        <div className="h-[1px] bg-gray-100 my-2"></div>

                        <label className="w-full border-2 border-dashed border-gray-200 py-6 rounded-xl text-gray-400 font-bold text-xs flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition-all">
                          <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                          <FaPlus className="text-xl" /> Add Design / Logo
                        </label>
                    </div>
                )}

                {activeTab === 'Text' && (
                    <button onClick={() => addItem('text', 'YOUR TEXT')} className="w-full py-4 border-2 border-dashed border-[#C6131B]/20 text-[#C6131B] rounded-xl text-xs font-black uppercase tracking-widest hover:border-[#C6131B] transition-all">
                        + Add New Text
                    </button>
                )}

                {activeTab === 'Element' && (
                    <div className="grid grid-cols-4 gap-2">
                        {artElements.map((el, i) => (
                            <button key={i} onClick={() => addItem('element', el.icon)} className="aspect-square bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-xl text-gray-300 hover:text-[#C6131B] hover:bg-white transition-all">
                                {el.icon}
                            </button>
                        ))}
                    </div>
                )}

                {activeTab === 'Tool' && (
                    <div className="flex flex-col gap-2">
                        <div className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Active Layers</div>
                        {items.length === 0 && <p className="text-center text-gray-300 py-10 italic text-[10px]">No layers added yet</p>}
                        {items.map(item => (
                            <div key={item.id} onClick={() => setSelectedItemId(item.id)} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${selectedItemId === item.id ? "border-[#C6131B] bg-red-50" : "bg-white border-gray-50 hover:bg-gray-100"}`}>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-[8px] font-black text-gray-400 uppercase">{item.type}</p>
                                    <p className="text-[10px] font-bold text-gray-700 truncate">{item.type === 'text' ? item.content : 'Graphic Item'}</p>
                                </div>
                                <button onClick={(e) => { e.stopPropagation(); deleteItem(); }} className="text-red-200 hover:text-red-500"><FaTrash /></button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Selection Controls */}
            {selectedItem && (
               <div className="flex flex-col gap-6 pt-4 border-t border-gray-100 animate-in slide-in-from-left-2">
                  <div className="flex gap-2">
                    <button onClick={copyItem} className="flex-1 py-3 bg-black text-white rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><FaClone /> Copy</button>
                    <button onClick={deleteItem} className="flex-1 py-3 bg-[#C6131B] text-white rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2"><FaTrash /> Delete</button>
                  </div>

                  {[
                    { label: "Vertical Pos", key: "y", max: 100 },
                    { label: "Horizontal Pos", key: "x", max: 100 },
                    { label: "Rotation", key: "rotate", max: 360 },
                    { label: "Scale", key: "scale", max: 150 },
                  ].map((cfg) => (
                    <div key={cfg.key} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-tighter text-gray-400">
                        <span>{cfg.label}</span>
                        <span className="text-[#C6131B] font-mono">[{selectedItem[cfg.key]?.toFixed(0)}]</span>
                      </div>
                      <input type="range" min="0" max={cfg.max} value={selectedItem[cfg.key]} onChange={(e) => updateSelected(cfg.key, parseFloat(e.target.value))} className="w-full h-1 bg-gray-100 appearance-none accent-[#C6131B] rounded-full cursor-pointer" />
                    </div>
                  ))}

                  {/* Border/Outline Toggle for Text */}
                  {selectedItem.type === 'text' && (
                      <div className="flex flex-col gap-4 pt-2">
                        <div className="flex flex-col gap-2">
                            <div className="text-[9px] font-black uppercase tracking-tighter text-gray-400">Font Family</div>
                            <div className="grid grid-cols-2 gap-2">
                                {fontOptions.map(font => (
                                    <button
                                        key={font}
                                        onClick={() => updateSelected('font', font)}
                                        className={`py-2 px-1 rounded-lg border text-[10px] transition-all truncate ${selectedItem.font === font ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'}`}
                                        style={{ fontFamily: font }}
                                    >
                                        {font}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-[9px] font-black uppercase tracking-tighter text-gray-400">Text Outline</div>
                            <button 
                                onClick={() => updateSelected('hasBorder', !selectedItem.hasBorder)}
                                className={`w-full py-2 rounded-lg text-[10px] font-bold border transition-all ${selectedItem.hasBorder ? 'bg-[#C6131B] text-white border-[#C6131B]' : 'bg-white text-gray-400 border-gray-100'}`}
                            >
                                {selectedItem.hasBorder ? 'Remove Outline' : 'Add Outline'}
                            </button>
                        </div>
                      </div>
                  )}

                  {/* Color Picker for Text and Elements */}
                  {(selectedItem.type === 'text' || selectedItem.type === 'element') && (
                      <div className="flex flex-col gap-3 pt-2">
                          <div className="text-[9px] font-black uppercase tracking-tighter text-gray-400">Choose Color</div>
                          <div className="flex flex-wrap gap-2">
                              {colorOptions.map(color => (
                                  <button
                                    key={color}
                                    onClick={() => updateSelected('color', color)}
                                    className={`w-6 h-6 rounded-full border border-gray-100 transition-transform ${selectedItem.color === color ? 'scale-125 ring-2 ring-[#C6131B] ring-offset-2' : 'hover:scale-110'}`}
                                    style={{ backgroundColor: color }}
                                  />
                              ))}
                          </div>
                      </div>
                  )}
               </div>
            )}
            
            {!selectedItem && (
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100 italic text-[10px] text-gray-400">
                    Select an element on the canvas to customize its positioning.
                </div>
            )}
          </div>

          {/* Center Canvas */}
          <div className="flex-1 bg-white rounded-[40px] shadow-inner border border-gray-100 relative group flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)', backgroundSize: '30px 30px' }}></div>
             
             <div 
                id="main-bottle-area" 
                onClick={() => setSelectedItemId(null)}
                className="relative h-full w-full flex items-center justify-center p-10 bg-white cursor-default"
             >
                {currentBaseImg ? (
                    <>
                        <img src={currentBaseImg} alt="base" className="h-full object-contain drop-shadow-2xl pointer-events-none" />
                        
                        <div ref={containerRef} className="absolute inset-0 z-10 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e, item.id); }}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`absolute cursor-move select-none transition-shadow`}
                                        style={{
                                            left: `${item.x}%`,
                                            top: `${item.y}%`,
                                            transform: `translate(-50%, -50%) scale(${item.scale/50}) rotate(${item.rotate}deg)`,
                                        }}
                                    >
                                        {item.type === "image" && <img src={item.content} className="max-h-[300px] object-contain opacity-80 mix-blend-multiply" alt="m" />}
                                        {item.type === "text" && (
                                            <div 
                                                onDoubleClick={(e) => { e.stopPropagation(); }} // Allow text selection on double click maybe
                                                onBlur={(e) => updateSelected("content", e.target.innerText)}
                                                contentEditable 
                                                suppressContentEditableWarning={true}
                                                className="whitespace-nowrap font-black text-3xl outline-none px-2"
                                                style={{ 
                                                    color: item.color, 
                                                    fontFamily: item.font,
                                                    WebkitTextStrokeWidth: item.hasBorder ? '1.5px' : '0px',
                                                    WebkitTextStrokeColor: item.color === '#000000' ? '#ffffff' : '#000000'
                                                }}
                                            >
                                                {item.content}
                                            </div>
                                        )}
                                        {item.type === "element" && <div className="text-6xl" style={{ color: item.color }}>{item.content}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <label className="flex flex-col items-center justify-center gap-4 cursor-pointer group">
                        <input type="file" className="hidden" onChange={handleBaseUpload} accept="image/*" />
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-[#C6131B] group-hover:bg-red-50 transition-all">
                            <FaPlus className="text-2xl text-gray-300 group-hover:text-[#C6131B]" />
                        </div>
                        <div className="text-center">
                            <p className="font-black uppercase tracking-widest text-[#C6131B]">Upload your Item</p>
                            <p className="text-[10px] text-gray-400 font-bold mt-1">PNG or JPG (e.g. your bottle, bag, or shirt image)</p>
                        </div>
                    </label>
                )}
             </div>
             <div className="absolute top-6 px-4 py-1.5 bg-gray-50 rounded-full text-[8px] font-black uppercase tracking-widest text-gray-300">Customization Workspace</div>
          </div>

          {/* Right Live Preview */}
          <div className="w-1/6 flex flex-col items-center justify-center gap-6">
            <div className="bg-[#423B3B] p-4 h-[250px] w-full rounded-[24px] shadow-2xl relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
               <div className="relative transform scale-50 mt-10 h-full flex items-center justify-center">
                   {currentBaseImg ? (
                       <>
                        <img src={currentBaseImg} className="h-full object-contain brightness-90 shadow-2xl" alt="p" />
                        {items.map(item => (
                            <div key={item.id} className="absolute opacity-80" style={{ left: `${item.x}%`, top: `${item.y}%`, transform: `translate(-50%, -50%) scale(${(item.scale/50) * 0.2}) rotate(${item.rotate}deg)` }}>
                                {item.type === 'image' && <img src={item.content} alt="m" />}
                                {item.type === 'text' && <span className="font-bold text-white text-5xl">{item.content}</span>}
                                {item.type === 'element' && <div className="text-white text-7xl">{item.content}</div>}
                            </div>
                        ))}
                       </>
                   ) : (
                       <div className="w-32 h-32 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center">
                           <FaImage className="text-white/10 text-4xl" />
                       </div>
                   )}
               </div>
               <span className="absolute bottom-4 text-[8px] font-black text-white/40 uppercase tracking-[0.2em] z-20">Live Preview</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button onClick={() => handleProcess(false)} className="px-10 py-4 bg-white border border-gray-100 rounded-xl text-[11px] font-black uppercase text-gray-800 tracking-widest hover:bg-gray-50 shadow-sm transition-all active:scale-95">Add to cart</button>
          <button onClick={() => handleProcess(true)} className="px-10 py-4 bg-[#C6131B] text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#A50F16] shadow-xl shadow-red-200 transition-all flex items-center gap-2 active:scale-95">Proceed to Checkout <FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
}
