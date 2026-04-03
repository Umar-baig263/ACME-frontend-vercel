import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/CustomizePage/Section1";
import Testimonial from "../../components/HomePage/Testimonial";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import ProductCustomizer from "./ProductCustomizer";

const CustomizePage = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="customize / product / id" isBanner={false} />
      <ProductCustomizer />
      <Section1 />
      <Testmonial1 />
      <FaqSection />
    </div>
  );
};

export default CustomizePage;
