import { AiFillStar } from "react-icons/ai";
import { FaRegHeart, FaStar } from "react-icons/fa";

const ProductCard5 = ({ id, name, desc, img, rating, reviews }) => {
  return (
    <div className="w-[200px] bg-white   cursor-pointer ">
      {/* Image Section */}
      <div className="relative h-[220px] bg-[#F4F4F4] flex items-center justify-center">
        <img src={img} alt={name} className="h-[170px] w-auto object-contain" />

        {/* Heart Icon */}
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <FaRegHeart className="text-gray-500 text-sm" />
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
              <AiFillStar key={i} />
            ))}
        </div>

        <p className="text-sm ml-1 font-medium">{rating}</p>
        <p className="text-[#5C5C5F] text-sm">({reviews})</p>
      </div>
    </div>
  );
};

export default ProductCard5;
