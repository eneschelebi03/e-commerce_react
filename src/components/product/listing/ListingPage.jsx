import React, { useState } from "react";
import Filters from "./filters/Filters";
import ProductListing from "./ProductListing"; 

const ListingPage = (props) => {
  const products = props.productItems
  const [filteredProducts, setFilteredProducts] = useState(products)

  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilters = () => {
    setIsFilterActive((isFilterActive) => !isFilterActive);
  };

  const hideFilter = () => {
    if (isFilterActive) {
      setIsFilterActive(false);
    }
  };

  const onAddToCartHandler = (item) => {
    props.onAddToCart(item)
  }

  const priceHandler = (min, max) => {
    setFilteredProducts(products.filter(product => product.price >= min && product.price <= max))
  };

  

  return (
    <>
      <div className="background listing">
        <div className="container jc_flex listing">
          <Filters
            onPriceRangeChange={priceHandler}
            activeFilter={isFilterActive}
            onHideFilter={hideFilter}
          />
          <ProductListing
            productItems={filteredProducts}
            onToggleFilters={handleFilters}
            onAddToCart={onAddToCartHandler}
          />
        </div>
      </div>
    </>
  );
};

export default ListingPage;
