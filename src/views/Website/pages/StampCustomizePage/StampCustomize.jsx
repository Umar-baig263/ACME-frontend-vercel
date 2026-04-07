import Navbar from "../../components/main/Navbar/Navbar";
import { stampData } from "../../../../constants/stampData";
import Section1 from "../../components/CustomizePage/Section1";
import Testmonial1 from "../../components/main/Testmonials/Testmonial1";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import StampEditor from "../../components/StampCustomize/StampEditor";

const StampCustomize = () => {
  // Flatten all products from stampData
  const allStampProducts = Object.values(stampData)
    .flatMap((main) => main.categories)
    .flatMap((sub) => sub.products);

  return (
    <div className="md:pt-30 pt-20">
      <Navbar breadcrumb="Custom Stamps" isBanner={false} />
      <StampEditor />

      <Section1
        head="Choose Your Stamp Template"
        data={allStampProducts.slice(0, 10)}
        path="/stamp-description"
      />
      <Testmonial1 />
      <FaqSection />
    </div>
  );
};

export default StampCustomize;
