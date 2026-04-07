import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
// import Section1 from "../../components/Shop/Section1";
import Section2 from "../../components/Shop/Section2";
import Section3 from "../../components/Shop/Section3";
import Banner from "../../components/main/Banner/Banner";
import Section4 from "../../components/Shop/Section4";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Section5 from "../../components/Shop/Section5";
import HeaderBanner from "../../components/main/HeaderBanner/HeaderBanner";


const Shop = () => {
  return (
    <div className="md:pt-30 pt-20">
         <Navbar breadcrumb="shop" isBanner={false} />
         <HeaderBanner head="Customized Prints That Speak Your Brand" desc="Discover our most popular customizable items, ready to be personalized your way" btnLink="/apparel-customize" btnText="Customize your design" imgUrl="/shop-banner.png" isButton={true}/>
         <Section2/>
         <Section3/>
         <Banner color="text-black" heading="Have an Idea? Let's Design It" subheading="Get started with your custom design template in minutes" isred={false} img="shops4img.png"  btntext="Custom Design Template" btnLink="/card-template" />
         <Section4/>
         <Section5/>
         <FaqSection/>
    </div>
  );
}

export default Shop;