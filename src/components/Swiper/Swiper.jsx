import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Swiper.css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      className="mainSwiper"
      loop={true}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
      direction={"horizontal"}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <div className="swiper-status">STATUS</div>
      <SwiperSlide>
        <div className="slide-wrap">
          <h4 className="swiper-slide">
            Мы сочетаем функциональность и эстетику, и создаем гармонию и
            стиль!!!
          </h4>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-wrap">
          <h4 className="swiper-slide">
            Создайте пространство, в котором каждый элемент будет отражать вашу
            индивидуальность
          </h4>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-wrap">
          <h4 className="swiper-slide">
            Закажите дизайн проект уже сегодня и наслаждайтесь качеством и
            комфортом жизни.
          </h4>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;
