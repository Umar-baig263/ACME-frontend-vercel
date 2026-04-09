import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";
import * as htmlToImage from "html-to-image";
import {
  FaTextHeight,
  FaImage,
  FaTools,
  FaShapes,
  FaUndo,
  FaRedo,
  FaChevronDown,
  FaTrash,
  FaArrowUp,
  FaArrowDown,
  FaClone,
  FaExpand,
  FaAlignCenter,
  FaStar,
  FaHeart,
  FaCertificate,
  FaShieldAlt,
  FaLightbulb,
  FaSmile,
  FaCrown,
  FaFire,
  FaBolt,
  FaSkull,
  FaRocket,
  FaGhost,
  FaAnchor,
  FaBicycle,
  FaFootballBall,
  FaBasketballBall,
  FaGlassMartini,
  FaMusic,
  FaGem,
  FaLeaf,
} from "react-icons/fa";

// Import Google Fonts for the editor
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&family=Lobster&family=Roboto+Mono:wght@700&family=Permanent+Marker&family=Inter:wght@400;700;900&family=Righteous&family=Fredoka+One&family=Shadows+Into+Light&family=Monoton&family=Dancing+Script&display=swap');
`;

const ApparelEditor = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // Core State
  const [activeTab, setActiveTab] = useState("image");
  const [side, setSide] = useState("front");
  const [apparelColor, setApparelColor] = useState("#FFFFFF");
  const [size, setSize] = useState("M");
  const [material, setMaterial] = useState("Cotton base");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [draggingItemId, setDraggingItemId] = useState(null);
  const containerRef = useRef(null);

  // Design Data Store
  const [viewData, setViewData] = useState({
    front: { items: [] },
    back: { items: [] },
  });

  // History Stack for Undo/Redo
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const currentItems = viewData[side].items;
  const selectedItem = currentItems.find((item) => item.id === selectedItemId);

  const tabs = [
    { id: "text", name: "Text", icon: <FaTextHeight className="text-2xl" /> },
    { id: "image", name: "Image", icon: <FaImage className="text-2xl" /> },
    { id: "tool", name: "Layers", icon: <FaTools className="text-2xl" /> },
    { id: "element", name: "Art", icon: <FaShapes className="text-2xl" /> },
  ];

  const colorOptions = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#008000",
    "#800080",
    "#FFC0CB",
    "#FFA500",
    "#A52A2A",
  ];
  const fontOptions = [
    "Inter",
    "Bebas Neue",
    "Pacifico",
    "Lobster",
    "Roboto Mono",
    "Permanent Marker",
    "Righteous",
    "Fredoka One",
    "Shadows Into Light",
    "Monoton",
    "Dancing Script",
  ];

  // Save state to history for Undo/Redo
  const saveHistory = (newData) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(newData)));
    if (newHistory.length > 20) newHistory.shift(); // Max 20 steps
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setViewData(JSON.parse(JSON.stringify(history[prevIndex])));
      setHistoryIndex(prevIndex);
      toast.info("Undo: Previous step", { autoClose: 500 });
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setViewData(JSON.parse(JSON.stringify(history[nextIndex])));
      setHistoryIndex(nextIndex);
      toast.info("Redo: Next step", { autoClose: 500 });
    }
  };

  const addItem = (type, content) => {
    const newItem = {
      id: Date.now(),
      type,
      content,
      x: 35 + (side === "back" ? 15 : 0),
      y: 45,
      scale: 25,
      textColor: "#000000",
      fontFamily: "Inter",
      rotate: 0,
      opacity: 1,
    };
    const newData = {
      ...viewData,
      [side]: { ...viewData[side], items: [...viewData[side].items, newItem] },
    };
    setViewData(newData);
    saveHistory(newData);
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

    setViewData((prev) => ({
      ...prev,
      [side]: {
        ...prev[side],
        items: prev[side].items.map((item) =>
          item.id === draggingItemId
            ? {
                ...item,
                x: Math.max(0, Math.min(100, x)),
                y: Math.max(0, Math.min(100, y)),
              }
            : item,
        ),
      },
    }));
  };

  const handleMouseUp = () => {
    setDraggingItemId(null);
    commitChange();
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
  }, [draggingItemId]); // ONLY draggingItemId here to prevent re-attachment on every move!

  const updateSelectedItem = (updates) => {
    if (!selectedItemId) return;
    const newData = {
      ...viewData,
      [side]: {
        ...viewData[side],
        items: viewData[side].items.map((item) =>
          item.id === selectedItemId ? { ...item, ...updates } : item,
        ),
      },
    };
    setViewData(newData);
    // Don't save history on high-frequency slider movements alone for performance,
    // but usually done on slider release (onMouseUp). Adding simple throttle here.
  };

  // Complete history save on slider release
  const commitChange = () => saveHistory(viewData);

  useEffect(() => {
    if (selectedItemId) {
      const item = currentItems.find(i => i.id === selectedItemId);
      if (item) {
        if (item.type === 'text') setActiveTab('text');
        else if (item.type === 'element') setActiveTab('element');
      }
    }
  }, [selectedItemId]);

  const removeItem = (id) => {
    const newData = {
      ...viewData,
      [side]: {
        ...viewData[side],
        items: viewData[side].items.filter((item) => item.id !== id),
      },
    };
    setViewData(newData);
    saveHistory(newData);
    if (selectedItemId === id) setSelectedItemId(null);
  };

  const changeOrder = (direction) => {
    if (!selectedItemId) return;
    const items = [...viewData[side].items];
    const idx = items.findIndex((i) => i.id === selectedItemId);
    if (direction === "up" && idx < items.length - 1) {
      [items[idx], items[idx + 1]] = [items[idx + 1], items[idx]];
    } else if (direction === "down" && idx > 0) {
      [items[idx], items[idx - 1]] = [items[idx - 1], items[idx]];
    }
    const newData = { ...viewData, [side]: { ...viewData[side], items } };
    setViewData(newData);
    saveHistory(newData);
  };

  const handleAddToCart = async (shouldNavigate = false) => {
    const captureEl = document.getElementById("master-design-canvas");
    if (!captureEl) return;

    const TID = toast.loading(
      shouldNavigate ? "Preparing checkout..." : "Adding to cart...",
    );

    try {
      // Force a small break to allow the UI to update
      await new Promise((r) => setTimeout(r, 50));

      let img = "/business-img1.png"; // Default fallback

      try {
        img = await htmlToImage.toJpeg(captureEl, {
          quality: 0.7,
          backgroundColor: "#ffffff",
          skipAutoScale: true,
          cacheBust: true,
        });
      } catch (captureErr) {
        console.warn("Snapshot failed, using fallback item image", captureErr);
      }

      addToCart({
        id: Date.now(),
        name: `Custom Shirt (${size})`,
        price: 45.0,
        qty: 1,
        image: img,
        customDetails: { apparelColor, size, material, side, design: viewData },
      });

      toast.success("Saved to cart!", { id: TID });
      if (shouldNavigate) {
        setTimeout(() => navigate("/check-out"), 400);
      }
    } catch (e) {
      console.error("Cart Error:", e);
      toast.error("Process interrupted. Please try again.", { id: TID });
    } finally {
      // Safety auto-dismiss if still hanging after 3 seconds
      setTimeout(() => toast.dismiss(TID), 3000);
    }
  };

  // Initialize history
  useEffect(() => {
    if (history.length === 0) saveHistory(viewData);
  }, []);

  return (
    <div className="min-h-screen p-10 font-sans flex items-center justify-center">
      <style>{fontStyles}</style>
      <div className="w-full max-w-[1260px] bg-[#F4F4F4] rounded-[32px] shadow-sm flex flex-col p-10 relative min-h-[750px] animate-in fade-in duration-700">
        <div className="flex gap-10 flex-1">
          {/* CONTROL PANEL */}
          <div className="w-[340px] flex flex-col gap-6">
            {/* Tabs */}
            <div className="grid grid-cols-4 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center py-4 rounded-xl transition-all ${activeTab === tab.id ? "bg-[#C6131B] text-white shadow-xl" : "bg-white text-gray-400 hover:bg-gray-50"}`}
                >
                  {tab.icon}
                  <span className="text-[10px] font-bold mt-2 uppercase tracking-tighter">
                    {tab.name}
                  </span>
                </button>
              ))}
            </div>

            <div
              className="bg-[#FBFBFB] rounded-3xl p-8 flex flex-col gap-6 shadow-sm flex-1 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {/* SIDE TOGGLE DROPDOWN - FUNCTIONAL */}
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Editor View
                </p>
                <div className="relative">
                  <select
                    value={side}
                    onChange={(e) => {
                      setSide(e.target.value);
                      setSelectedItemId(null);
                    }}
                    className="w-full p-3 bg-[#F9FAFB] border border-gray-100 rounded-xl text-xs font-black uppercase tracking-widest appearance-none outline-none"
                  >
                    <option value="front">Front View</option>
                    <option value="back">Back View</option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-400" />
                </div>
              </div>

              {activeTab === "image" && (
                <div className="flex flex-col gap-6 animate-in slide-in-from-left-4">
                  <label className="w-full h-[140px] border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all group">
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => addItem("image", ev.target.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    <FaImage className="text-3xl text-gray-200 group-hover:text-[#C6131B] transition-colors mb-2" />
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                      Import Design
                    </span>
                  </label>

                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                      Garment Color
                    </p>
                    <div className="flex gap-2 items-center flex-wrap">
                      {colorOptions.map((c) => (
                        <div
                          key={c}
                          onClick={() => {
                            setApparelColor(c);
                            commitChange();
                          }}
                          className={`w-5 h-5 rounded-full cursor-pointer border-2 ${apparelColor === c ? "border-[#C6131B] scale-125" : "border-white"} shadow-sm transition-all`}
                          style={{ backgroundColor: c }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {selectedItem?.type === "image" && (
                    <button
                      onClick={() => removeItem(selectedItem.id)}
                      className="w-full py-3 bg-red-50 text-[#C6131B] rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-100 transition-all flex items-center justify-center gap-2"
                    >
                      <FaTrash /> Remove Selected Image
                    </button>
                  )}
                </div>
              )}

              {activeTab === "text" && (
                <div className="flex flex-col gap-5 animate-in slide-in-from-left-4">
                  <button
                    onClick={() => addItem("text", "YOUR TEXT")}
                    className="w-full py-4 bg-[#F9FAFB] border border-gray-100 rounded-xl text-[10px] font-black uppercase text-[#C6131B] tracking-widest hover:bg-red-50 transition-all"
                  >
                    + Add Text Layer
                  </button>

                  {selectedItem?.type === "text" && (
                    <div className="flex flex-col gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <input
                        type="text"
                        value={selectedItem.content}
                        onChange={(e) => updateSelectedItem({ content: e.target.value })}
                        onBlur={commitChange}
                        className="w-full p-3 bg-white rounded-lg outline-none font-bold text-gray-700 shadow-sm"
                      />

                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase mb-2">Font Family</p>
                        <div className="grid grid-cols-2 gap-2 max-h-[120px] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                          {fontOptions.map((f) => (
                             <button key={f} onClick={() => { updateSelectedItem({ fontFamily: f }); commitChange(); }} className={`p-2 rounded-lg border text-[9px] truncate ${selectedItem.fontFamily === f ? "bg-black text-white" : "bg-white text-gray-400"}`} style={{ fontFamily: f }}>{f}</button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase mb-2">Text Tint</p>
                        <div className="flex gap-2">
                          {colorOptions.map((c) => (
                            <div key={c} onClick={() => { updateSelectedItem({ textColor: c }); commitChange(); }} className={`w-4 h-4 rounded-full cursor-pointer ${selectedItem.textColor === c ? "ring-2 ring-red-400 ring-offset-1" : ""}`} style={{ backgroundColor: c }}></div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => { updateSelectedItem({ hasBorder: !selectedItem.hasBorder }); commitChange(); }}
                        className={`w-full py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${selectedItem.hasBorder ? 'bg-[#C6131B] text-white border-[#C6131B]' : 'bg-white text-gray-400 border-gray-100'}`}
                      >
                         {selectedItem.hasBorder ? 'Remove Outline' : 'Add Outline'}
                      </button>

                      <button onClick={() => removeItem(selectedItem.id)} className="w-full py-3 bg-red-50 text-[#C6131B] rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-100 transition-all flex items-center justify-center gap-2">
                        <FaTrash /> Remove Text Layer
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "element" && (
                <div className="flex flex-col gap-5 animate-in slide-in-from-left-4">
                  <div className="grid grid-cols-4 gap-2 max-h-[250px] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                    {[<FaStar />, <FaHeart />, <FaCertificate />, <FaShieldAlt />, <FaLightbulb />, <FaSmile />, <FaCrown />, <FaFire />, <FaBolt />, <FaSkull />, <FaRocket />, <FaGhost />, <FaAnchor />, <FaBicycle />, <FaFootballBall />, <FaBasketballBall />, <FaGlassMartini />, <FaMusic />, <FaGem />, <FaLeaf />].map((icon, i) => (
                      <button key={i} onClick={() => addItem("element", icon)} className="aspect-square bg-[#F9FAFB] border border-gray-50 rounded-xl flex items-center justify-center text-2xl text-gray-300 hover:text-[#C6131B] hover:bg-white hover:shadow-md transition-all">{icon}</button>
                    ))}
                  </div>

                  {selectedItem?.type === "element" && (
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col gap-3">
                      <p className="text-[9px] font-black text-[#C6131B] uppercase tracking-widest italic">Customize Art Color</p>
                      <div className="flex gap-1.5 flex-wrap">
                        {colorOptions.map((c) => (
                          <div key={c} onClick={() => { updateSelectedItem({ textColor: c }); commitChange(); }} className={`w-4 h-4 rounded-full cursor-pointer border border-white ${selectedItem.textColor === c ? "ring- ring-red-400 ring-offset-1 scale-110" : ""}`} style={{ backgroundColor: c }}></div>
                        ))}
                      </div>
                      <button onClick={() => removeItem(selectedItem.id)} className="w-full py-3 bg-red-50 text-[#C6131B] rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-red-100 transition-all flex items-center justify-center gap-2 mt-4"><FaTrash /> Remove Art Element</button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "tool" && (
                <div className="flex flex-col gap-3 animate-in slide-in-from-left-4">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Items stack ({side})</p>
                  {currentItems.length === 0 && <p className="text-[10px] text-gray-300 italic py-4">Canvas is empty...</p>}
                  {currentItems.map((item) => (
                    <div key={item.id} onClick={() => setSelectedItemId(item.id)} className={`flex items-center gap-4 p-3 rounded-xl border-2 transition-all cursor-pointer ${selectedItemId === item.id ? "border-[#C6131B] bg-red-50" : "bg-gray-50 border-transparent"}`}>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-[9px] font-black uppercase text-gray-400">{item.type}</p>
                        <p className="text-[11px] font-black text-gray-800 truncate">{item.type === "text" ? item.content : "Graphic Asset"}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={(e) => { e.stopPropagation(); changeOrder("up"); }} className="text-gray-300 hover:text-black"><FaArrowUp /></button>
                        <button onClick={(e) => { e.stopPropagation(); removeItem(item.id); }} className="text-red-200 hover:text-red-500"><FaTrash /></button>
                      </div>
                    </div>
                  ))}

                  {selectedItem && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4 animate-in slide-in-from-bottom-2">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Position & Scale</p>
                      {[
                        { label: "H-Pos", key: "x", max: 100 },
                        { label: "V-Pos", key: "y", max: 100 },
                        { label: "Scale", key: "scale", max: 100 },
                        { label: "Rotate", key: "rotate", max: 360 },
                      ].map((cfg) => (
                        <div key={cfg.label} className="flex flex-col gap-1">
                          <div className="flex justify-between items-center text-[8px] font-black uppercase text-gray-400">
                            <span>{cfg.label}</span>
                            <span className="text-[#C6131B]">[{selectedItem[cfg.key]?.toFixed(0)}]</span>
                          </div>
                          <input type="range" min="0" max={cfg.max} step="0.5" value={selectedItem[cfg.key] || 0} onChange={(e) => updateSelectedItem({ [cfg.key]: parseFloat(e.target.value) })} onMouseUp={commitChange} className="w-full h-1 bg-gray-100 appearance-none cursor-pointer accent-[#C6131B] rounded-full" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* CANVAS AREA */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center relative group">
              {/* Visual Blueprint Backdrop */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#000 1.5px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* SKELETON CORE - ONLY THIS IS CAPTURED */}
              <div
                id="master-design-canvas"
                onClick={() => setSelectedItemId(null)}
                className="relative w-full h-full flex items-center justify-center p-10 bg-[#F4F4F4] cursor-default"
              >
                <svg
                  viewBox="0 0 500 600"
                  className="w-[85%] h-[85%] drop-shadow-2xl transition-all duration-700"
                >
                  <path
                    d="M100 120 L50 180 L80 300 Q90 310 100 300 L110 550 Q110 570 130 570 L370 570 Q390 570 390 550 L400 300 Q410 310 420 300 L450 180 L400 120 Q250 150 100 120 Z"
                    fill={apparelColor}
                    className="transition-all duration-700"
                  />
                  <path
                    d="M180 125 Q250 160 320 125 Q250 135 180 125 Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>

                {/* DESIGN LAYER SPACE */}
                <div
                  ref={containerRef}
                  className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                >
                  {currentItems.map((item) => (
                    <div
                      key={item.id}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        handleMouseDown(e, item.id);
                      }}
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute pointer-events-auto cursor-move select-none transition-shadow`}
                      style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                        transform: `translate(-50%, -50%) scale(${item.scale / 50}) rotate(${item.rotate}deg)`,
                        opacity: item.opacity,
                      }}
                    >
                      {item.type === "image" && (
                        <img
                          src={item.content}
                          className="max-h-[300px] object-contain"
                          alt="print"
                        />
                      )}
                      {item.type === "text" && (
                        <span
                          className="whitespace-nowrap inline-block text-center px-4 py-2"
                          style={{
                            color: item.textColor,
                            fontSize: "32px",
                            fontFamily: item.fontFamily,
                            fontWeight: "bold",
                            WebkitTextStrokeWidth: item.hasBorder ? '1.5px' : '0px',
                            WebkitTextStrokeColor: item.textColor === '#000000' ? '#ffffff' : '#000000'
                          }}
                        >
                          {item.content}
                        </span>
                      )}
                      {item.type === "element" && (
                        <span
                          className="text-6xl transition-transform hover:scale-110"
                          style={{ color: item.textColor }}
                        >
                          {item.content}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Realistic Mini-Map - FULLY DYNAMIC SVG */}
              <div className="absolute top-4 right-10 w-[140px] h-[170px] bg-[#6B6666] rounded-[16px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-2 border-white/5 flex items-center justify-center group/mini">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>

                {/* SVG Skeleton Thumbnail */}
                <svg
                  viewBox="0 0 500 600"
                  className="w-[85%] h-[85%] relative z-10 transition-all duration-500"
                >
                  <path
                    d="M100 120 L50 180 L80 300 Q90 310 100 300 L110 550 Q110 570 130 570 L370 570 Q390 570 390 550 L400 300 Q410 310 420 300 L450 180 L400 120 Q250 150 100 120 Z"
                    fill={apparelColor}
                    className="drop-shadow-sm"
                  />
                  <path
                    d="M180 125 Q250 160 320 125 Q250 135 180 125 Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                </svg>

                {/* DYNAMIC DESIGN OVERLAYS */}
                <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                  <div className="relative w-[34%] h-[34%] mt-[2%]">
                    {" "}
                    {/* Adjusted for miniature SVG space */}
                    {currentItems.map((item) => (
                      <div
                        key={item.id}
                        className="absolute flex items-center justify-center"
                        style={{
                          left: `${item.x}%`,
                          top: `${item.y}%`,
                          transform: `translate(-50%, -50%) scale(${(item.scale / 50) * 0.1}) rotate(${item.rotate}deg)`,
                          opacity: 0.9,
                        }}
                      >
                        {item.type === "image" && (
                          <img
                            src={item.content}
                            className="max-h-[300px] object-contain"
                            alt="m"
                          />
                        )}
                        {item.type === "text" && (
                          <span
                            className="whitespace-nowrap font-black"
                            style={{
                              color: item.textColor,
                              fontSize: "18px",
                              fontFamily: item.fontFamily,
                            }}
                          >
                            {item.content}
                          </span>
                        )}
                        {item.type === "element" && (
                          <span
                            className="text-4xl"
                            style={{ color: item.textColor }}
                          >
                            {item.content}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <span className="absolute bottom-3 text-[7px] font-black text-white/40 uppercase tracking-widest z-30">
                  Live Preview
                </span>
              </div>

              {/* Floating Undo/Redo Controls */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 bg-white rounded-2xl shadow-2xl border border-gray-100 p-1.5">
                <button
                  onClick={undo}
                  className={`p-4 rounded-xl transition-all ${historyIndex > 0 ? "text-[#C6131B] hover:bg-red-50" : "text-gray-200 cursor-not-allowed"}`}
                >
                  <FaUndo />
                </button>
                <div className="h-[1px] bg-gray-50 mx-2"></div>
                <button
                  onClick={redo}
                  className={`p-4 rounded-xl transition-all ${historyIndex < history.length - 1 ? "text-[#C6131B] hover:bg-red-50" : "text-gray-200 cursor-not-allowed"}`}
                >
                  <FaRedo />
                </button>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="flex justify-between items-center px-4">
              <div className="flex gap-4">
                {["S", "M", "L", "XL", "XXL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-5 py-2.5 rounded-xl border-2 font-black text-xs transition-all ${size === s ? "border-[#C6131B] text-[#C6131B] bg-red-50" : "border-white bg-white text-gray-400 hover:border-gray-50"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleAddToCart(false)}
                  className="px-10 py-4 bg-white border border-gray-100 rounded-xl text-[11px] font-black uppercase text-gray-800 tracking-widest hover:bg-gray-50 shadow-sm transition-all"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => handleAddToCart(true)}
                  className="px-10 py-4 bg-[#C6131B] rounded-xl text-[11px] font-black uppercase text-white tracking-widest hover:bg-[#A50F16] shadow-xl shadow-red-100 transition-all"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApparelEditor;
