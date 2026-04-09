import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import Section1 from "../../components/CustomizePage/Section1";
import { apparelData } from "../../../../constants/apparelData";

import ApparelEditor from "../../components/ApparelCustomize/ApparelEditor";

export default function ApparelCustomize() {
  // Flatten all products from apparelData
  const allApparelProducts = Object.values(apparelData)
    .flatMap((cat) => cat.categories)
    .flatMap((sub) => sub.products);

  return (
    <div className="md:pt-30 pt-20 overflow-hidden">
      <Navbar breadcrumb="Custom Apparel" isBanner={false} />
      
      {/* STANDARDIZED APPAREL EDITOR SUITE */}
      <ApparelEditor />

      <Section1
        head="Related Products"
        data={allApparelProducts.slice(0, 10)}
        path="/apparel-product-description"
      />

      <Testmonial1 />
      <FaqSection />
    </div>
  );
}
