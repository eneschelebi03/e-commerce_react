import React from "react";
import Heading from "../../common/heading/Heading";
import Dcard from "./DiscountCard";

const Discount = () => {

  const headingIcon = (
    <img src="https://img.icons8.com/windows/32/fa314a/gift.png" alt="" />
  ); 
  const heading = "Big Discounts";


  return (
    <>
      <section className="discounts background ">
        <div className="container">
          <Heading icon={headingIcon} heading={heading} />
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
