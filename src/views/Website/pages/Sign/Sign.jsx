import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
// import Section1 from "../../components/Marketing/Section1";
// import Section2 from "../../components/Marketing/Section2";
import Section3 from "../../components/Marketing/Section3";
import Section4 from "../../components/Marketing/Section4";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Section5 from "../../components/Marketing/Section5";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import Section1 from "../../components/sign/Section1";
import Section2 from "../../components/sign/Section2";
// import Testimonial from "../../components/HomePage/Testimonial";

const Sign = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="signage" isBanner={false} />
      <HeaderBanner
        head="Signs That Speak Your Brand’s Language"
        isButton={true}
        desc="Custom signs made to reflect your brand, grab attention, and leave a lasting impression."
        btnLink="/contact"
        btnText="Contact Us"
        imgUrl="/sign.png"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Banner
        color="text-white"
        isred={false}
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom Stamp in minutes"
        btnLink="/stamp"
        btntext="Contact Us"
        img="/signBanner.png"
      />
      <Testmonial1 />
      <FaqSection />
    </div>
  );
};

export default Sign;
