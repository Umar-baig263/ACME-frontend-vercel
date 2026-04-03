import React from "react";

const ReviewSec = ({ isSearch, isPad, isHead }) => {
    const review = [
        {
            name: "Ministry Cards",
            img: "productImgDesc.png",
            stars: "★★★★★",
            rating: 5,
            text1: "Jun 25, 2025 | Tiffany H. | Verified Buyer",
            text2: "Thank you!! You did an amazing job with my card design and I will purchase more.",
        },
        {
            name: "Ministry Cards",
            img: "productImgDesc1.png",
            stars: "★★★★★",
            rating: 5,
            text1: "Jun 25, 2025 | Tiffany H. | Verified Buyer",
            text2: "Thank you!! You did an amazing job with my card design and I will purchase more.",
        },
        {
            name: "Ministry Cards",
            img: "productImgDesc2.png",
            stars: "★★★★★",
            rating: 5,
            text1: "Jun 25, 2025 | Tiffany H. | Verified Buyer",
            text2: "Thank you!! You did an amazing job with my card design and I will purchase more.",
        },
        {
            name: "Ministry Cards",
            img: "productImgDesc3.png",
            stars: "★★★★★",
            rating: 5,
            text1: "Jun 25, 2025 | Tiffany H. | Verified Buyer",
            text2: "Thank you!! You did an amazing job with my card design and I will purchase more.",
        },
        {
            name: "Ministry Cards",
            img: "productImgDesc.png",
            stars: "★★★★★",
            rating: 5,
            text1: "Jun 25, 2025 | Tiffany H. | Verified Buyer",
            text2: "Thank you!! You did an amazing job with my card design and I will purchase more.",
        },
        {
            name: "Ministry Cards",
            img: "productImgDesc1.png",
            stars: "★★★★★",
            rating: 5,
            text1: "Jun 25, 2025 | Tiffany H. | Verified Buyer",
            text2: "Thank you!! You did an amazing job with my card design and I will purchase more.",
        },
    ]
    return (
        <div className={`${isPad ? "" : "md:mt-20 mt-10  lg:px-26 md:px-10 px-5"}`}>
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    {isHead ? isHead : "Reviews"}
                </div>
                {
                    isSearch &&
                    <div className="flex gap-2" >
                        <div className="p-2 rounded-md border border-gray-200  flex gap-2">
                            <input type="search" placeholder="Search" name="" className="outline-none" id="" />
                            {/* <FaSearch/> */}
                        </div>
                        <div className="p-2 rounded-md border border-gray-200 outline-none flex gap-2">
                            <select className="outline-none">
                                <option value="Positive">Highly Rated</option>
                                <option value="Negative">Negative</option>
                            </select>
                        </div>
                    </div>
                }

            </div>
            <div className="mt-5">
                {
                    review?.map((d, i) => (
                        <div className="flex gap-5 px-2 py-5 border-b border-gray-300" key={i}>
                            <div className="w-[90%] flex flex-col gap-2">
                                <div className="text-gray-5">
                                    <span className="text-yellow-500">{d?.stars}</span> {d?.rating}
                                </div>
                                <div className="font-bold">
                                    {d?.name}
                                </div>
                                <div className="text-gray-500">{d?.text1}</div>
                                <div className="text-gray-700">{d?.text2}</div>
                            </div>
                            <div className="w-[10%] flex justify-end">
                                <img src={d?.img} className="w-30 object-cover rounded-xl" alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default ReviewSec