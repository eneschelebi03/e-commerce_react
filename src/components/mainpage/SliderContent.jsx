import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sdata from "./Sdata";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

const SliderContent = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <SliderCard slide={value} key={index} />
          );
        })}
      </Slider>
    </>
  );
};

export default SliderContent;
