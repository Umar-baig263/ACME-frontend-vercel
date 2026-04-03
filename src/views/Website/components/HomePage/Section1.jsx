import React from "react";
// import SideBar from "./SideBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Section1 = () => {
  const navLink = [
    {
      id: 1,
      name: "Home",
      url: "/home",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Shop",
      url: "/shop",
    },
    {
      id: 5,
      name: "Blog",
      url: "/blog",
    },
    {
      id: 6,
      name: "Help&FAQ",
      url: "/faq",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];
  const sampleBannerImages = [
    {
      url: "homeBanner.png",
    },
    {
      url: "homeBanner.png",
    },
    {
      url: "homeBanner.png",
    },
    {
      url: "homeBanner.png",
    },
    {
      url: "homeBanner.png",
    },
  ];
  const list = [
    {
      id: 1,
      title: "DIGITAL PRINTING",
      url: "homes1icon.png",
      link: "/digital-printing",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "STAMP",
      url: "homes1icon1.png",
      link: "/stamp",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "APPAREL",
      url: "homes1icon2.png",
      link: "/apparel",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "CORPORATE GIFTING",
      url: "homes1icon3.png",
      link: "/corporate-gifting",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "E-STORE",
      url: "homes1icon4.png",
      link: "/e-store",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "SIGNAGE",
      url: "homes1icon5.png",
      link: "/sign",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "MARKETING & ADVERTISING",
      url: "homes1icon6.png",
      link: "/marketing-advertising",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "IT & NETWORK SOLUTIONS",
      url: "homes1icon7.png",
      link: "/it-network-solution",
      subLinks: [
        {
          name: "BUSINESS CARD",
          items: [
            {
              name: "Standard Business Cards",
              url: "/",
            },
            {
              name: "Matte Finish Cards",
              url: "/",
            },
            {
              name: "Glossy Finish Cards",
              url: "/",
            },
            {
              name: "Embossed Cards",
              url: "/",
            },
            {
              name: "Foil Stamped Cards",
              url: "/",
            },
            {
              name: "Spot UV Cards",
              url: "/",
            },
            {
              name: "Textured Cards",
              url: "/",
            },
          ],
        },
        {
          name: "Stickers & Labels",
          items: [
            {
              name: "Custom Stickers & Labels",
              url: "/",
            },
            {
              name: "Printed Stickers & Product Labels",
              url: "/",
            },
            {
              name: "Adhesive Labels & Decals",
              url: "/",
            },
            {
              name: "Marketing Stickers & Tags",
              url: "/",
            },
            {
              name: "Die-Cut Stickers & Labels",
              url: "/",
            },
            {
              name: "Label & Sticker Printing",
              url: "/",
            },
            {
              name: "Packaging Stickers & Labels",
              url: "/",
            },
          ],
        },
        {
          name: " Card & print  advertising ",
          items: [
            {
              name: "Cards & Print Media",
              url: "/",
            },
            {
              name: "Print Marketing Materials",
              url: "/",
            },
            {
              name: "Branding & Print Essentials",
              url: "/",
            },
            {
              name: "Printed Promotion Tools",
              url: "/",
            },
            {
              name: "Business Cards & Advertising Prints",
              url: "/",
            },
            {
              name: "Print & Promo Solutions",
              url: "/",
            },
            {
              name: "Creative Print Branding",
              url: "/",
            },
          ],
        },
        {
          name: "Packaging",
          items: [
            {
              name: "Custom Packaging",
              url: "/",
            },
            {
              name: "Branded Packaging",
              url: "/",
            },
            {
              name: "Product Packaging Materials",
              url: "/",
            },
            {
              name: "Print & Packaging",
              url: "/",
            },
            {
              name: "Retail Packaging Supplies",
              url: "/",
            },
            {
              name: "Packaging & Wrapping",
              url: "/",
            },
            {
              name: "Packaging Boxes & Bags",
              url: "/",
            },
          ],
        },
        {
          name: "Signs, Banners & Posters",
          items: [
            {
              name: "Display & Promotional Prints",
              url: "/",
            },
            {
              name: "Large Format Prints",
              url: "/",
            },
            {
              name: "Outdoor & Indoor Displays",
              url: "/",
            },
            {
              name: "Marketing Signage & Banners",
              url: "/",
            },
            {
              name: "Visual Advertising Materials",
              url: "/",
            },
            {
              name: "Posters, Banners & Signboards",
              url: "/",
            },
            {
              name: "Event & Shop Display Prints",
              url: "/",
            },
          ],
        },
        {
          name: "Promotional Products",
          items: [
            {
              name: "Branded Giveaways",
              url: "/",
            },
            {
              name: "Marketing & Promo Items",
              url: "/",
            },
            {
              name: "Custom Promotional Items",
              url: "/",
            },
            {
              name: "Corporate Gifts & Merchandise",
              url: "/",
            },
            {
              name: "Promo Merchandise",
              url: "/",
            },
            {
              name: "Advertising Gifts",
              url: "/",
            },
            {
              name: "Business Promo Products",
              url: "/",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className=" w-full">
      <div className="relative flex lg:gap-8 md:gap-5 items-start">
        <div className="hidden md:flex lg:pl-26 md:pl-5 pl-5 lg:w-[27%] ">
          <div className="">
            <div className=" border border-gray-200 flex items-center px-4 py-4 font-bold text-base bg-gray-100">
              BROWSE CATEGORIES
            </div>
            {list.map((item) => (
              <div
                key={item.id}
                className="group border border-gray-200 text-base  flex items-center gap-4 px-4 py-4 cursor-pointer"
              >
                <div>
                  <img
                    className="w-[20px] h-[20px] flex-shrink-0"
                    src={item?.url}
                    alt=""
                  />
                </div>
                <Link
                  to={item?.link}
                  className="text-gray-600 group-hover:text-[#C6131B] font-bold text-sm whitespace-nowrap overflow-hidden"
                >
                  {item.title}
                </Link>
                <div className="absolute group-hover:block hidden top-5  left-87 border border-gray-300 top-0 bg-white p-5 z-100 ">
                  <div className="grid grid-rows-2 grid-flow-col">
                    {item?.subLinks?.map((d, i) => (
                      <div
                        className="flex flex-col gap-2 border-r px-5 py-3 border-gray-300 pr-5"
                        key={i}
                      >
                        <div className="font-bold text-sm">{d?.name}</div>
                        <div className="flex flex-col text-sm gap-1">
                          {d?.items?.map((d, i) => (
                            <Link to={d?.url} key={i} className="text-gray-700">
                              {d?.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:w-[73%] w-full h-full ">
          <div className="flex items-center justify-between w-full md:gap-5 gap-3 md:px-0 px-5 py-1.5 md:pr-26">
            {navLink.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className="flex items-center gap-3 md:p-2 p-0 cursor-pointer"
              >
                <div className="md:text-lg text-xs hover:font-bold">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              // effect="fade"
              modules={[Autoplay]}
              className="w-[100%] md:w-[100%] h-full"
            >
              {sampleBannerImages.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className=" relative w-full h-full">
                    <img
                      className="w-full h-full object-fill"
                      src={banner.url}
                      alt=""
                    />
                    <Link to="/shop">
                      <button className="absolute bottom-24 left-44 px-5 py-3 bg-white text-black text-xs cursor-pointer">
                        Browse Products
                      </button>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
