import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import photo from "../../photo/5aba028cf8e6127988f1d28d863b0987.jpg";
import "./Slider.styles.css";
const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div className="container">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
        >
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo} alt="" className="slider-img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
