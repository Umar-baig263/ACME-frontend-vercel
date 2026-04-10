import React from "react";
import RedButton from "../Buttons/RedButton";
import OutlineButton from "../Buttons/OutlineButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../../contexts/cartContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../../../../contexts/wishlistContext";
const ProductCard1 = ({
  product,
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
  btn1,
  btn2,
  btn1Link,
  isStar,
  btn2Link,
  price,
  isHide,
  now,
  isDetail,
  isPrice,
}) => {
  const { addToCart } = useContext(CartContext);

  const cardProduct = product || {
    id,
    name,
    desc,
    img,
    price,
    priceWas: was,
    priceNow: now,
    star,
    rating,
    people,
    text,
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart({
      ...cardProduct,
      qty: 1,
    });
  };

  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

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
        price: Number(price) || Number(now) || 0,
        quantity: 1,
      });
    }
  };

  //Buy Now Button
  const navigate = useNavigate();
  const handleBuyNow = (e) => {
    e.stopPropagation();

    navigate("/check-out", {
      state: { buyNowProduct: { ...cardProduct, qty: 1 } },
    });
  };
  return (
    <div className="flex flex-col gap-3 relative">
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
      <div className="w-full aspect-square bg-gray-50 rounded-none overflow-hidden flex justify-center items-center p-6 border border-gray-100 group">
        <img
          src={img}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col pr-5 gap-1">
        <div className={`md:text-lg font-semibold text-sm`}>{name}</div>
        <div className="text-xs text-gray-500 w-full">{desc} </div>
        <div className="md:text-ld text-sm font-semibold">${price} </div>
        {isStar ? (
          <div className="text-sm flex gap-1">
            <div className="text-yellow-500">{star}</div>
            <div className="font-semibold">{rating}</div>
            <div className="text-gray-500">{people}</div>
          </div>
        ) : (
          ""
        )}
        {isHide ? (
          ""
        ) : (
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="md:w-1/2 w-full">
              {/* <RedButton text={btn1} link={btn1Link} width="w-full" /> */}
              <div
                onClick={handleBuyNow}
                className={`cursor-pointer px-2  text-center py-2 text-xs w-full  bg-linear-to-t from-[#9A0F1E] to-[#C6131B] text-white`}
              >
                Buy Now
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div
                onClick={handleAddToCart}
                className={`cursor-pointer px-2 text-center  py-2 text-xs w-full  border border-black text-black`}
              >
                Add To Cart
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard1;
