import React, { useEffect, useState } from "react";

const SliderCard = (props) => {

     const [isSmallScreen, setIsSmallScreen] = useState(false);

     function handleResize() {
       if (window.innerWidth < 650) {
         setIsSmallScreen(true);
       } else {
         setIsSmallScreen(false);
       }
     }

     useEffect(() => {
       window.addEventListener("resize", handleResize);
       handleResize();
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);

    return (
      <>
        <div className={`box ${isSmallScreen && "small-screen"} d_flex top`}>
          <div className="left">
            <h1>{props.slide.title}</h1>
            <p>{props.slide.desc}</p>
            <button className="btn-primary">Visit Collections</button>
          </div>

          <div className="right">
            <img src={props.slide.cover} alt="" />
          </div>
        </div>
      </>
    );
};

export default SliderCard;
