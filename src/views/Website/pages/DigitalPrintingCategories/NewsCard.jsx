import { useState } from "react";

const NewsCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white  overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer w-full sm:w-80 md:w-96"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="overflow-hidden w-full relative">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className=" font-medium text-base leading-snug mb-2 tracking-tight">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {item.excerpt}
        </p>
        <a
          href={item.link}
          className="inline-flex items-center gap-1 text-[#9A0F1E] text-sm font-medium hover:gap-2 transition-all duration-200 group"
        >
          Read More
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
