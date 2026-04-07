import React, { useState, useContext } from "react";
import { 
  FaTextHeight, FaImage, FaPalette, FaThLarge, 
  FaBold, FaItalic, FaAlignCenter, FaAlignLeft, FaAlignRight,
  FaChevronDown, FaArrowRight, FaSyncAlt
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cartContext";
import { toast } from "react-toastify";

const CardEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = location.state?.product || {
    id: "card-premium",
    name: 'Premium Matte Business Cards',
    price: 24.99,
    img: "/business-img1.png"
  };
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
    fontFamily: "Inter",
    color: "#1a1a1a",
    alignment: "left",
  });

  const tabs = [
    { id: "text", name: "Content", icon: <FaTextHeight className="text-xl" /> },
    { id: "logo", name: "Logo", icon: <FaImage className="text-xl" /> },
    { id: "style", name: "Style", icon: <FaPalette className="text-xl" /> },
    { id: "templates", name: "Layouts", icon: <FaThLarge className="text-xl" /> },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddToCart = () => {
    const lines = [formData.name, formData.title, formData.company, formData.phone, formData.email, formData.website, formData.address];
    addToCart({
      ...product,
      qty: 1,
      customization: { 
        fontFamily: style.fontFamily, 
        fontSize: style.fontSize, 
        isBold: false, // Could expand this if required
        isItalic: false,
        lines
      }
    });
    toast.success("Card added to cart!");
  };

  const handleCheckout = () => {
    const lines = [formData.name, formData.title, formData.company, formData.phone, formData.email, formData.website, formData.address];
    navigate("/check-out", {
      state: {
        buyNowProduct: {
           ...product,
           qty: 1,
           customization: { fontFamily: style.fontFamily, fontSize: style.fontSize, isBold: false, isItalic: false, lines }
        }
      }
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto py-12 px-6 font-sans">
      <div className="bg-[#f8fafc] rounded-[40px] p-10 shadow-2xl border border-gray-100">
        
        {/* Header Navigation Tiles */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-28 h-28 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                  activeTab === tab.id 
                  ? "bg-linear-to-br from-[#C6131B] to-[#9A0F1E] text-white shadow-[0_10px_25px_-5px_rgba(198,19,27,0.4)]" 
                  : "bg-white text-gray-400 hover:bg-gray-50 border border-gray-100 shadow-sm"
                }`}
              >
                {tab.icon}
                <span className="text-sm font-semibold mt-3">{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            <button 
              onClick={() => setSide("front")}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${side === "front" ? "bg-[#C6131B] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Front Side
            </button>
            <button 
              onClick={() => setSide("back")}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${side === "back" ? "bg-[#C6131B] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Back Side
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          
          {/* Sidebar Editor Panel */}
          <div className="w-[400px] bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 flex flex-col gap-8">
            
            {activeTab === "text" && (
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4">
                <h3 className="text-xl font-bold text-gray-800">Card Details</h3>
                
                {[
                  { label: "Full Name", name: "name", placeholder: "e.g. John Doe" },
                  { label: "Job Title", name: "title", placeholder: "e.g. Marketing Manager" },
                  { label: "Company", name: "company", placeholder: "e.g. ACME Solutions" },
                  { label: "Phone Number", name: "phone", placeholder: "+1 (555) 000-0000" },
                  { label: "Email Address", name: "email", placeholder: "hello@example.com" },
                  { label: "Website", name: "website", placeholder: "www.example.com" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">{field.label}</label>
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
                <h3 className="text-xl font-bold text-gray-800">Typography & Style</h3>
                
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-500">FONT FAMILY</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none font-semibold text-gray-700">
                      <option>Inter</option>
                      <option>Outfit</option>
                      <option>Playfair Display</option>
                    </select>
                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-500">ALIGNMENT</label>
                  <div className="flex bg-gray-50 p-2 rounded-2xl border border-gray-200 gap-2">
                    {[
                      { id: "left", icon: <FaAlignLeft /> },
                      { id: "center", icon: <FaAlignCenter /> },
                      { id: "right", icon: <FaAlignRight /> },
                    ].map((align) => (
                      <button 
                        key={align.id}
                        onClick={() => setStyle({...style, alignment: align.id})}
                        className={`flex-1 flex items-center justify-center py-3 rounded-xl transition-all ${style.alignment === align.id ? "bg-white shadow-md text-[#C6131B]" : "text-gray-400 hover:text-gray-600"}`}
                      >
                        {align.icon}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                   <label className="text-sm font-bold text-gray-500">TEXT STYLES</label>
                   <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 py-4 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 font-bold text-gray-600 transition-all"><FaBold /> Bold</button>
                      <button className="flex items-center justify-center gap-2 py-4 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 font-bold text-gray-600 transition-all"><FaItalic /> Italic</button>
                   </div>
                </div>
              </div>
            )}
          </div>

          {/* Design & Preview Area */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Main Interactive Canvas */}
            <div className="aspect-[1.75/1] bg-white rounded-[48px] shadow-2xl border border-gray-100 flex items-center justify-center p-16 relative overflow-hidden group">
              {/* Premium Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#C6131B]/[0.02] rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-600/[0.02] rounded-full blur-3xl"></div>

              {/* The Actual Business Card View */}
              <div className={`w-full h-full max-w-[600px] max-h-[350px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 transform ${side === "back" ? "rotate-y-180" : ""}`}>
                
                {side === "front" ? (
                  <>
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <div className="text-[#C6131B] font-black text-2xl tracking-tighter uppercase mb-2">ACME</div>
                        <div className="text-2xl font-bold text-gray-900 tracking-tight">{formData.name}</div>
                        <div className="text-sm font-semibold text-[#8a8a8e] uppercase tracking-[0.2em]">{formData.title}</div>
                      </div>
                      <div className="w-16 h-16 bg-linear-to-br from-[#1a1a1a] to-[#3a3a3a] rounded-xl flex items-center justify-center rotate-12 shadow-lg">
                        <span className="text-white font-black text-2xl italic">A</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                      <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-[#C6131B]"></div>
                        {formData.phone}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        {formData.email}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        {formData.website}
                      </div>
                    </div>
                    
                    {/* Design Accent */}
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-linear-to-tl from-[#C6131B]/10 to-transparent rounded-tl-[100px]"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <div className="w-24 h-24 bg-linear-to-br from-[#C6131B] to-[#9A0F1E] rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500">
                        <span className="text-white font-black text-4xl italic">A</span>
                    </div>
                    <div className="text-center font-black text-3xl tracking-tighter text-gray-900 uppercase">ACME SOLUTIONS</div>
                    <div className="text-sm font-bold text-[#8a8a8e] tracking-widest uppercase">Premium Business Printing</div>
                  </div>
                )}
              </div>

              {/* Hover Indicator */}
              <button 
                onClick={() => setSide(side === "front" ? "back" : "front")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-bold text-gray-700 hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <FaSyncAlt className="text-[#C6131B]" /> Flip to {side === "front" ? "Back" : "Front"}
              </button>
            </div>

            {/* Application Mockup & Actions */}
            <div className="flex gap-8">
              <div className="flex-1 bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 flex items-center gap-8">
                <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                  <img src="/business-img1.png" className="w-24 h-24 object-contain brightness-105" alt="Card Bundle" />
                </div>
                <div className="flex flex-col gap-1">
                   <h4 className="font-bold text-lg text-gray-800">Premium Matte Finish</h4>
                   <p className="text-sm text-gray-500 font-medium">Standard 3.5" x 2.0" • High-quality 16pt cardstock with smooth sensory finish.</p>
                   <div className="flex items-center gap-3 mt-2">
                      <span className="text-2xl font-black text-[#C6131B]">$24.99</span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">Best Value</span>
                   </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <button onClick={handleAddToCart} className="bg-white border-2 border-gray-200 text-gray-700 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  Add to cart
                </button>
                <button onClick={handleCheckout} className="bg-linear-to-r from-[#C6131B] to-[#9A0F1E] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_-5px_rgba(198,19,27,0.4)] transition-all transform hover:-translate-y-1">
                  Checkout <FaArrowRight />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
