import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Checkout/Section1";

const CheckOut = () => {
  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="check-out" isBanner={false} />
      <Section1 />
    </div>
  );
};

export default CheckOut;
