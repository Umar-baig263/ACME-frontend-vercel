import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section2 from "../../components/Products/Section2";
import { useLocation } from "react-router-dom";

const StampsPro = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const main = searchParams.get("main");

  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar
        breadcrumb="products /  Stamp"
        isBanner={true}
        img="StampProductBanner.png"
      />
      <Section2 defaultMain={main || "trodat"} />
    </div>
  );
};

export default StampsPro;
