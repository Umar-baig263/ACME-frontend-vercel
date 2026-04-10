import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { WishlistContext } from "../../../../../contexts/wishlistContext";
import { FiSearch } from "react-icons/fi";

import {
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
  AiFillHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CartContext } from "../../../../../contexts/cartContext";

import { products } from "../../../../../constants/products";
import { apparelData } from "../../../../../constants/apparelData";
import { stampData } from "../../../../../constants/stampData";
import { digitalPrintingData } from "../../../../../constants/digitalPrintingData";
import { corporateGiftingData } from "../../../../../constants/corporateGiftingData";

const normalizeText = (text = "") =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const scoreSearchMatch = (item, query) => {
  const q = normalizeText(query);
  if (!q) return 0;

  const name = normalizeText(item.name);
  const category = normalizeText(item.category);
  const tags = normalizeText(item.searchTags);
  const desc = normalizeText(item.desc);

  const allText = `${name} ${category} ${tags} ${desc}`.trim();
  if (!allText.includes(q)) return 0;

  // For 1-letter search, keep results strict and professional:
  // prefer products that start with this letter to avoid noisy matches.
  if (q.length === 1) {
    if (name.startsWith(q)) return 100;
    if (name.split(" ").some((w) => w.startsWith(q))) return 80;
    return 0;
  }

  if (name === q) return 100;
  if (name.startsWith(q)) return 90;
  if (name.split(" ").some((w) => w.startsWith(q))) return 80;
  if (name.includes(q)) return 70;
  if (category.startsWith(q) || tags.startsWith(q)) return 50;
  if (category.includes(q) || tags.includes(q)) return 35;
  return 20;
};

const Header = () => {
  const { wishlistPopup, wishlistAnimate, wishlist } =
    useContext(WishlistContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  // Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [allItems, setAllItems] = useState([]);
  const searchRef = useRef(null);

  // Total cart items for badge
  const totalCartItems = cart.length;
  const totalWishlistItems = wishlist.length;

  useEffect(() => {
    // Collect and format all searchable items
    const flattenedApparel = Object.values(apparelData || {})
      .flatMap((mainCat) => (mainCat.categories || []).map(subCat => ({ ...subCat, mainCatTitle: mainCat.title })))
      .flatMap((subCat) => (subCat.products || []).map((p) => ({ 
        ...p, 
        route: `/apparel-product-description/${p.slug}`,
        searchTags: `${subCat.name} ${subCat.mainCatTitle} apparel`
      })));

    const flattenedStamps = Object.values(stampData || {})
      .flatMap((mainCat) => (mainCat.categories || []).map(subCat => ({ ...subCat, mainCatTitle: mainCat.title })))
      .flatMap((subCat) => (subCat.products || []).map((p) => ({ 
        ...p, 
        route: `/stamp-description/${p.slug}`,
        searchTags: `${subCat.name} ${subCat.mainCatTitle} stamp`
      })));

    const flattenedDigital = Object.values(digitalPrintingData || {})
      .flatMap((mainCat) => (mainCat.categories || []).map(subCat => ({ ...subCat, mainCatTitle: mainCat.title })))
      .flatMap((subCat) => (subCat.products || []).map((p) => ({ 
        ...p, 
        route: `/card-product-description/${p.slug}`,
        searchTags: `${subCat.name} ${subCat.mainCatTitle} digital printing`
      })));

    const flattenedCorporate = Object.values(corporateGiftingData || {})
      .flatMap((mainCat) => (mainCat.categories || []).map(subCat => ({ ...subCat, mainCatTitle: mainCat.title })))
      .flatMap((subCat) => (subCat.products || []).map((p) => ({
        ...p,
        route: `/corporate-product-description/${p.slug}`,
        searchTags: `${subCat.name} ${subCat.mainCatTitle} corporate gifting`,
      })));

    const mappedProducts = (products || []).map((p) => ({ ...p, route: `/shop/${p.slug}`, searchTags: `${p.category || ""} e-store` }));

    const categoriesList = [
      { id: "cat1", name: "Stamps", category: "Category", route: "/stamp" },
      { id: "cat2", name: "All Stamp Categories", category: "Category", route: "/stamp-categories" },
      { id: "cat3", name: "Apparel & Shirts", category: "Category", route: "/apparel" },
      { id: "cat4", name: "Apparel Products", category: "Category", route: "/apparel-products" },
      { id: "cat5", name: "E-Store", category: "Category", route: "/e-store" },
      { id: "cat6", name: "Digital Printing", category: "Category", route: "/digital-printing" },
      { id: "cat7", name: "Corporate Gifting", category: "Category", route: "/corporate-gifting" },
      { id: "cat8", name: "Marketing & Advertising", category: "Category", route: "/marketing-advertising" },
      { id: "cat9", name: "Sign, Banner & Poster", category: "Category", route: "/sign" },
      { id: "cat10", name: "Business Cards", category: "Category", route: "/card-products" },
    ];

    setAllItems([
      ...categoriesList,
      ...mappedProducts,
      ...flattenedApparel,
      ...flattenedStamps,
      ...flattenedDigital,
      ...flattenedCorporate,
    ]);
  }, []);

  const rankedResults = useMemo(() => {
    const query = searchQuery.trim();
    if (query.length < 1) return [];

    const scored = allItems
      .map((item) => ({ item, score: scoreSearchMatch(item, query) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || String(a.item.name).localeCompare(String(b.item.name)));

    const deduped = [];
    const seen = new Set();

    for (const { item } of scored) {
      const uniqueKey = item.slug
        ? `${item.slug}-${item.route || ""}`
        : `${item.id || item.name}-${item.route || ""}`;
      if (seen.has(uniqueKey)) continue;
      seen.add(uniqueKey);
      deduped.push(item);
      if (deduped.length >= 10) break;
    }

    return deduped;
  }, [allItems, searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".hero-section")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle clicking outside of search dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setHighlightedIndex(-1);
    if (query.trim().length < 1) {
      setSearchResults([]);
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  useEffect(() => {
    if (searchQuery.trim().length >= 1) {
      setSearchResults(rankedResults);
    }
  }, [rankedResults, searchQuery]);

  const handleSearchSubmit = () => {
    if (searchResults.length === 0) return;
    const selectedIndex = highlightedIndex >= 0 ? highlightedIndex : 0;
    const selected = searchResults[selectedIndex];
    if (selected) {
      handleResultClick(selected);
    }
  };

  const handleResultClick = (result) => {
    setShowDropdown(false);
    setSearchQuery("");
    navigate(result.route, { state: { product: result } });
  };

  const headerLinks = [
    { name: "TRACK ORDER", url: "/track-order" },
    { name: "BLOG", url: "/blog" },
    { name: "CONTACT", url: "/contact" },
    { name: "HELP & FAQS", url: "/faq" },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: "/" },
    { icon: <FaFacebook />, url: "/" },
    { icon: <FaTwitter />, url: "/" },
    { icon: <FaTiktok />, url: "/" },
  ];

  return (
    <header
      className={`w-full fixed z-50 ${isScrolled ? "drop-shadow-none" : "drop-shadow-none"}`}
    >
      {wishlistPopup && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Item added to wishlist ❤️
        </div>
      )}
      {/* Top Red Header */}
      <div className="flex gap-3 items-center justify-between lg:px-26 md:px-10 px-5 py-1 text-white bg-[#BC202B] md:text-[10px] text-[10px] font-[Arial]">
        <div className="flex md:gap-5 gap-2">
          {headerLinks.map((d, i) => (
            <div key={i}>
              <Link to={d.url} className="font-[Arial]">
                {d.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex md:gap-5 gap-2">
          {socialLinks.map((d, i) => (
            <div key={i}>
              <a href={d.url}>{d.icon}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between bg-white lg:px-26 md:px-10 px-5 gap-10 items-center py-1">
        <div className="flex justify-between items-center w-full md:gap-[121px] gap-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src="/mainLogo.png"
                className=" w-[450px] h-[100px]"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Search Box */}
          <div className="w-full relative" ref={searchRef}>
            <div className="flex w-full border border-black md:gap-3 gap-1 rounded-full items-center py-1 px-1 bg-white">
              <div className="w-full px-1 md:text-sm text-xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      if (!showDropdown && searchResults.length > 0) {
                        setShowDropdown(true);
                      }
                      setHighlightedIndex((prev) =>
                        searchResults.length === 0
                          ? -1
                          : (prev + 1) % searchResults.length,
                      );
                      return;
                    }

                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      if (!showDropdown && searchResults.length > 0) {
                        setShowDropdown(true);
                      }
                      setHighlightedIndex((prev) =>
                        searchResults.length === 0
                          ? -1
                          : prev <= 0
                            ? searchResults.length - 1
                            : prev - 1,
                      );
                      return;
                    }

                    if (e.key === "Escape") {
                      setShowDropdown(false);
                      setHighlightedIndex(-1);
                      return;
                    }

                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearchSubmit();
                    }
                  }}
                  onFocus={() => {
                    if (searchQuery.trim().length >= 1) {
                      setShowDropdown(true);
                    }
                  }}
                  className="w-full outline-none md:px-2 px-0 py-1"
                  placeholder="search your product"
                />
              </div>
              <div>
                <button
                  onClick={handleSearchSubmit}
                  className="py-2 bg-black rounded-full px-5 hover:bg-gray-800 transition-colors text-white md:text-sm text-xs"
                >
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Search Dropdown Results */}
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 max-h-[400px] overflow-y-auto">
                    {searchResults.map((result) => (
                  <div
                     key={`${result.slug || result.id || result.name}-${result.route || "no-route"}`}
                     onClick={() => handleResultClick(result)}
                     onMouseEnter={() =>
                       setHighlightedIndex(
                         searchResults.findIndex(
                           (item) =>
                             `${item.slug || item.id || item.name}-${item.route || "no-route"}` ===
                             `${result.slug || result.id || result.name}-${result.route || "no-route"}`,
                         ),
                       )
                     }
                     className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 transition-colors ${
                       searchResults[highlightedIndex] === result
                         ? "bg-gray-100"
                         : "hover:bg-gray-50"
                     }`}
                  >
                    {result.img && (
                      <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                        <img src={result.img} alt={result.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                    <div className="flex flex-col overflow-hidden">
                      <div className="text-sm font-semibold text-gray-800 truncate">{result.name}</div>
                      <div className="text-xs text-gray-400 capitalize truncate">
                        {result.category ? result.category.replace("-", " ") : "Product"} {result.price ? `• $${result.price}` : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showDropdown && searchQuery.trim().length >= 1 && searchResults.length === 0 && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 px-4 py-6 text-sm text-gray-500 text-center">
                No products found for "{searchQuery}"
              </div>
            )}
          </div>

          {/* User / Wishlist / Cart Icons */}
          <div className="flex md:gap-5 gap-2 md:text-2xl text-sm items-center justify-end relative">
            <Link to="/login">
              <AiOutlineUser />
            </Link>
            {/* <Link to="/wish-list" className="relative">
              {wishlistAnimate ? (
                <AiFillHeart className="text-red-500 animate-bounce" />
              ) : (
                <AiOutlineHeart />
              )}
            </Link> */}
            <Link to="/wish-list" className="relative">
              {wishlistAnimate ? (
                <AiFillHeart className="text-red-500 animate-bounce" />
              ) : (
                <AiOutlineHeart />
              )}

              {/* ✅ Wishlist Badge */}
              {totalWishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative">
              <AiOutlineShopping />
              {/* Badge */}
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
