import React from "react";
import Section1 from "../../components/HomePage/Section1";
import Section2 from "../../components/HomePage/section2";
import Section3 from "../../components/HomePage/section3";
// import Section4 from "../../components/HomePage/Section4";
import Banner from "../../components/main/Banner/Banner.jsx";
import Section5 from "../../components/HomePage/Section5";
import Section6 from "../../components/HomePage/Section6.jsx";
import Section7 from "../../components/HomePage/Section7.jsx";
import Section8 from "../../components/HomePage/Section8.jsx";
// import Section9 from "../../components/HomePage/section9.jsx";
import Testimonial from "../../components/HomePage/Testimonial.jsx";
import FaqSection from "../../components/main/FaqSection/FaqSection.jsx";
import ImgText from "../../components/main/ImgText/ImgText.jsx";

const Home = () => {
  return (
    <div className="md:pt-35 pt-20">
      <Section1 />
      <Section2 />
      <Section3 />
      <Banner
        color="text-white"
        isred={false}
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom Stamp in minutes"
        btnLink="/stamp-customize"
        btntext="Custom your Own Stamp"
        img="/homes4.jpg"
      />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <ImgText
        head="Start Your Customization Journey Today"
        pad="md:mt-30 mt-20"
        des="Let your imagination lead. From mugs to hoodies to totes—add your design, and we’ll print it to perfection."
        btntext="Start Customizing"
        btnlink="/corporate-gifting"
        img="h9img1.png"
        isreversed={true}
      />
      <ImgText
        head="Beyond Printing – Grow Your Business"
        pad="mt-10"
        des="We don’t just print—we help you grow. Get expert marketing services tailored for creators, startups, and businesses."
        btntext="Explore Marketing Services"
        btnlink="/marketing-advertising"
        img="h10img2.png"
      />
      <Banner
        color="text-white"
        isred={false}
        heading="Have an Idea? Let's Print It"
        subheading="Get started with your custom design in minutes"
        btnLink="/shop"
        btntext="Browse Products"
        img="/homes11.jpg"
      />
      <Testimonial />
      <FaqSection />
    </div>
  );
};

export default Home;
