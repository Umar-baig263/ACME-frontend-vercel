import React, { useState } from "react";
import RedButton from "../main/Buttons/RedButton";
import { AiOutlineHeart } from "react-icons/ai";
import ProductCard2 from "../main/ProductCard/ProductCard2";
import Filter from "./Filter";
import Cate from "./Cat";
import { FaAngleDown, FaAngleRight, FaAngleUp, FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import UpperNav from "./UpperNav";
import ProductCard1 from "../main/ProductCard/ProductCard1";
import OutlineButton from "../main/Buttons/OutlineButton";
import { IoCloudUploadOutline } from "react-icons/io5";
import ProductCard3 from "../main/ProductCard/ProductCard3";
import ReviewSec from "../ProductDesc/ReviewSec";

const FilterSection = ({ title, children, text, isDown, pad }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`flex flex-col gap-1  ${pad}`}>
            {isDown ? (
                <button
                    className={`flex gap-2 items-center w-full`}
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <div className="p-1 rounded-md border border-[#C6131B] bg-[#C6131B] text-white text-xs">
                            <FaAngleUp />
                        </div>
                    ) : (
                        <div className="p-1 rounded-md border border-[#C6131B] bg-white text-[#C6131B] text-xs">
                            <FaAngleDown />
                        </div>
                    )}
                    <span className={`${text}`}>{title}</span>
                </button>
            ) : (
                <button
                    onClick={() => setOpen(!open)}
                    className={`w-full flex items-center justify-between py-3 text-left ${text}`}
                >
                    {title}
                    {open ? <FaAngleUp /> : <FaAngleDown />}
                </button>
            )}
            {open && <div className=" pb-2">{children}</div>}
        </div>
    );
};


const CarTempSec1 = () => {
    const filter = [
        {
            name: "Traditional Card",
            sub: [
                {
                    name: "Printy Stamp",
                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
        {
            name: "Unique Card",
            sub: [
                {
                    name: "Printy Stamp",

                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
        {
            name: "Premium Card",
            sub: [
                {
                    name: "Printy Stamp",

                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
        {
            name: "ECO Card",
            sub: [
                {
                    name: "Printy Stamp",

                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
        {
            name: "Digital Card",
            sub: [
                {
                    name: "Printy Stamp",

                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
        {
            name: "Holders & More",
            sub: [
                {
                    name: "Printy Stamp",

                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
        {
            name: "Custom Stencils",
            sub: [
                {
                    name: "Printy Stamp",

                },
                {
                    name: "Stamp",

                },
                {
                    name: "Stamps",
                },
            ],
        },
    ];
    const product = [
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#00FF00",
            ]
        },
        {
            img: "producttemp2.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#000000",
                "#00FF00",
            ]
        },
        {
            img: "producttemp4.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#00FF00",
            ]
        },
        {
            img: "producttemp2.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#000000",
                "#00FF00",
            ]
        },
        {
            img: "producttemp4.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#00FF00",
            ]
        },
        {
            img: "producttemp2.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#000000",
                "#00FF00",
            ]
        },
        {
            img: "producttemp4.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#00FF00",
            ]
        },
        {
            img: "producttemp2.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#000000",
                "#00FF00",
            ]
        },
        {
            img: "producttemp4.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#00FF00",
            ]
        },
        {
            img: "producttemp2.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
                "#E0F335",
                "#000000",
                "#00FF00",
            ]
        },
        {
            img: "producttemp4.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },
        {
            img: "producttemp1.png",
            name: "Standard ( 3.5”   2”)",
            color: [
                "#2342f4",
                "#C6131B",
            ]
        },

    ]
    const productOptions = [
        {
            name: "Matte",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Subtle & sophisticated", "Best for displaying text & finer details", "Minimizes glare & reflections"],
            options: ["Thickness: 14pt, 16pt, 18pt", "Shapes: Standard, square", "Metallic foil, raised finishes", "Corners: Standard, rounded"]
        },
        {
            name: "Glossy",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Bold & shiny", "Great for photos", "Eye-catching finish"],
            options: ["Thickness: 14pt", "Shapes: Standard", "Gloss UV coating", "Corners: Square"]
        },
        {
            name: "Embossed",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Elegant raised text", "Great texture", "Professional finish"],
            options: ["Embossed foil", "Cotton stock", "Thick layered paper"]
        },
        {
            name: "Uncoated",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Natural feel", "Writeable surface", "Matte appearance"],
            options: ["Recycled stock", "Writable", "Soft finish"]
        },
        {
            name: "White Plastic",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Durable material", "Waterproof", "Bright white base"],
            options: ["Plastic card", "Glossy coating", "Rounded corners"]
        },
        {
            name: "Premium Plus",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Ultra thick", "Luxury finish", "Smooth edges"],
            options: ["Triple-layered", "Edge color", "High definition print"]
        },
        {
            name: "Soft Touch",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Velvety texture", "High-end feel", "Scratch resistant"],
            options: ["Soft laminate", "Premium stock", "Rounded corners"]
        },
        {
            name: "Foil Accent",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Shiny foil", "Eye-catching details", "Premium impact"],
            options: ["Gold, silver, rose foil", "Spot accents", "Foil on logo"]
        },
        {
            name: "Painted Edge",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Bold edge colors", "Thick cards", "Modern look"],
            options: ["Colored edge", "Extra thickness", "Textured options"]
        },
        {
            name: "Transparent",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Frosted look", "Unique design", "Waterproof"],
            options: ["Clear plastic", "Rounded edges", "UV print"]
        },
        {
            name: "Linen",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Woven texture", "Elegant appearance", "Writable"],
            options: ["Linen texture", "Standard stock", "Natural white"]
        },
        {
            name: "Recycled",
            image: "cardCart2.png",
            thumb: "cardCat1.png",
            highlights: ["Eco-friendly", "Natural paper", "Rustic finish"],
            options: ["100% recycled", "Brown kraft", "Uncoated"]
        }
    ];
    const blogsPerPage = 23;
    var currentProp;
    if (product.length > 23) {
        currentProp = product.slice(0, blogsPerPage);
    } else {
        currentProp = product;
    }
    const totalReviews = 10934;
    const averageRating = 4.7;

    const ratingData = [
        { stars: 5, count: 87610 },
        { stars: 4, count: 4631 },
        { stars: 3, count: 2390 },
        { stars: 2, count: 1899 },
        { stars: 1, count: 3647 },
    ];

    const maxCount = Math.max(...ratingData.map((r) => r.count));
    return (
        <div>
            <div className="lg:px-26 md:px-10 px-5 border-b py-5 border-gray-200 flex md:flex-row flex-col justify-between ">
                <div className="flex flex-col gap-2 w-1/2">
                    <div className="text-4xl font-bold">Business Card Templates</div>
                    <div className="text-lg"><span className="text-yellow-500">★ ★ ★ ★ ★</span> 4.7 (123)</div>
                </div>
                <div className="w-1/2 text-lg text-gray-700">
                    Check out a variety of templates for Standard Business Cards. Find a look that fits your business – and your style.
                </div>
            </div>
            <div className="flex md:flex-row flex-col">
                <div className="md:w-[30%] h-auto px-5 py-10 border-r flex flex-col gap-8 border-gray-200 lg:ml-26 md:ml-10 ml-5">
                    <div className="flex justify-between items-center p-2 rounded-md border text-sm border-gray-200">
                        <input
                            placeholder="Name Of Brand"
                            className="outline-none w-full"
                        />
                        <FaSearch className="text-gray-300" />
                    </div>
                    <div className="p-5  flex flex-col gap-4 bg-gray-300 rounded-xl">
                        <div className="flex flex-col gap-2 ">
                            <div className="text-lg font-bold">
                                Traditional Cards
                            </div>
                            <div className="font-bold text-xs ">
                                Add your information to see personalized templates just for you
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="w-full">
                                <label htmlFor="fileUp" className="w-full "><button className="bg-white w-full px-2 py-4  outline-none cursor-pointer text-gray-500 rounded-lg ">Add Logo or Image</button></label>
                                <input type="file" name="" id="fileUp" className="hidden" />
                            </div>
                            <div className="w-full">
                                <input type="text" className="py-2 px-3 text-sm bg-white border-none ouline-none rounded-lg w-full" placeholder="Company Name" name="" id="" />
                            </div>
                            <div className="w-full">
                                <input type="text" className="py-2 px-3 bg-white text-sm border-none ouline-none rounded-lg w-full" placeholder="Full Name" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-3xl font-bold">Filter</div>
                        <div className="">
                            {filter?.map((d, i) => (
                                <FilterSection key={i} title={d.name} text="text-lg" pad="border-b border-gray-300 py-2">
                                    <div className="flex flex-col gap-2">
                                        {d?.sub?.map((sub, j) => (
                                            sub.subs ? (<FilterSection
                                                key={j}
                                                title={sub.name}
                                                text="text-base"
                                                isDown={true}
                                            >
                                                <ul className="text-sm flex flex-col gap-1 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                                    {sub?.subs?.map((item, index) => {
                                                        const id = `${i}-${j}-${index}`;
                                                        return (
                                                            <li
                                                                key={id}
                                                                onClick={() => setSelected(id)}
                                                                className={`flex items-start gap-2 cursor-pointer transition-all duration-150 ${selected === id
                                                                    ? "text-black"
                                                                    : "text-gray-800"
                                                                    }`}
                                                            >
                                                                <span
                                                                    className={`mt-1 w-2 h-2 rounded-full ${selected === id ? "bg-black" : "bg-gray-300"
                                                                        }`}
                                                                ></span>
                                                                {item}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </FilterSection>
                                            ) : (<div className="hover:font-bold ">{sub.name} </div>)
                                        ))}
                                    </div>
                                </FilterSection>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-full h-auto overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  md:px-7 py-4 lg:pr-26 md:pr-10 md:pr-5  ">
                        <div>
                            <label htmlFor="fileUp1">
                                <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col gap-1 justify-center cursor-pointer items-center">
                                    <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                                        <IoCloudUploadOutline className="text-lg" />
                                    </div>
                                    <div className="font-bold text-xs text-center">Upload your own design </div>
                                    <div className="text-xs">50 from $ 9.99</div>
                                </div>
                            </label>
                            <div className="hidden"> <input type="file" name="" id="fileUp1" /></div>
                        </div>
                        {currentProp?.map((d, i) => (
                            <ProductCard3
                                name={d?.name}
                                color={d?.color}
                                img={d?.img}
                            />
                        ))}
                    </div>
                    <div className="w-full py-10 flex justify-center items-center  md:px-7 py-4 lg:pr-26 md:pr-10 md:pr-5">
                        <RedButton text="Load More" />
                    </div>
                    <div className="w-3/4 md:px-7 py-4 lg:pr-26 md:pr-10 md:pr-5 flex flex-col gap-3 ">
                        <div className="text-xl font-bold">Standard Business Cards: Take your inspiration to reality.</div>
                        <div className="text-sm">Looking for a simple way to make custom Standard Business Cards? Vistaprint is here to help. We have a variety of customizable Standard Business Cards templates, with options to add images, logos and more. Working with your own design? Our upload experience lets you focus on the product choices that are most important to you. We can even pair you with one of our designers to create a signature look for your Standard Business Cards. Whatever your need, we’ll work with you until your custom creation looks just right. Ready to get started? Terrific – so are we.</div>
                    </div>
                    <div className="w-full lg:pr-26 md:pr-10 md:pr-5 flex flex-col gap-3 md:px-7 py-4">
                        <div className="text-2xl font-bold">REVIEWS</div>
                        <div className="flex flex-col md:flex-row items-start gap-15 bg-white">
                            {/* Left Side */}
                            <div className="md:w-[20%] w-full flex flex-col items-start gap-5">
                                <div className="flex items-center mb-2">
                                    {/* Stars */}
                                    {[...Array(5)].map((_, index) => (
                                       <div className="text-xl text-yellow-500">★</div>
                                    ))}
                                    <span className="text-xl font-semibold ml-2">{averageRating}</span>
                                    <span className="text-gray-500 ml-1">({totalReviews})</span>
                                </div>

                                {/* Button */}
                                <RedButton text="Write a Review" />
                            </div>

                            {/* Right Side */}
                            <div className="w-full flex flex-col w-full max-w-md space-y-2">
                                {ratingData.map((item) => (
                                    <div key={item.stars} className="flex items-center gap-5 ">
                                        <div className="w-">{item.stars} Stars</div>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="bg-red-700 h-2 rounded-full"
                                                style={{ width: `${(item.count / maxCount) * 100}%` }}
                                            />
                                        </div>
                                        <span className="w-12 text-right">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-4 lg:pr-26 md:pr-10 md:pr-5 flex flex-col gap-3">
                        <div className="text-2xl font-bold md:px-7">Reviews With Image</div>
                        <div>
                            <div className="flex overflow-x-auto border-b pb-4 mb-6">
                                {productOptions.map((option, i) => (
                                    <div
                                        key={i}
                                        className={`flex-shrink-0 lg:w-1/9 md:w-1/7 w-1/4 text-sm cursor-pointer group transition-all duration-200 flex flex-col gap-2`}
                                    >
                                        <div>
                                            <img
                                                src={option.thumb || option.image}
                                                alt={option.name}
                                                className="w-full object-cover rounded-t"
                                            />
                                        </div> </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:px-7 py-4 lg:pr-26 md:pr-10 md:pr-5">
                        <ReviewSec isPad={true} isSearch={true} isHead="Reviewed by 100177 customers" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarTempSec1;