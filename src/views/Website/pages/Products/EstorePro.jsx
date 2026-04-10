import React, { useEffect } from "react";
import Section1 from "../../components/EstoreProduct/Section1";
import Navbar from "../../components/main/Navbar/Navbar";
import { useLocation } from "react-router-dom";

const EstorePro = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Support both state-based (onProductClick) and query-param-based (View All link) navigation
  const category = location.state?.category || params.get("category") || "tshirt";

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
        breadcrumb="E-Store / Products"
        isBanner={true}
        img="apparelPro.png"
      />
      <div id="products-section">
        <Section1 defaultMain={category} defaultSub={null} />
      </div>
    </div>
  );
};

export default EstorePro;
