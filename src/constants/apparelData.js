import { fullSleeve } from "./fullSleeve";
import { halfSleeve } from "./halfSleeve";
import { vNeck } from "./vNeck";
import { polloCollar } from "./polloCollar";
import { hoodie } from "./hoodie";

export const apparelData = {
  tshirt: {
    title: "T-Shirt",
    categories: [
      {
        name: "Half Sleeve",
        products: halfSleeve,
        img: "/t-shirt1.png",
      },
      {
        name: "Full Sleeve",
        products: fullSleeve,
        img: "/t-shirt2.png",
      },
      {
        name: "V-Neck",
        products: vNeck,
        img: "/t-shirt5.png",
      },
      {
        name: "Pollo Collar",
        products: polloCollar,
        img: "/t-shirt3.png",
      },
      {
        name: "Hoodie",
        products: hoodie,
        img: "/t-shirt4.png",
      },
    ],
  },
  jacket: {
    title: "Jacket",
    categories: [
      {
        name: "Puffer Jacket",
        products: halfSleeve,
        img: "/jacket-1.png",
      },
      {
        name: "Bomber Jacket",
        products: halfSleeve,
        img: "/jacket-2.png",
      },
      {
        name: "Denim Jacket",
        products: halfSleeve,
        img: "/jacket-3.png",
      },
      {
        name: "Leather Biker Jacket",
        products: halfSleeve,
        img: "/jacket-4.png",
      },
      {
        name: "Windbreaker Jacket",
        products: halfSleeve,
        img: "/jacket-5.png",
      },
    ],
  },
  paint: {
    title: "Paint & Short",
    categories: [
      {
        name: "Acrylic Paint",
        products: halfSleeve,
        img: "/paint-1.png",
      },
      {
        name: "Matte Paint",
        products: halfSleeve,
        img: "/paint-2.png",
      },
      {
        name: "Glossy Paint",
        products: halfSleeve,
        img: "/paint-3.png",
      },
      {
        name: "Waterproof Paint",
        products: halfSleeve,
        img: "/paint-4.png",
      },
      {
        name: "Premium Paint",
        products: halfSleeve,
        img: "/paint-5.png",
      },
    ],
  },
  cap: {
    title: "Cap",
    categories: [
      {
        name: "Baseball Cap",
        products: halfSleeve,
        img: "/cap-1.png",
      },
      {
        name: "Street Cap",
        products: halfSleeve,
        img: "/cap-2.png",
      },
      {
        name: "Sports Cap",
        products: halfSleeve,
        img: "/cap-3.png",
      },
      {
        name: "Trucker Cap",
        products: halfSleeve,
        img: "/cap-4.png",
      },
      {
        name: "Cotton Cap",
        products: halfSleeve,
        img: "/cap-5.png",
      },
    ],
  },
  shirt: {
    title: "Shirt",
    categories: [
      {
        name: "Formal Shirt",
        products: halfSleeve,
        img: "/shirt-1.png",
      },
      {
        name: "Slim Fit Shirt",
        products: halfSleeve,
        img: "/shirt-2.png",
      },
      {
        name: "Casual Shirt",
        products: halfSleeve,
        img: "/shirt-3.png",
      },
      {
        name: "Linen Shirt",
        products: halfSleeve,
        img: "/shirt-4.png",
      },
      {
        name: "Denim Shirt",
        products: halfSleeve,
        img: "/shirt-5.png",
      },
    ],
  },
};
