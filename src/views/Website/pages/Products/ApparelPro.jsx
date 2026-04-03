import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/main/Navbar/Navbar";
import Section1 from "../../components/Products/Section1";

const ApparelPro = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const mainCat = params.get("main") || "tshirt"; // default to tshirt
  const subCat = params.get("sub") || null; // optional

  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar
        breadcrumb="products /  Apparel"
        isBanner={true}
        img="apparelPro.png"
      />
      <Section1 defaultMain={mainCat} defaultSub={subCat} />
    </div>
  );
};

export default ApparelPro;
