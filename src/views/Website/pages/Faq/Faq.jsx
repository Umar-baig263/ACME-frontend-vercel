import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import FaqSection from "../../components/main/FaqSection/FaqSection";

const Faq = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="help-faq" />
      <div className="py-10">
        <FaqSection />
      </div>
    </div>
  );
};

export default Faq;
