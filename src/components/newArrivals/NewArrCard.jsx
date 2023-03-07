import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import AdCard from "../cards/AdCard";
import Ndata from "./Ndata";

const NewArrCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [numOfElements, setNumOfElements] = useState(4);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 810) {
      setNumOfElements(2);
    } else if (width < 1020) {
      setNumOfElements(3);
    } else if (width < 1230) {
      setNumOfElements(4);
    } else if (width < 1300) {
      setNumOfElements(5);
    } else {
      setNumOfElements(6);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // call handleResize() initially to set the default number of elements
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {numOfElements <= 2 && (
        <Slider {...settings}>
          {Ndata.map((val, index) => {
            return (
              <AdCard
                classes={"box product newarrivals"}
                data={val}
                key={index}
              />
            );
          })}
        </Slider>
      )}
      {numOfElements > 2 && (
        <div id="new-arrs" className="content flexbox product">
          {Ndata.slice(0, numOfElements).map((val, index) => {
            return <AdCard classes={"box"} data={val} id={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default NewArrCard;
