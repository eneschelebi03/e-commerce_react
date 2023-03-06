import React from "react";
import Slider from "react-slick";
import Ddata from "./Ddata";

const Dcard = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((val, index) => {
          return (
            <>
              <div className="box product newarrivals" key={index}>
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
