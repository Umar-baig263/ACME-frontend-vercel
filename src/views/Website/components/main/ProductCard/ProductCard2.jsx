import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { WishlistContext } from "../../../../../contexts/wishlistContext";

const ProductCard2 = ({
  id,
  slug,
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
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  // Use slug, id or name as a unique identifier to avoid collisions
  const productId = slug || id || name;
  const isInWishlist = wishlist.some((p) => p.id === productId);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist({
        id: productId,
        img,
        name,
        desc,
        price: Number(now?.toString().replace(/[^0-9.]/g, "")) || 0,
        quantity: 1,
      });
    }
  };

  const formatPrice = (p) => {
    if (p === undefined || p === null || p === "") return "";
    if (typeof p === "number") return `$${p}`;
    if (typeof p === "string" && !p.includes("$") && !isNaN(p)) return `$${p}`;
    return p;
  };

  return (
    <div
      className="flex flex-col gap-3 relative cursor-pointer group"
      onClick={onClick}
    >
      <div
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md z-10 hover:scale-110 transition-transform"
        onClick={handleWishlistClick}
      >
        {isInWishlist ? (
          <AiFillHeart className="text-red-500 text-xl" />
        ) : (
          <AiOutlineHeart className="text-gray-600 text-xl" />
        )}
      </div>
      <div className="w-full aspect-square bg-gray-50 rounded-none flex items-center justify-center overflow-hidden p-6 border border-gray-100">
        <img
          src={img}
          className="w-full h-full object-contain"
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
          {isPrice ? (
            <div className="text-xs font-bold">{formatPrice(price)}</div>
          ) : (
            ""
          )}
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
                <div className="font-medium text-base text-[#C6131B]">
                  {formatPrice(now)}
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