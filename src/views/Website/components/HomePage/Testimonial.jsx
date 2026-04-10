import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      msg: "ACME made it so easy to bring my custom design to life. The print quality was top-notch, and delivery was faster than expected.",
      image: "testpeopleImg.png",
      stars: "★ ★ ★ ★ ★",
    },
    {
      name: "Elizabeth",
      msg: "ACME made it so easy to bring my custom design to life. The print quality was top-notch, and delivery was faster than expected.",
      image: "testpeopleImg1.png",
      stars: "★ ★ ★ ★ ☆",
    },
    {
      name: "Kevin Morrison",
      msg: "ACME made it so easy to bring my custom design to life. The print quality was top-notch, and delivery was faster than expected.",
      image: "testpeopleImg2.png",
      stars: "★ ★ ★ ☆ ☆",
    },
    {
      name: "Lisa Watson",
      msg: "ACME made it so easy to bring my custom design to life. The print quality was top-notch, and delivery was faster than expected.",
      image: "testpeopleImg3.png",
      stars: "★ ★ ★ ★ ★",
    },
    {
      name: "John Doe",
      msg: "ACME made it so easy to bring my custom design to life. The print quality was top-notch, and delivery was faster than expected.",
      image: "testpeopleImg2.png",
      stars: "★ ★ ★ ★ ★",
    },
  ];
  return (
    <div className="testimonial-section lg:px-26 md:px-10 px-5 md:mt-30 mt-20">
      {/* {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.feedback}</p>
                </div>
            ))} */}
      <div className="md:text-4xl text-xl  text-center font-medium">
        Loved by Creators, Brands & Individuals
      </div>
      <div className=" md:mt-15 mt-5">
        <Swiper
          spaceBetween={0}
          //   slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktop
            768: { slidesPerView: 3, spaceBetween: 5 }, // Tablet
            640: { slidesPerView: 1, spaceBetween: 5 }, // Small Tablet
            0: { slidesPerView: 1, spaceBetween: 8 }, // Mobile
          }}
          //   navigation={{
          //     nextEl: ".blog-custom-next",
          //     prevEl: ".blog-custom-prev",
          //   }}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500, // Time in milliseconds between slides (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          loop={true}
          className="h-full w-full"
        >
          {testimonials.map((d, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-1 items-center bg-white shadow-md p-5 rounded-3xl justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img className="w-full object-cover" src={d.image} alt="" />
                </div>
                <div className="text-center md:text-lg">{d.name}</div>
                <div className="text-yellow md:text-xl text-lg text-yellow-500">
                  {d.stars}
                </div>
                <div className="md:text-xs text-xs text-center leading-relaxed">
                  {d.msg}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {testimonials.map((testimonial, index) => (
          <div key={index} className=""></div>
        ))} */}
      </div>
      {/* {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial bg-white p-5 rounded-lg shadow-md mb-5"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full mb-3"
          />
          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          <div className="text-yellow-500 mt-2">{testimonial.stars}</div>
          <p className="text-gray-600">{testimonial.msg}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Testimonial;
