import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Section2 from "../../components/Products/Section2";
import { useLocation } from "react-router-dom";

const StampsPro = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const main = searchParams.get("main");

  useEffect(() => {
    const el = document.getElementById("products-section");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar
        breadcrumb="Stamp / Products"
        isBanner={true}
        img="StampProductBanner.png"
      />
      <div id="products-section">
        <Section2 defaultMain={main || "trodat"} />
      </div>
    </div>
  );
};

export default StampsPro;
