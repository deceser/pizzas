import React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";

//import "swiper/css";
//import "swiper/css/pagination";
//import "swiper/css/navigation";

import "./Slider.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Slider = ({
  className,
  children,
  variant,
  slidesPerView = 1,
  ...rest
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={classNames(className, { ["slider--" + variant]: variant })}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

Slider.propTypes = {
  variant: PropTypes.oneOf(["default", "minimal"]),
};

export default Slider;
