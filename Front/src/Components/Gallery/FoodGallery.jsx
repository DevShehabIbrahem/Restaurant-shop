import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Gallary } from "../../Asset";
import { words } from "../../words";

const FoodGallery = () => {
  const { Photos, Gallery } = words;
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2 my-10">
        <p className="text-[#fd9503] text-[30px] font-bold">{Photos}</p>
        <h1 className="text-[30px] font-bold">{Gallery}</h1>
      </div>

      <div className="mx-[80px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Gallary.map((item) => (
            <>
              <SwiperSlide>
                <img src={item} alt="" className="rounded" />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default FoodGallery;
