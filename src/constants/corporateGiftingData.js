// corporateGiftingData.js

import { bottles } from "./bottles";
import { gift } from "./gift";
import { pens } from "./pens";
import { tech } from "./tech";

export const corporateGiftingData = {
  gifts: {
    title: "TOP SELLING GIFT BOXES",
    categories: [
      {
        name: "Classic Gift Boxes",
        products: gift,
        img: "/giftbox-1.png",
      },
      {
        name: "Premium Gift Boxes",
        products: gift,
        img: "/giftbox-2.png",
      },
      {
        name: "Luxury Gift Boxes",
        products: gift,
        img: "/giftbox-3.png",
      },
    ],
  },
  mugs: {
    title: "CUSTOMIZED MUGS & BOTTLES",
    categories: [
      {
        name: "Custom Mugs",
        products: bottles,
        img: "/mug-1.png",
      },
      {
        name: "Personalized Bottles",
        products: bottles,
        img: "/bottle-1.png",
      },
    ],
  },
  tech: {
    title: "USEFUL BRANDED TECH GIFTS",
    categories: [
      {
        name: "Branded Power Banks",
        products: tech,
        img: "/tech-1.png",
      },
      {
        name: "Wireless Gadgets",
        products: tech,
        img: "/tech-2.png",
      },
      {
        name: "Desk Tech Accessories",
        products: tech,
        img: "/tech-3.png",
      },
    ],
  },
  pens: {
    title: "BRANDED PENS & NOTEBOOKS",
    categories: [
      {
        name: "Premium Pens",
        products: pens,
        img: "/pen-1.png",
      },
      {
        name: "Personalized Notebooks",
        products: pens,
        img: "/notebook-1.png",
      },
      {
        name: "Corporate Stationery Sets",
        products: pens,
        img: "/stationery-1.png",
      },
    ],
  },
};
