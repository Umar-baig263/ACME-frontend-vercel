// import React from "react";
// import Navbar from "../../components/main/Navbar/Navbar";
// import StampDesc from "../../components/ProductDesc/StampDesc";
// import FaqSection from "../../components/main/FaqSection/FaqSection";
// import ReviewSec from "../../components/ProductDesc/ReviewSec";
// import Banner from "../../components/main/Banner/Banner";
// import  { useLocation } from "react-router-dom";

// const StampProductDesc = () => {
//      const { state } = useLocation();   
//     const product = state?.product || {};    
//     <Navbar breadcrumb={`Stamp / ${product?.name || ''}`} isBanner={false} />

//     return (
//         <div className="md:pt-30 pt-20">
//             {/* <Navbar breadcrumb="stamp-description" isBanner={false} /> */}
//             <Navbar breadcrumb={`Stamp / ${product?.name || ''}`} isBanner={false} />

//             <StampDesc />
//             <Banner
//                 color="text-white"
//                 isred={false}
//                 heading="Ready to Bring Your Brand to Life?"
//                 subheading="Let’s create something impactful together."
//                 btnLink="/stamp"
//                 width={"w-1/2"}
//                 btntext="Contact Us"
//                 img="/stampDescBanner.png"
//             />
//             <ReviewSec isSearch={true} />
//             <FaqSection />
//         </div>
//     )
// }


// export default StampProductDesc;

import React from "react";
import Navbar from "../../components/main/Navbar/Navbar";
import StampDesc from "../../components/ProductDesc/StampDesc";
import FaqSection from "../../components/main/FaqSection/FaqSection";
import ReviewSec from "../../components/ProductDesc/ReviewSec";
import Banner from "../../components/main/Banner/Banner";
import { useLocation, useParams } from "react-router-dom";
import { stampData } from "../../../../constants/stampData";

const StampProductDesc = () => {
    const { state } = useLocation();
    const { slug } = useParams();

    let product = state?.product || state;

    if (!product || !product.id) {
        // Fallback to searching in stampData by slug
        const allProducts = Object.values(stampData)
            .flatMap((main) => main.categories || [])
            .flatMap((sub) => sub.products || []);
        product = allProducts.find((p) => p.slug === slug) || {};
    }

    return (
        <div className="md:pt-30 pt-20">
            <Navbar breadcrumb={`Stamps / ${product?.name || ''}`} isBanner={false} />

            {/* StampDesc me product prop pass karo */}
            <StampDesc product={product} />

            <Banner
                color="text-white"
                isred={false}
                heading="Ready to Bring Your Brand to Life?"
                subheading="Let’s create something impactful together."
                btnLink="/stamp"
                width={"w-1/2"}
                btntext="Contact Us"
                img="/stampDescBanner.png"
            />
            <ReviewSec isSearch={true} />
            <FaqSection />
        </div>
    );
};

export default StampProductDesc;
