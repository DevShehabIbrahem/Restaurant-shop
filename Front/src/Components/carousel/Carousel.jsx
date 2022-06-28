import React, { useRef, useState } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import "swiper/css";
import image1 from "../../Asset/SliderCarousel/sandw1.png";
import image2 from "../../Asset/SliderCarousel/shape.png";
import image3 from "../../Asset/SliderCarousel/Sandw.png";
import image4 from "../../Asset/SliderCarousel/sandow3.png";

const Carousel = () => {
  const images = [image1, image2, image3, image4, image1];

  return (
    <>
      <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
        {images.map((img) => (
          <SwiperSlide className="flex justify-center items-center">
            <img src={img} alt="carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
