

import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { WishlistContext } from "../../../../../contexts/wishlistContext";

const ProductCard2 = ({
  id,
  img,
  name,
  desc,
  star,
  rating,
  people,
  text,
  was,
  price,
  now,
  isDetail,
  isPrice,
  onClick,
  reviews,
}) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const productId = id || name;
  const productPrice = now 
    ? parseFloat(now.toString().replace(/[^0-9.]/g, '')) 
    : (price ? parseFloat(price.toString().replace(/[^0-9.]/g, '')) : 181.95);

  const product = {
    id: productId,
    name,
    desc,
    img,
    price: productPrice,
    oldPrice: was || 0,
    rating,
  };

  const isInWishlist = wishlist?.some((p) => p.id === productId);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      className="flex flex-col gap-3 relative cursor-pointer group"
      onClick={onClick}
    >
      <div className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md">
       <button 
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-white shadow-md z-10"
      >
        {isInWishlist ? (
            <AiFillHeart className="text-red-500 text-lg" />
        ) : (
            <AiOutlineHeart className="text-gray-600 text-lg" />
        )}
      </button>
      </div>
      <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden p-6 border border-gray-100">
        <img
          src={img}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col pr-5">
        <div
          className={`${
            isPrice
              ? "flex justify-between md:flex-row flex-col md:items-center w-full"
              : ""
          }`}
        >
          <div className={` ${isPrice ? "" : "font-medium"} text-md`}>
            {name}
          </div>
          {isPrice ? <div className="text-xs font-bold">{price}</div> : ""}
        </div>
        <div className=" text-xs w-full">{desc} </div>
        {isDetail ? (
          <div className="flex flex-col">
            <div className="text-xs flex gap-2 items-center">
              <div className="text-[#FFB200] text-2xl">★★★★★</div>
              <div className="font-medium text-base">{rating}</div>
              <div className="text-gray-500 text-base">({reviews})</div>
            </div>
            <div className=" text-xs flex md:flex-row flex-col gap-1">
              <div>{text}</div>
              <div className="flex gap-1 items-center">
                <div className="text-base text-[#5C5C5F]">Starting at</div>
                <div className="text-[#5C5C5F] text-base line-through">
                  {was}
                </div>
                <div className="font-medium text-base text-[#C6131B]">
                  {now}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCard2;