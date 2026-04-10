import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { apparelData } from "../../../../constants/apparelData";
import { stampData } from "../../../../constants/stampData";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import { corporateGiftingData } from "../../../../constants/corporateGiftingData";

const Section2 = () => {
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Combine and normalize ALL products from main data sources for 100% consistency
  const allProducts = useMemo(() => {
    const flattenAndTag = (dataObj, type) => {
      if (!dataObj) return [];
      return Object.values(dataObj).flatMap(group => 
        (group.categories || []).flatMap(cat => 
          (cat.products || []).map(p => ({ ...p, type }))
        )
      );
    };

    const apparel = flattenAndTag(apparelData, 'apparel');
    const stamps = flattenAndTag(stampData, 'stamp');
    const digital = flattenAndTag(digitalPrintingData, 'card');
    const corporate = flattenAndTag(corporateGiftingData, 'corporate');

    // Remove duplicates based on slug to be safe
    const combined = [...apparel, ...stamps, ...digital, ...corporate];
    const uniqueMap = new Map();
    combined.forEach(p => {
      if (p.slug) uniqueMap.set(p.slug, p);
    });

    return Array.from(uniqueMap.values());
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Prioritize results that START with the query, then show results that INCLUDE the query
    const startsWithMatches = allProducts.filter(p => 
      p.name?.toLowerCase().trim().startsWith(query)
    );
    const includesMatches = allProducts.filter(p => 
      p.name?.toLowerCase().includes(query) && 
      !p.name?.toLowerCase().trim().startsWith(query)
    );

    const filtered = [...startsWithMatches, ...includesMatches];
    
    setSearchResults(filtered.slice(0, 10)); 
    setShowDropdown(true);
  }, [searchQuery, allProducts]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const data = [
    { name: "All", url: "/shop" },
    { name: "Stamp", url: "/stamp" },
    { name: "Corporate Gifting", url: "/corporate-gifting" },
    { name: "E-store", url: "/e-store" },
    { name: "Signs", url: "/sign" },
    { name: "It Solution", url: "/it-network-solution" },
    { name: "Marketing", url: "/marketing-advertising" },
    { name: "Cards", url: "/card-products" },
  ];

  const getProductRoute = (product) => {
    if (product.type === "apparel") return `/apparel-product-description/${product.slug}`;
    if (product.type === "stamp") return `/stamp-description/${product.slug}`;
    if (product.type === "card") return `/card-product-description/${product.slug}`;
    if (product.type === "corporate") return `/corporate-product-description/${product.slug}`;
    return `/shop/${product.slug}`;
  };

  return (
    <div className="lg:px-26 md:px-10 px-5 mt-10 flex md:flex-row flex-col md:gap-10 gap-5 relative">
      <div className="md:w-[70%] w-full gap-2 flex items-center">
        <div className="blog-custom-prev ">
          <FaAngleLeft />
        </div>
        <Swiper
          spaceBetween={0}
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 20 },
            768: { slidesPerView: 3.5, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 5 },
            0: { slidesPerView: 2, spaceBetween: 8 },
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".blog-custom-next",
            prevEl: ".blog-custom-prev",
          }}
          loop={true}
          className="h-full w-full relative overflow-visible"
        >
          {data?.map((d, i) => (
            <SwiperSlide key={i}>
              <Link
                to={d.url}
                className={`block p-2 rounded-2xl text-center text-sm cursor-pointer hover:bg-[#BC202B] hover:text-white transition-all ${
                  d.name === active
                    ? "bg-[#BC202B] text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setActive(d.name)}
              >
                {d.name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="blog-custom-next">
          <FaAngleRight />
        </div>
      </div>
      <div className="md:w-[30%] w-full relative" ref={searchRef}>
        <div className="flex w-full gap-2 py-2 px-3 items-center rounded-xl bg-gray-200">
          <div className="w-full">
            <input
              type="search"
              className="w-full outline-none bg-transparent"
              placeholder="Search Your Product .. "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowDropdown(true)}
            />
          </div>
          <div>
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        {/* Search Results Dropdown */}
        {showDropdown && searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-[1000] overflow-hidden">
            {searchResults.map((product) => (
              <Link
                key={product.id}
                to={getProductRoute(product)}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                onClick={() => setShowDropdown(false)}
              >
                <img
                  src={product.img || product.image || "/business-img1.png"}
                  alt={product.name}
                  className="w-10 h-10 object-contain rounded bg-gray-50"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800 line-clamp-1">
                    {product.name}
                  </span>
                  <span className="text-xs text-gray-500">${product.price || "0.00"}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {showDropdown && searchQuery && searchResults.length === 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-[1000] p-4 text-center text-gray-500 text-sm">
            No products found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
