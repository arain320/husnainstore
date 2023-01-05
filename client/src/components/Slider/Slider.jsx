import React from "react";
import "./Slider.scss";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/autoplay";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          autoplay={true}
          loop={true}
          speed={300}
          navigation
        >
          <SwiperSlide>
            <NavLink to="/Products">
              <img src="./images/slider1.jpg" alt="slider1" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/Products">
              <img src="./images/slider2.jpg" alt="slider2" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/Products">
              <img src="./images/slider3.png" alt="slider3" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/Products">
              <img src="./images/slider4.jpg" alt="slider4" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/Products">
              <img src="./images/slider5.jpg" alt="slider5" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/Products">
              <img src="./images/slider6.jpg" alt="slider6" />
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
