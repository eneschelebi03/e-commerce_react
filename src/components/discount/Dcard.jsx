import React from "react";
import Slider from "react-slick";
import Ddata from "./Ddata";

const Dcard = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((val, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
