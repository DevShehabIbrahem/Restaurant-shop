// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../css/BurgerSlider/BurgerSlider.css";
import "../../css/BurgerSlider/BurgerSlider.css";
import { Autoplay } from "swiper";
import { data } from "../../data/Data";

const BurgerSlider = () => {
  const { products } = data;

  return (
    <>
      <Swiper
        breakpoints={{
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
        }}
        modules={[Autoplay]}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {products.map(({ imageUrl, dec, price, title }) => (
          <SwiperSlide className="animation">
            <div className="product-wrrap">
              <div className="image">
                <img src={imageUrl} alt="prdoucts" />

                <div className="content">
                  <button>Order Online</button>
                  <h1>{title}</h1>
                  <p>{dec}</p>
                  <span>${price}</span>
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
