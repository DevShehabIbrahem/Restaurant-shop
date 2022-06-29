import React, { useRef, useState } from "react";
import { Navigation } from "swiper";
import { IoMdShareAlt } from "react-icons/io";
import Bounce from "react-reveal/Bounce";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import "swiper/css";
import "../../css/carousel/Carousel.css";
import image1 from "../../Asset/SliderCarousel/sandw1.png";
import image2 from "../../Asset/SliderCarousel/shape.png";
import image3 from "../../Asset/SliderCarousel/Sandw.png";
import image4 from "../../Asset/SliderCarousel/sandow3.png";
import burger from "../../Asset/burger.png";
import bg from "../../Asset/carousel.jpg";
import { words } from "../../words";

const Carousel = () => {
  const images = [image1, image2, image3, image4];
  const bgc = [bg, bg, bg, bg];

  return (
    <>
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
          {images.map((img) => (
            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col lg:flex-row  items-center justify-between  max-w-7xl mt-12 lg:my-24">
                <div className="carousel-info">
                  <img src={burger} alt="burger" />
                  <h1>{words.update}</h1>
                  <h1>{words.chicken}</h1>
                  <ul>
                    <li>
                      <span>
                        <IoMdShareAlt />
                      </span>
                      integrated with mushroom
                    </li>
                    <li>
                      <span>
                        <IoMdShareAlt />
                      </span>
                      cheese integrated
                    </li>
                    <li>
                      <span>
                        <IoMdShareAlt />
                      </span>
                      bacon flavour
                    </li>
                  </ul>
                </div>
                <div className=" mb-10 w-[68%] lg:w-[50%]">
                  <img src={img} alt="carousel" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*{images.map((img) => (
          <SwiperSlide className="flex justify-center items-center h-[10px]">
            <div className="relative">
              <img src={bg} alt="bg" />
            </div>
            <div className="absolute top-0">
              <img src={img} alt="carousel" className="swiper-slide" />
            </div>
          </SwiperSlide>
        ))}*/}
    </>
  );
};

export default Carousel;
