import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import { digitalPrintingData } from "../../../../constants/digitalPrintingData";
import Section1 from "../../components/CustomizePage/Section1";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import CardEditor from "../../components/CardCustomize/CardEditor";

const CardCustomize = () => {
  // Flatten all products from digitalPrintingData
  const allCardProducts = Object.values(digitalPrintingData)
    .flatMap((main) => main.categories)
    .flatMap((sub) => sub.products);

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Custom Cards" isBanner={false} />

      <CardEditor />

      <Section1
        head="Choose Your Card Template"
        data={allCardProducts.slice(0, 10)}
        path="/card-product-description"
      />
      <Testmonial1 />
      <FaqSection />
    </div>
  );
};

export default CardCustomize;
