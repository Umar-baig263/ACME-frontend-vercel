import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/AddToCard/Section1";

const AddToCard = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="cart" isBanner={false} />
      <Section1 />
    </div>
  );
};

export default AddToCard;
