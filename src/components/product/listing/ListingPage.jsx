import React, { useState } from "react";
import Filters from "./filters/Filters";
import ProductListing from "./ProductListing";

const ListingPage = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilters = () => {
    setIsFilterActive((isFilterActive) => !isFilterActive);
  };

  const hideFilter = () => {
    if (isFilterActive) {
      setIsFilterActive(false);
    }
  };

  return (
    <>
      <div className="background">
        <div className="container jc_flex ">
          <Filters activeFilter={isFilterActive} onHideFilter={hideFilter} />
          <ProductListing
            productItems={props.productItems}
            onToggleFilters={handleFilters}
          />
        </div>
      </div>
    </>
  );
};

export default ListingPage;
