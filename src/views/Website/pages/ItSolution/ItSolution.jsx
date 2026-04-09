import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/ItSolution/Section1";
import Section2 from "../../components/ItSolution/Section2";
import Section3 from "../../components/ItSolution/Section3";
import Section4 from "../../components/ItSolution/Section4";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Banner from "../../components/main/Banner/Banner";
import Section5 from "../../components/ItSolution/section5";
import Section6 from "../../components/ItSolution/Section6";

const ItSolution = () => {
  return (
    <div className="md:pt-35 pt-20">
      <Navbar breadcrumb="IT Solutions" isBanner={false} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6
        img="itSec6.png"
        des1="Creative solutions for your brand are innovative and unique strategies designed to help your business stand out in a crowded market. These solutions are tailor-made to meet the specific needs of your brand, and can include anything from logo design to social media marketing campaigns, to experiential activations that engage customers in interactive and immersive ways."
        // des2="This philosophy is the essence of who we are and what we stand for. It inspires us to work with passion and purpose, ensuring that every solution we deliver empowers businesses to reach their fullest potential"
        head="Creative solutions for your brand."
        isreversed={false}
        pad="md:mt-20 mt-10"
      />
      <Banner
        color="text-white"
        width="md:w-3/4 w-full"
        isred={false}
        heading="Ready to speak with a marketing expert? Give us a ring"
        subheading="Let’s grow your brand—one call away."
        btnLink="/contact"
        btntext="Contact Us"
        img="itBanner2.png"
      />
      <FaqSection />
    </div>
  );
};

export default ItSolution;
