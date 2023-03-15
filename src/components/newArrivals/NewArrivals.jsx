import React from "react";
import Heading from "../../common/heading/Heading";
import NewArrCard from "./NewArrCard";

import "./NewArrivals.css"

const NewArrivals = () => {


  const icon = (
    <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="New"/>
  );
  const heading = "New Arrivals"
  
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <Heading icon={icon} heading={heading} />
          <NewArrCard />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
