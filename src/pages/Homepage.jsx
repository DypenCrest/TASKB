import React from "react";
import Products from "../components/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSlideData } from "../data/heroSlide";

const Homepage = () => {
  return (
    <div className="w-full">
      {/* Slider */}
      <section id="product-slider" className="relative w-full">
        <Swiper
          loop={true}
          modules={[Navigation, Pagination]}
          className="main-slider"
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {/* Slide 1 */}
          {heroSlideData?.map((item) => (
            <SwiperSlide>
              <img src={item.img} alt="Product 1" />
              <div className="swiper-slide-content absolute bottom-[5%] md:bottom-[20%] ps-8 md:ps-12">
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="mb-4 text-white md:text-2xl">
                  {item.desc1} <br />
                  {item.desc2}
                </p>
                <a
                  href="/"
                  className="hover:bg-white text-white hover:text-black border  font-semibold px-4 py-2 rounded-full inline-block"
                >
                  Shop now
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider Pagination */}
        <div className="navigation invisible md:visible">
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
      <div className="w-full py-4 px-24">
        <Products />
      </div>
    </div>
  );
};

export default Homepage;
