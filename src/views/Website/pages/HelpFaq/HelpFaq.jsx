import React, { useState } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Footer from "../../components/main/Footer/Footer"; // Assuming Footer exists
import {
  FaPlus,
  FaMinus,
  FaSearch,
  FaBox,
  FaTruck,
  FaBrush,
  FaQuestionCircle,
} from "react-icons/fa";

const HelpFaq = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      id: 1,
      category: "general",
      icon: <FaQuestionCircle />,
      question: "What is ACME and what do you offer?",
      answer:
        "ACME is your premier destination for high-quality custom printing, stamps, apparel, and corporate gifting solutions. We help businesses and individuals bring their ideas to life through expert craftsmanship and modern printing technology.",
    },
    {
      id: 2,
      category: "ordering",
      icon: <FaBox />,
      question: "How do I place a custom order?",
      answer:
        "Simply navigate to the product category you're interested in (e.g., Stamps or Apparel), select your product, and use our customization tool to upload your logo or text. Once you're happy with the design, add it to your cart and proceed to checkout.",
    },
    {
      id: 3,
      category: "shipping",
      icon: <FaTruck />,
      question: "What are your standard delivery times?",
      answer:
        "Standard delivery usually takes 3-5 business days. For highly customized or bulk corporate orders, it may take 7-10 business days. We also offer express shipping options at checkout.",
    },
    {
      id: 4,
      category: "customization",
      icon: <FaBrush />,
      question: "What file formats do you accept for logos?",
      answer:
        "We prefer high-resolution vector files like .AI, .EPS, or .PDF for the best printing results. However, we also accept high-quality .PNG and .JPG files. If your artwork needs refinement, our design team can assist you.",
    },
    {
      id: 5,
      category: "ordering",
      icon: <FaBox />,
      question: "Can I cancel my order after it's been placed?",
      answer:
        "Since most of our products are custom-made, cancellations are only possible within 2 hours of placing the order. Once production has started, we unfortunately cannot cancel the order.",
    },
    {
      id: 6,
      category: "shipping",
      icon: <FaTruck />,
      question: "How can I track my order status?",
      answer:
        "Once your order ships, you'll receive an email with a tracking number. You can also track your order directly on our 'Track Order' page using your order ID.",
    },
    {
      id: 7,
      category: "general",
      icon: <FaQuestionCircle />,
      question: "Do you offer bulk discounts for corporate gifting?",
      answer:
        "Yes! We specialize in corporate gifting and offer significant discounts for bulk orders. Please contact our corporate sales team through the 'Corporate Gifting' page for a custom quote.",
    },
  ];

  const categories = [
    { id: "all", name: "All Questions", icon: <FaQuestionCircle /> },
    { id: "general", name: "General Info", icon: <FaQuestionCircle /> },
    { id: "ordering", name: "Ordering", icon: <FaBox /> },
    { id: "shipping", name: "Shipping", icon: <FaTruck /> },
    { id: "customization", name: "Customization", icon: <FaBrush /> },
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:pt-30 pt-20 min-h-screen bg-gray-50">
      <Navbar breadcrumb="Help & FAQ" isBanner={false} />

      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#C6131B] to-[#9A0F1E] text-white py-16 px-5 text-center">
        <h1 className="md:text-5xl text-3xl font-bold mb-4">
          How can we help you?
        </h1>
        <p className=" mb-8 max-w-2xl mx-auto">
          Find answers to common questions about our products, customization,
          and delivery services.
        </p>

        <div className="max-w-xl mx-auto relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-black outline-hidden shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-12 px-5">
        <div className="flex md:flex-row flex-col gap-10">
          {/* Categories Sidebar */}
          <div className="md:w-1/4">
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveIndex(null);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[#C6131B] text-white shadow-md shadow-red-200"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat.icon}
                  <span className="font-medium">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Quick Contact Box */}
            <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold mb-2">Still need help?</h4>
              <p className="text-sm text-gray-500 mb-4">
                Our support team is available 24/7 to assist you with any
                queries.
              </p>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="w-full py-2 border-2 border-black font-bold rounded-lg hover:bg-black hover:text-white transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="md:w-3/4">
            <div className="flex flex-col gap-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`p-2 rounded-lg text-lg ${activeCategory === faq.category ? "text-[#C6131B]" : "text-gray-400"}`}
                        >
                          {faq.icon}
                        </span>
                        <span className="font-semibold text-lg md:text-xl">
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={`text-xl transition-transform duration-300 ${activeIndex === index ? "rotate-45 text-[#C6131B]" : ""}`}
                      >
                        {activeIndex === index ? (
                          <FaPlus className="rotate-45" />
                        ) : (
                          <FaPlus />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                        activeIndex === index
                          ? "max-h-96 pb-6 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-2 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl">
                  <p className="text-gray-500 text-lg">
                    No questions found matching your search.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="mt-4 text-[#C6131B] font-bold"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpFaq;
