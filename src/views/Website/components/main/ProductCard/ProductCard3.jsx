import React from "react";
import { AiOutlineHeart } from "react-icons/ai";


const ProductCard3 = ({img , color , name}) => {
    return (
        <div className="flex flex-col gap-3 relative">
            <div className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md">
                <AiOutlineHeart />
            </div>
            <div className="w-full object-cover">
                <img src={img} className="w-full object-contain " />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-500 w-full flex gap-2">{color.map((d, i) => (
                    (i < 4) ? 
                    <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: d }}></div> : ""
                 ))} {color.length > 4 ? `${color.length-4}+` : ""} </div>
                <div className={`md:text-lg font-semibold text-sm`}>{name}</div>
            </div>
        </div>
    )
}

export default ProductCard3;