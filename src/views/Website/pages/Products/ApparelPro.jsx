import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Products/Section1";

const ApparelPro = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const mainCat = params.get("main") || "tshirt"; // default to tshirt
  const subCat = params.get("sub") || null; // optional

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
        breadcrumb="Apparel / Products"
        isBanner={true}
        img="apparelPro.png"
      />
      <div id="products-section">
        <Section1 defaultMain={mainCat} defaultSub={subCat} />
      </div>
    </div>
  );
};

export default ApparelPro;
