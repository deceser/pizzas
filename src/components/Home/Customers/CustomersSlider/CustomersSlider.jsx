import { SwiperSlide } from "swiper/react";
import { Slider } from "../../../ui";
import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import CustomerBlock from "./CustomerBlock/CustomerBlock";

import styles from "./CustomersSlider.module.scss";

import customerImg2 from "../../../../assets/img/customers/2.png";
import customerImg1 from "../../../../assets/img/customers/1.png";
import { SCREEN_WIDTHS } from "../../../../utils/constants";

const CustomersSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const screenWidth = useWindowWidth();

  useEffect(() => {
    if (slidesPerView === 2 && screenWidth < SCREEN_WIDTHS.widthXs) {
      setSlidesPerView(1);
    }
    if (slidesPerView === 1 && screenWidth > SCREEN_WIDTHS.widthXs) {
      setSlidesPerView(2);
    }
  }, [screenWidth]);

  return (
    <Slider
      variant="minimal"
      slidesPerView={slidesPerView}
      className={styles.slider}
    >
      <SwiperSlide className={styles.slide}>
        <CustomerBlock
          name="Luhui Vasyl"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          img={customerImg2}
          rating={4}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <CustomerBlock
          name="Volia Eva"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          img={customerImg1}
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <CustomerBlock
          name="Luhui Vasyl"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          img={customerImg2}
          rating={4}
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <CustomerBlock
          name="Volia Eva"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          img={customerImg1}
          rating={5}
        />
      </SwiperSlide>
    </Slider>
  );
};

export default CustomersSlider;
