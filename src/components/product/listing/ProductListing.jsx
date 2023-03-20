import React, { useEffect, useState } from "react";

import "./Listing.css";
import ProductCard from "../../cards/ProductCard";

const ProductListing = (props) => {
  const products = props.productItems;

  const onAddToCartHandler = (item) => {
    props.onAddToCart(item);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [grid, setGrid] = useState("grid-3");

  function handleResize() {
    if (window.innerWidth < 1110) {
      setGrid("grid-2");
    } else {
      setGrid("grid-3");
    }

    if (window.innerWidth < 900) {
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

  const handleFilters = () => {
    props.onToggleFilters();
  };

  const heading = "Mobile Phones";

  return (
    <>
      <div className="listing-page-container col_flex">
        <div className="heading c_flex">
          <h1>{heading}</h1>

          {isSmallScreen && (
            <button onClick={handleFilters} className="filter-btn f_flex">
              Filter <span class="material-icons-outlined">filter_alt</span>
            </button>
          )}
        </div>
        <div className={`listings-container ${grid}`}>
          {products.map((product) => {
            return (
              <ProductCard
                item={product}
                key={product.id}
                onAddToCart={onAddToCartHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
