import { Navigation } from "swiper";
import { IoMdShareAlt } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "../../css/carousel/Carousel.css";

import burger from "../../Asset/burger.png";
import bg from "../../Asset/carousel.jpg";
import { words } from "../../words";
import { images } from "../../Asset";

const Carousel = () => {
  const { listOfCarousel } = words;

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
                    {listOfCarousel.map((list) => (
                      <li>
                        <span>
                          <IoMdShareAlt />
                        </span>
                        {list}
                      </li>
                    ))}
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
    </>
  );
};

export default Carousel;
