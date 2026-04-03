// import { FaRegHeart, FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { WishlistContext } from "../../../../../contexts/wishlistContext";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const ProductCard4 = ({id, name, desc, img, price, oldPrice, rating, slug }) => {
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  const product = { id, name, desc, img, price, oldPrice, rating, slug };

const isInWishlist = wishlist.some((p) => p.id === id);
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    addToWishlist(product);
  };
  const navigate = useNavigate();


  const handleCardClick = () => {
  navigate(`/stamp-description/${slug || id}`, {
    state: { product }, 
  });
};

  return (
    <div className="w-[200px] bg-white   cursor-pointer"
    onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-[220px] bg-[#F4F4F4] flex items-center justify-center">
        <img src={img} alt={name} className="h-[170px] w-auto object-contain" />

        {/* Heart Icon */}
        <button 
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          {/* <FaRegHeart className="text-gray-500 text-sm" /> */}
          {isInWishlist ? (
                    <AiFillHeart className="text-red-500 text-xl" />
                  ) : (
                    <AiOutlineHeart className="text-gray-600 text-xl" />
                  )}
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-3 font-medium text-[15px]">{name}</h3>

      {/* Description */}
      <p className="text-xs mt-1">{desc}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <div className="flex text-[#FFB200] text-[17px]">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        <p className="text-sm ml-1 font-medium">{rating}</p>
        <p className="text-[#5C5C5F] text-sm">(10934)</p>
      </div>

      {/* Pricing */}
      <div className="mt-2">
        <span className="text-[#5C5C5F] text-sm">Starting at </span>
        <span className="line-through text-[#5C5C5F] text-sm">${oldPrice}</span>
        <span className="text-[#C6131B] font-medium text-[15px] ml-1">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard4;
