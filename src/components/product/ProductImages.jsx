import React from "react";
import Slider from "react-slick";

const ProductImages = (props) => {

  let smallImages = props.images.map((image) => "." + image);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
          <div className={`small-sneaker-div`}>
            <img alt="img" className={`small-sneaker`} src={smallImages[i]} />
          </div>
      );
    },
    responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            dots: false
          }
      },
    ]
  };

  return (
    <div className="sneakers-div">
      <div className="sneakers-col sneakers-col1">
        <span className="discount hero-subHeading">{props.discount}%</span>
        <Slider {...settings}>
          {smallImages.map((image) => {
            return (
              <div className="f_flex">
                <img
                  className="big-sneaker"
                  alt="big-img"
                  src={image}
                  key={Math.random()}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImages;
