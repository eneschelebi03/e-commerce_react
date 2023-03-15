import React, { useEffect, useState } from "react";
import Catg from "./Catg";
import ShopCard from "./ShopCard";
import "./Shop.css";
import Heading from "../../common/heading/Heading";

const Shop = ({ shopItems, addToCart }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [grid, setGrid] = useState("grid-3");

  function handleResize() {
    if (window.innerWidth < 1200) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }

    if (window.innerWidth < 550) {
      setGrid("grid-1");
    } else if (window.innerWidth < 850) {
      setGrid("grid-2");
    } else {
      setGrid("grid-3");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const heading = "Mobile Phones";

  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          {!isSmallScreen && <Catg />}
          <div className={!isSmallScreen && "content"}>
            <Heading heading={heading} />
            <div className={`product-content ${grid}`}>
              <ShopCard shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
