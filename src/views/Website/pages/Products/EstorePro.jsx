import React from "react";
import Section1 from "../../components/EstoreProduct/Section1";
import Navbar from "../../components/main/Navbar/Navbar";
import { useLocation } from "react-router-dom";

const EstorePro = () => {
  const location = useLocation();

  // Get the selected category from EStore page
  const category = location.state?.category || "T-Shirts"; // default fallback

  return (
    <div className="md:pt-30 pt-20 pb-26">
      <Navbar
        breadcrumb="E-Store / Products"
        isBanner={true}
        img="apparelPro.png"
      />
      <Section1 defaultMain={category} defaultSub={null} />
    </div>
  );
};

export default EstorePro;
