import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Blog/Section1";
import Section2 from "../../components/Blog/Section2";
import Section3 from "../../components/Blog/Section3";
import Section4 from "../../components/Blog/Section4";
import Banner from "../../components/main/Banner/Banner";

const Blog = () => {
  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar breadcrumb="blog" isBanner={false} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section4 />
      <Banner
        color="text-black"
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom design template in minutes"
        isred={false}
        img="shops4img.png"
        btntext="Custom Design Template"
        btnLink="/"
      />
      <Section3 />
      <Section3 />
    </div>
  );
};

export default Blog;
