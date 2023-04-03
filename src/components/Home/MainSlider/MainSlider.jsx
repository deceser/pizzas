import React from "react";
import { Slider } from "../../ui";
import { SwiperSlide } from "swiper/react";
import Banner1 from "./Banners/Banner1/Banner1";

const MainSlider = () => {
  return (
    <Slider variant="default">
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
    </Slider>
  );
};

export default MainSlider;
