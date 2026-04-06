import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../../../../contexts/wishlistContext";

const ProductCard = ({
  product,
  id,
  img,
  name,
  desc,
  price,
  isPrice,
  slug,
  category,
  isLink = false,
  disableLink = false,
}) => {
  const { wishlist, addToWishlist } = useContext(WishlistContext);

  // Check if this product is already in wishlist
  const isInWishlist = wishlist.some((p) => p.id === id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToWishlist({
      id,
      img,
      name,
      desc,
      price: Number(price) || 0,
      quantity: 1, // optional, for wishlist quantity
    });
  };

  const getProductRoute = () => {
    let base = "/shop"; // default e-store
    if (category === "stamp") base = "/stamp-description";
    else if (category === "apparel" || category === "Apparel Shirt Shirts") base = "/apparel-product-description";
    else if (category === "digitalPrinting" || category === "Digital Printing") base = "/card-product-description";
    else if (category === "corporate") base = "/corporate-product-description";
    else if (category === "e-store" || category === "estore") base = "/e-store";
    
    return `${base}/${slug || id}`;
  };

  const cardContent = (
    <>
      <div className="w-full h-40 md:h-48 flex justify-center items-center bg-[#F4F4F4]">
        <img
          src={img}
          alt={name}
          className="max-w-[80%] max-h-[80%] object-contain"
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
          <div
            className={`md:text-base ${isPrice ? "" : "font-medium"} text-sm mt-3`}
          >
            {name}
          </div>

          {isPrice && (
            <div className="md:text-lg text-sm font-bold">{price}</div>
          )}
        </div>

        <div className="mt-1 md:text-xs text-xs w-full font-light">
          {desc}
        </div>
      </div>
    </>
  );

  return (
    <div className="relative flex flex-col gap-3">
      {/* Heart Icon */}
      <div
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md cursor-pointer z-10"
        onClick={handleWishlistClick}
      >
        {isInWishlist ? (
          <AiFillHeart className="text-red-500 text-xl" />
        ) : (
          <AiOutlineHeart className="text-gray-600 text-xl" />
        )}
      </div>

      {disableLink ? (
        cardContent
      ) : (
        <Link to={getProductRoute()}>{cardContent}</Link>
      )}
    </div>
  );
};

export default ProductCard;
