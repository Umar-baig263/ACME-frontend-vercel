import React from "react";
import ProductHeader from "../ProductHeader/ProductHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";

const ProductSwiper = ({ head, desc, link, data, onProductClick }) => {
  return (
    <div className="md:mt-30 mt-20 flex flex-col gap-10">
      <div>
        <ProductHeader head={head} subHead={desc} link={link} />
      </div>
      <div className="lg:px-26 md:px-10 px-5 overflow-visible">
        <Swiper
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 5 },
            640: { slidesPerView: 2.5, spaceBetween: 5 },
            0: { slidesPerView: 2, spaceBetween: 8 },
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".blog-custom-next",
            prevEl: ".blog-custom-prev",
          }}
          loop={true}
          className="h-full w-full relative overflow-visible"
        >
          {data?.map((d, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (onProductClick) onProductClick(d); // pass clicked product
                }}
              >
                <ProductCard
                  id={d?.id}
                  name={d?.name}
                  desc={d?.desc}
                  img={d?.img}
                  price={d?.price}
                  category={d?.category}
                  slug={d?.slug}
                  isPrice={false}
                  isDetail={false}
                  disableLink={!!onProductClick}
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="blog-custom-prev absolute z-50 top-1/2 left-2 bg-white shadow-md flex p-2 rounded-full">
            <FaAngleLeft />
          </div>
          <div className="blog-custom-next absolute z-50 top-1/2 right-2 bg-white shadow-md flex p-2 rounded-full">
            <FaAngleRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
