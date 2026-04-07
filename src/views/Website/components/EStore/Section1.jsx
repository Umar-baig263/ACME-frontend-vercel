import React from "react";
// import ProductHeader from "../ProductHeader/ProductHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import ProductDesign1 from "../main/ProductDesign1/ProductDesign1";
import { FaAngleLeft, FaAngleRight, FaArrowLeft } from "react-icons/fa";
import ProductCard1 from "../main/ProductCard/ProductCard1";
import ProductHeader from "../main/ProductHeader/ProductHeader";
// import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Section1 = ({ head, desc, link, data, isLink, onClick }) => {
  return (
    <div className="md:mt-30 mt-20 flex flex-col gap-10 " onClick={onClick}>
      <div>
        <ProductHeader head={head} subHead={desc} isLink={isLink} link={link} />
      </div>
      <div className="lg:px-26 md:px-10 px-5 overflow-visible">
        <Swiper
          spaceBetween={0}
          //   slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 20 }, // Desktop
            768: { slidesPerView: 2.5, spaceBetween: 5 }, // Tablet
            640: { slidesPerView: 2, spaceBetween: 5 }, // Small Tablet
            0: { slidesPerView: 2, spaceBetween: 8 }, // Mobile
          }}
          //   navigation={{
          //     nextEl: ".blog-custom-next",
          //     prevEl: ".blog-custom-prev",
          //   }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000, // Time in milliseconds between slides (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          navigation={{
            nextEl: ".blog-custom-next",
            prevEl: ".blog-custom-prev",
          }}
          loop={true}
          className="h-full w-full relaive  overflow-visible"
        >
          {data?.map((d) => {
            const cardContent = (
              <ProductCard1
                id={d.id}
                name={d?.name}
                desc={d?.desc}
                img={d?.img}
                price={d?.price}
                btn1="Buy Now"
                btn2="Add To Cart"
                product={d}
                category="e-store"
                slug={d.slug}
                isHide={!!onClick}
              />
            );
            return (
              <SwiperSlide key={d.id}>
                {onClick ? cardContent : <Link to={`/shop/${d.slug}`}>{cardContent}</Link>}
              </SwiperSlide>
            );
          })}

          <div className="blog-custom-prev  absolute  z-100 top-1/2 left-2 bg-white shadow-md flex p-2 rounded-full">
            <FaAngleLeft />
          </div>
          <div className=" blog-custom-next absolute z-100 top-1/2 right-2 bg-white shadow-md flex p-2 rounded-full">
            <FaAngleRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Section1;
