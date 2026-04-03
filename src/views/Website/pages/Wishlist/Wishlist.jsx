import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/WishList/Section1";

const Wishlist = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="wish-list" isBanner={false} />
      <Section1/>
    </div>
  );
};

export default Wishlist;
