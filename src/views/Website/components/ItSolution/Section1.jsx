import React from "react";
// import SideBar from "./SideBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import RedButton from "../main/Buttons/RedButton";
import RedButtonLink from "../main/Buttons/RedButtonLink";

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
      title: "Computer/Printers Fix/Repair Services",
      url: "homes1icon.png",
      link: "",
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
      title: "Computer & IT Support",
      url: "homes1icon1.png",
      link: "",
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
      title: "Managed IT Services",
      url: "homes1icon2.png",
      link: "",
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
      title: "Structured and Network Cabling",
      url: "homes1icon3.png",
      link: "",
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
      <div className="relative flex lg:gap-5 md:gap-2 justify-between items-start overflow-hidden">
        <div className="hidden md:flex lg:pl-26 md:pl-5 pl-5 lg:w-[27%] ">
          <div className="">
            <div className=" border border-gray-200 flex items-center px-4 py-4 font-bold text-base bg-gray-100">
              Browse Categories
            </div>
            {list.map((item) => (
              <div
                key={item.id}
                className="group border border-gray-200 text-base text-base flex items-center gap-3 px-4 py-3.5 hover:bg-gray-100 cursor-pointer"
              >
                <div>
                  <img className="w-[20px] h-[20px]" src={item?.url} alt="" />
                </div>
                <div className="text-gray-600 font-bold group-hover:text-[#C6131B]">{item.title}</div>
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
          <div className="flex flex-col gap-5 text-white lg:py-26 md:py-10 py-10 md:px-10 px-5  bg-[url('ItBanner.png')]  bg-cover bg-center bg-no-repeat">
            {/* <img src="about.png" alt="Banner" className="w-full object-cover" /> */}
            <div className="flex flex-col gap-5 md:w-3/4 w-full">
              <div className="md:text-5xl text-xl font-bold">Revolutionize Your Online Presence</div>
              <div className="md:text-xl text-base">
                We help businesses thrive in the digital world through
                innovative web development, IT solutions, and creative
                strategies tailored to elevate your online presence.
              </div>
              <div>
                <RedButtonLink text="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
