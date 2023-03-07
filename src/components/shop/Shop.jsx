import React, { useEffect, useState } from "react";
import Catg from "./Catg";
import ShopCard from "./ShopCard";
import "./Style.css";

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
        setGrid("grid-1")
    } else if (window.innerWidth < 850) {
        setGrid("grid-2");
    } else {
      setGrid("grid-3")
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
      <section className="shop background">
        <div className="container d_flex">
          {!isSmallScreen && <Catg />}
          <div className={!isSmallScreen && "content"}>
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row">
                <span>View all</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>
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
