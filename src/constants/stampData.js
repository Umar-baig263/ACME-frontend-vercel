import { inkingDaters } from "./inkingDaters";
import { printyDaters } from "./printyDaters";
import { printyStamps } from "./printyStamps";
import { professionalline } from "./professionalline";
import { stockstamps } from "./stockstamps";

export const stampData = {
  trodat: {
    title: "Trodat/Printy",
    categories: [
      {
        name: "Printy Stamps",
        products: printyStamps,
        img: "/trodatprinty-img1.png",
      },
      {
        name: "Printy Daters",
        products: printyDaters,
        img: "/trodatprinty-img2.png",
      },
      {
        name: "Non-Self Inking Daters",
        products: inkingDaters,
        img: "/trodatprinty-img3.png",
      },
      {
        name: "Professional Line",
        products: professionalline,
        img: "/trodatprinty-img4.png",
      },
      {
        name: "Stock Stamps",
        products: stockstamps,
        img: "/trodatprinty-img5.png",
      },
    ],
  },
  colop: {
    title: "Colop/2000 Plus",
    categories: [
      {
        name: "Colop Printer Line",
        products: printyStamps,
        img: "/colop-img1.png",
      },
      {
        name: "2000 Plus Stamps",
        products: printyDaters,
        img: "/colop-img2.png",
      },
      {
        name: "Colop Daters",
        products: inkingDaters,
        img: "/colop-img3.png",
      },
      {
        name: "Colop Pocket Stamps",
        products: professionalline,
        img: "/colop-img4.png",
      },
      {
        name: "Colop Accessories",
        products: stockstamps,
        img: "/colop-img5.png",
      },
    ],
  },
  rubber: {
    title: "Rubber Stamps",
    categories: [
      {
        name: "Rubber Stamps",
        products: printyStamps,
        img: "/rubberstamp-img1.png",
      },
      {
        name: "Wooden Handle Stamps",
        products: printyDaters,
        img: "/rubberstamp-img2.png",
      },
      {
        name: "Custom Rubber Stamps",
        products: inkingDaters,
        img: "/rubberstamp-img3.png",
      },
      {
        name: "Office Rubber Stamps",
        products: professionalline,
        img: "/rubberstamp-img4.png",
      },
      {
        name: "Date Rubber Stamps",
        products: stockstamps,
        img: "/rubberstamp-img5.png",
      },
    ],
  },
  pads: {
    title: "Pads, Inks & Racks",
    categories: [
      {
        name: "Stamp Pads",
        products: printyStamps,
        img: "/padsandinks-img1.png",
      },
      {
        name: "Ink Refills",
        products: printyDaters,
        img: "/padsandinks-img2.png",
      },
      {
        name: "Trodat Ink",
        products: inkingDaters,
        img: "/padsandinks-img3.png",
      },
      {
        name: "Color Ink Pads",
        products: professionalline,
        img: "/padsandinks-img4.png",
      },
      {
        name: "Quick-Dry Inks",
        products: stockstamps,
        img: "/padsandinks-img5.png",
      },
    ],
  },
  embossing: {
    title: "Embossing Seal",
    categories: [
      {
        name: "Common Seal",
        products: printyStamps,
        img: "/embossingseal-img1.png",
      },
      {
        name: "Pocket Embossers",
        products: printyDaters,
        img: "/embossingseal-img2.png",
      },
      {
        name: "Desk Embossers",
        products: inkingDaters,
        img: "/embossingseal-img1.png",
      },
      {
        name: "Custom Embossing Seals",
        products: professionalline,
        img: "/embossingseal-img2.png",
      },
      {
        name: "Notary Embossers",
        products: stockstamps,
        img: "/embossingseal-img1.png",
      },
    ],
  },
  stencils: {
    title: "Custom Stencils",
    categories: [
      {
        name: "Alphabet Stencils",
        products: printyStamps,
        img: "/stencils-img1.png",
      },
      {
        name: "Number Stencils",
        products: printyDaters,
        img: "/stencils-img2.png",
      },
      {
        name: "Custom Stencils",
        products: inkingDaters,
        img: "/stencils-img3.png",
      },
      {
        name: "Industrial Stencils",
        products: professionalline,
        img: "/stencils-img4.png",
      },
      {
        name: "Plastic Stencils",
        products: stockstamps,
        img: "/stencils-img5.png",
      },
    ],
  },
};
