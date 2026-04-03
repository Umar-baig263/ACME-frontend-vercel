import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";
import Section1 from "../../components/Marketing/Section1";
import Section2 from "../../components/Marketing/Section2";
import Section3 from "../../components/Marketing/Section3";
import Section4 from "../../components/Marketing/Section4";
import Banner from "../../components/main/Banner/Banner";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Section5 from "../../components/Marketing/Section5";

const Marketing = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="marketing-advertising" isBanner={false} />
      <HeaderBanner
        head="Marketing & Advertising Materials"
        isButton={true}
        desc="From business cards to banners  we’ve got your marketing covered. Make your message bold, clear, and impossible to ignore"
        btnLink="/contact"
        btnText="Contact Us"
        imgUrl="/marketing.png"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <Banner
        color="text-white"
        isred={false}
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom Stamp in minutes"
        btnLink="/stamp"
        btntext="Contact Us"
        img="/marketBanner.png"
      />
      <FaqSection/>
    </div>
  );
};

export default Marketing;
