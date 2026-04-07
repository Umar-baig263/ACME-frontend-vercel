// src/routes/WebsiteRoutes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../components/WebsiteLayout";
import Home from "../views/Website/pages/Home/Home";
import NotFound from "../views/Website/pages/NotFound/NotFound";
import AboutUs from "../views/Website/pages/AboutUs/AboutUs";
import Shop from "../views/Website/pages/Shop/Shop";
import Stamp from "../views/Website/pages/Stamp/Stamp";
import DigitalPrinting from "../views/Website/pages/DigitalPrinting/DigitalPrinting";
import Apparel from "../views/Website/pages/Apparel/Apparel";
import Contact from "../views/Website/pages/Contact/Contact";
import Corporate from "../views/Website/pages/Corporate/Corporate";
import EStore from "../views/Website/pages/EStore/EStore";
import Marketing from "../views/Website/pages/Marketing/Marketing";
import Sign from "../views/Website/pages/Sign/Sign";
import Login from "../views/Website/pages/Login/Login";
import Register from "../views/Website/pages/Register/Register";
import ItSolution from "../views/Website/pages/ItSolution/ItSolution";
import Setting from "../views/Website/pages/Setting/Setting";
import SlowComp from "../views/Website/pages/SlowComp/SlowComp";
import Wishlist from "../views/Website/pages/Wishlist/Wishlist";
import AddToCard from "../views/Website/pages/AddToCard/AddToCard";
import TrackOrderPage from "../views/Website/pages/TrackOrderPage/TackOrderPage";
import CheckOut from "../views/Website/pages/CheckOut/CheckOut";
import Blog from "../views/Website/pages/Blog/Blog";
import BlogDetail from "../views/Website/pages/BlogDetail/BlogDetail";
import StampsPro from "../views/Website/pages/Products/StampsPro";
import ApparelPro from "../views/Website/pages/Products/ApparelPro";
import EstorePro from "../views/Website/pages/Products/EstorePro";
import CoppratePro from "../views/Website/pages/Products/CoppratePro";
import CardsPro from "../views/Website/pages/Products/CardsPro";
import CustomizePage from "../views/Website/pages/Customize/CustomizePage";
import StampProductDesc from "../views/Website/pages/ProductDesc/StampProductDesc";
import CardProductDesc from "../views/Website/pages/ProductDesc/CardProductDesc";
import EStoreProductDesc from "../views/Website/pages/ProductDesc/EStoreProductDesc";
import ApparelProductDesc from "../views/Website/pages/ProductDesc/ApparelProductDesc";
import CardTemplate from "../views/Website/pages/Products/CardTemplate";
import MainPage from "../views/Website/Research/mainPage";

import StampCategories from "../views/Website/pages/StampCategories/StampCategories";
import DigitalPrintingCategories from "../views/Website/pages/DigitalPrintingCategories/DigitalPrintingCategories";
import CorporateProductDesc from "../views/Website/pages/ProductDesc/CorporateProductDesc";
import HelpFaq from "../views/Website/pages/HelpFaq/HelpFaq";
import StampCustomize from "../views/Website/pages/StampCustomizePage/StampCustomize";
import CardCustomize from "../views/Website/pages/CardCustomizePage/CardCustomize";
import ApparelCustomize from "../views/Website/pages/ApparelCustomizePage/ApparelCustomize";

const websiteRoutes = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "research",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "stamp",
        element: <Stamp />,
      },
      {
        path: "digital-printing",
        element: <DigitalPrinting />,
      },
      {
        path: "apparel",
        element: <Apparel />,
      },

      {
        path: "shop/:slug",
        element: <EStoreProductDesc />,
      },

      {
        path: "corporate-gifting",
        element: <Corporate />,
      },

      {
        path: "marketing-advertising",
        element: <Marketing />,
      },
      {
        path: "sign",
        element: <Sign />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "e-store",
        element: <EStore />,
      },
      {
        path: "e-store/:slug",
        element: <EStoreProductDesc />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "it-network-solution",
        element: <ItSolution />,
      },
      {
        path: "slow-computer",
        element: <SlowComp />,
      },
      {
        path: "account-setting",
        element: <Setting />,
      },
      {
        path: "wish-list",
        element: <Wishlist />,
      },
      {
        path: "check-out",
        element: <CheckOut />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog-detail",
        element: <BlogDetail />,
      },
      {
        path: "faq",
        element: <HelpFaq />,
      },
      {
        path: "cart",
        element: <AddToCard />,
      },
      {
        path: "stamp-description/:slug",
        element: <StampProductDesc />,
      },
      {
        path: "card-product-description/:slug",
        element: <CardProductDesc />,
      },
      {
        path: "e-store-description",
        element: <EStoreProductDesc />,
      },
      {
        path: "apparel-product-description/:slug",
        element: <ApparelProductDesc />,
      },
      {
        path: "corporate-product-description/:slug",
        element: <CorporateProductDesc />,
      },
      {
        path: "card-template",
        element: <CardTemplate />,
      },
      {
        path: "track-order",
        element: <TrackOrderPage />,
      },
      {
        path: "stamp-products",
        element: <StampsPro />,
      },
      {
        path: "customize",
        element: <CustomizePage />,
      },
      {
        path: "card-customize",
        element: <CardCustomize />,
      },
      {
        path: "stamp-customize",
        element: <StampCustomize />,
      },
      {
        path: "apparel-customize",
        element: <ApparelCustomize />,
      },
      {
        path: "apparel-products",
        element: <ApparelPro />,
      },
      {
        path: "estore-products",
        element: <EstorePro />,
      },
      {
        path: "corporate-products",
        element: <CoppratePro />,
      },
      {
        path: "card-products",
        element: <CardsPro />,
      },
      { path: "/stamp-categories", element: <StampCategories /> },



      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default websiteRoutes;
