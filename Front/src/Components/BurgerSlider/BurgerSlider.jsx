import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/BurgerSlider/BurgerSlider.css";
import "../../css/BurgerSlider/BurgerSlider.css";
import { Autoplay } from "swiper";
import { data } from "../../data/Data";
import { words } from "../../words";
import { TotalCartITems, totalInCart } from "../../Redux/Slice/AddTocart";

const BurgerSlider = () => {
  const { products } = data;
  const { Quality, Burgers } = words;

  const dispatch = useDispatch();

  const total = useSelector(totalInCart);

  const breakpoint = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    "@1.20": {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  };

  const AddToCart = (product) => {
    const exist = total?.find((x) => x.id === product.id);

    //second click
    const incress = total?.map((item) =>
      item.id === product.id ? { ...exist, qty: exist?.qty + 1 } : item
    );

    //first click
    const first = [...total, { ...product, qty: 1 }];

    if (exist) {
      dispatch(TotalCartITems(incress));
    } else {
      dispatch(TotalCartITems(first));
    }
  };

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(total));
  }, [total]);

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2 my-10">
        <p className="text-[#fd9503] text-[30px] font-bold">{Quality}</p>
        <h1 className="text-[17px] md:text-[30px] font-bold">{Burgers}</h1>
      </div>

      <Swiper
        breakpoints={breakpoint}
        modules={[Autoplay]}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {products.map((product) => (
          <SwiperSlide className="animation" key={product.title}>
            <div className="product-wrrap">
              <div className="image">
                <img src={product.imageUrl} alt="prdoucts" />

                <div className="content">
                  <button type="sumbit" onClick={() => AddToCart(product)}>
                    Order Online
                  </button>
                  <h1>{product.title}</h1>
                  <p>{product.dec}</p>
                  <span>${product.price}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BurgerSlider;
