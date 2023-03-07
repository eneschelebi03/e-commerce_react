import React from 'react'
import SliderContent from './SliderContent';

const Slider = (props) => {
  

  let width = "77%"

  if (props.isSmallScreen) {
    width = "100%"
  }


  return (
    <>
      <section className="homeSlide" style={{width: width}}>
        <div className={!props.isSmallScreen && "container"}>
          <SliderContent />
        </div>
      </section>
    </>
  );
}

export default Slider