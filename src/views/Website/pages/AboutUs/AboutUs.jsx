import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/AboutUs/Section1";
import Section2 from "../../components/AboutUs/Section2";
import Section3 from "../../components/AboutUs/Section3";
import FaqSection from "../../components/main/FaqSection/FaqSection"
import Section5 from "../../components/AboutUs/Section5";
import LatestNews from "../../components/main/LastestNews/LastestNews";

const AboutUs = () => {
  const card = [
    {
      head : "Importance of Custom Stamps for Your Business",
      desc: "Custom stamps are more than just office tools — they’re a mark of identity and efficiency.",
      img: "s6img1.png",
    },
    {
      head : "Importance of Custom Stamps for Your Business",
      desc: "Custom stamps are more than just office tools — they’re a mark of identity and efficiency.",
      img: "s6img2.png",
    },
  ]
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="about-us" img="about.png" isBanner={true} />
      <Section1 />
      <Section2
        img="abouts1.png"
        des1="To provide businesses with a unified platform where creativity, strategy, and technology converge to create impactful results, enabling them to thrive in local and global markets"
        des2="This philosophy is the essence of who we are and what we stand for. It inspires us to work with passion and purpose, ensuring that every solution we deliver empowers businesses to reach their fullest potential"
        head="Our Mission"
        isreversed={false}
        pad="md:mt-20 mt-10"
      />
      <Section3
        heading="Ready to Bring Your Brand to Life?"
        subheading="Let’s create something impactful together."
        btntext="Contact Us Today"
        btnLink="/contact"
        img="abouts3.png"
      />
      <Section2
        img="abouts4.png"
        des1="To become the go-to partner for businesses seeking reliable, innovative, and creative solutions that drive their success in an ever-changing world."
        des2="This philosophy is the essence of who we are and what we stand for. It inspires us to work with passion and purpose, ensuring that every solution we deliver empowers businesses to reach their fullest potential"
        head="Our Vision"
        isreversed={true}
        pad="md:mt-20 mt-10"
      />
      <Section5/>
      <LatestNews data={card} />
      <FaqSection />
    </div>
  );
};

export default AboutUs;
