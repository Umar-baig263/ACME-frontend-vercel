import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/BlogDetail/Section1";
import Banner from "../../components/main/Banner/Banner";
import Section3 from "../../components/Blog/Section3";

const BlogDetail = () => {
  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar breadcrumb="Blog Detail" isBanner={false} />
      <Section1/>
      <Banner
        color="text-black"
        heading="Have an Idea? Let's Design It"
        subheading="Get started with your custom design template in minutes"
        isred={false}
        img="shops4img.png"
        btntext="Custom Design Template"
        btnLink="/card-template"
      />
      <Section3 />
      <Section3 />
    </div>
  );
};

export default BlogDetail;
