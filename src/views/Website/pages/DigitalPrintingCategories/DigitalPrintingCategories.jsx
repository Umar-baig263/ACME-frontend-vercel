import Navbar from "../../components/main/Navbar/Navbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import ProductCard5 from "../../components/main/ProductCard/ProductCard5";
import ProductPreviewSection from "../../components/main/ProductCard/ProductPreviewSection";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import WhiteButtonLink from "../../components/main/Buttons/WhiteButtonLink";
import NewsCard from "./NewsCard";
import FaqSection from "../../components/main/FaqSection/FaqSection";

const DigitalPrintingCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("cat") || "business";
  const currentCategory = digitalPrintingData[activeCategory];

  const initMain = searchParams.get("main") || activeCategory;
  const initSubParam = searchParams.get("sub");
  const initSub = initSubParam !== null && initSubParam !== "[object Object]" && !isNaN(Number(initSubParam)) ? Number(initSubParam) : 0;

  const [activeMain, setActiveMain] = useState(initMain);
  const [openSubcategories, setOpenSubcategories] = useState({ [initMain]: initSub });
  const [openMain, setOpenMain] = useState({ [initMain]: true });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeSubcategoryName, setActiveSubcategoryName] = useState("");

  // On load set main + sub from URL
  useEffect(() => {
    const main = searchParams.get("main") || activeCategory;
    const subP = searchParams.get("sub");
    const sub = subP !== null && subP !== "[object Object]" && !isNaN(Number(subP)) ? Number(subP) : 0;

    setActiveMain(main);
    setOpenMain((prev) => ({ ...prev, [main]: true }));
    setOpenSubcategories((prev) => ({ ...prev, [main]: sub }));
  }, [searchParams]);

  const current = digitalPrintingData[activeMain];
  const activeIndex = openSubcategories[activeMain] ?? 0;

  // 🔎 Search
  const searchResults = [];

  if (searchQuery.trim() !== "") {
    current?.categories.forEach((cat) => {
      if (cat.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchResults.push(...cat.products);
      }

      cat.products.forEach((p) => {
        if (p.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          searchResults.push(p);
        }
      });
    });
  }

  // ⭐ Correct Filtered Products Logic
  const filteredProducts =
    searchQuery.trim() !== ""
      ? searchResults
      : activeIndex !== null && current?.categories[activeIndex]
        ? current.categories[activeIndex].products.filter(
            (p) =>
              selectedProducts.length === 0 || selectedProducts.includes(p.id),
          )
        : current
          ? current.categories.flatMap((cat) =>
              cat.products.filter(
                (p) =>
                  selectedProducts.length === 0 ||
                  selectedProducts.includes(p.id),
              ),
            )
          : [];

  // Toggle subcategory
  const handleToggle = (mainKey, index, name) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [mainKey]: prev[mainKey] === index ? null : index,
    }));

    setActiveSubcategoryName((prevName) => (prevName === name ? "" : name));
  };

  // Toggle main category
  const handleMainToggle = (key) => {
    setOpenMain((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setActiveMain(key); // heading ko pata chal jaaye kaunsa main category active hai
    setOpenSubcategories((prev) => ({
      ...prev,
      [key]: null, // subcategory reset karna, taake heading main category dikhe
    }));
  };

  // Dot Product Select
  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const newsItems = [
    {
      id: 1,
      image: "/latest-img1.png",
      title: "Importance of Custom Stamps for Your Business",
      excerpt:
        "Custom stamps are more than just office tools — they're a mark of identity and efficiency.",
      link: "#",
    },
    {
      id: 2,
      image: "/latest-img2.png",
      title: "Importance of Custom Stamps for Your Business",
      excerpt:
        "Custom stamps are more than just office tools — they're a mark of identity and efficiency.",
      link: "#",
    },
  ];

  return (
    <div className="md:pt-30 pt-20 bg-white">
      <Navbar
        breadcrumb={`Digital Printing / ${currentCategory?.title}`}
        isBanner={false}
      />

      {/* Banner */}
      <div className="w-full">
        <img src="/digitalprinting-banner.png" className="w-full" alt="" />
      </div>

      <div className="max-w-[1400px] mx-auto flex gap-10 mt-10 pl-14 pr-6">
        {/* LEFT FILTER */}
        <div className="w-[260px] hidden lg:block">
          <h2 className="text-[32px] font-medium text-[#323232] mb-5">
            Filter
          </h2>

          {/* SEARCH */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search products"
              className="w-full border border-[#D9D9D9] rounded-md px-4 py-2.5 text-sm focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-[#323232] absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* MAIN CATEGORIES */}
          <div className="space-y-5">
            {Object.entries(digitalPrintingData).map(([key, value]) => (
              <div key={key}>
                {/* Main Category */}
                <div
                  className="flex justify-between items-center pb-3 border-b border-[#E5E5E5] cursor-pointer"
                  onClick={() => handleMainToggle(key)}
                >
                  <span className="text-lg font-medium text-[#323232]">
                    {value.title}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-[#323232] transition-transform duration-200 ${
                      openMain[key] ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Subcategories */}
                {openMain[key] && activeMain === key && (
                  <div className="mt-2 space-y-2">
                    {value.categories.map((cat, i) => (
                      <div key={i}>
                        <div
                          onClick={() => handleToggle(key, i, cat.name)}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <div
                            className={`w-5 h-5 rounded-sm flex items-center justify-center transition-all duration-200 ${
                              openSubcategories[key] === i
                                ? "bg-[#C6131B]"
                                : "bg-transparent border border-[#ACACAC]"
                            }`}
                          >
                            {openSubcategories[key] === i ? (
                              <ChevronUpIcon className="w-3 h-3 text-white" />
                            ) : (
                              <ChevronDownIcon className="w-3 h-3 text-[#ACACAC]" />
                            )}
                          </div>

                          <span className="text-[15px] font-medium text-[#323232]">
                            {cat.name}
                          </span>
                        </div>

                        {openSubcategories[key] === i && (
                          <div className="ml-2 mt-2 space-y-2 max-h-[150px] overflow-y-auto">
                            {cat.products.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-start gap-5"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full mt-2 cursor-pointer transition-colors ${
                                    selectedProducts.includes(item.id)
                                      ? "bg-[#C6131B]"
                                      : "bg-gray-400"
                                  }`}
                                  onClick={() => handleSelectProduct(item.id)}
                                ></span>

                                <span className="text-[14px] text-[#323232]">
                                  {item.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 border-l border-[#D9D9D9] pl-10 pt-2 pb-10">
          <h1 className="text-3xl font-semibold mb-2">
            {
              openSubcategories[activeMain] !== undefined &&
              openSubcategories[activeMain] !== null
                ? digitalPrintingData[activeMain].categories[
                    openSubcategories[activeMain]
                  ]?.name // Subcategory open → show subcategory name
                : activeMain
                  ? digitalPrintingData[activeMain].title // Only main category active → show main category name
                  : currentCategory?.title // fallback
            }
          </h1>
          <p className="text-sm mb-4 max-w-[700px]">
            Time-saving, budget-thinking, easy-to-customize printing products.
          </p>

          <div className="flex gap-3 mb-8">
            <button className="bg-[#C6131B] rounded-lg text-white px-5 py-2 text-sm">
              Browse Templates
            </button>
            <button className="bg-[#F4F4F4] px-5 py-2 text-sm rounded-lg">
              Upload Design
            </button>
          </div>

          {/* Preview Section */}
          <ProductPreviewSection />

          <h1 className="text-3xl mb-2 mt-2">SHOP BY SHAPE</h1>

          {/* PRODUCT CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {filteredProducts.map((p) => (
              <ProductCard5 key={p.id} {...p} isPrice />
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-center w-full h-[400px] md:h-[600px] md:p-24 p-10  bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/customize.png)`,
        }}
      >
        <div className="flex flex-col gap-5 max-w-md md:max-w-lg">
          <h1 className="text-white md:text-5xl text-2xl font-medium break-words">
            READY TO CUSTOMIZE YOUR STAMP
          </h1>
          <p className="text-white md:text-xl text-lg break-words">
            Design your stamp in minutes — choose style, upload logo or text,
            and order easily
          </p>
          <div>
            <WhiteButtonLink text="Custom Stamp Now" link="/stamp" />
          </div>
        </div>
      </div>
      <section className=" bg-gray-50 pb-16 px-4 sm:px-8 flex justify-center">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-medium tracking-widest uppercase mb-12">
            Latest News
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </div>
  );
};

export default DigitalPrintingCategories;
