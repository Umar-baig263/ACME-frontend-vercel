import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Contact/Section1";
import Section2 from "../../components/Contact/Section2";
import FaqSection from "../../components/main/FaqSection/FaqSection";

const Contact = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="contact-us" isBanner={false} />
      <Section1/>
      <Section2/>
      <FaqSection/>
    </div>
  );
};

export default Contact;
