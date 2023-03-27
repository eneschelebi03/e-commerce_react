import React, { useState } from "react";
import Filters from "./filters/Filters";
import ProductListing from "./ProductListing";

const ListingPage = (props) => {
  const products = props.productItems;
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [priceRange, setPriceRange] = useState({ min: 1, max: 9999999 });

  const [gender, setGender] = useState({ men: false, women: false });

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
    props.onAddToCart(item);
  };

  const priceHandler = (min, max) => {
    setPriceRange((prevRange) => ({
      ...prevRange,
      min: min,
      max: max,
    }));

    filterProducts();
  };

  const genderHandler = ([menCheck, womenCheck]) => {
    setGender((prevGender) => ({
      ...prevGender,
      men: menCheck,
      women: womenCheck,
    }));

    filterProducts();
  };

  const filterProducts = () => {
    console.log("filtering");
    setFilteredProducts(products);

    setFilteredProducts((filterProducts) =>
      filterProducts.filter(
        (product) =>
          product.price >= priceRange.min && product.price <= priceRange.max
      )
    );

    if (gender.men && !gender.women) {
      setFilteredProducts((filterProducts) =>
        filterProducts.filter((product) => product.gender === "Men")
      );
    } else if (!gender.men && gender.women) {
      setFilteredProducts((filterProducts) =>
        filterProducts.filter((product) => product.gender === "Women")
      );
    } else {
      setFilteredProducts((filterProducts) =>
        filterProducts.filter(
          (product) => product.gender === "Women" || product.gender === "Men"
        )
      );
    }
  };

  return (
    <>
      <div className="background listing">
        <div className="container jc_flex listing">
          <Filters
            onPriceRangeChange={priceHandler}
            onGenderFilter={genderHandler}
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

//  const priceHandler = (min, max) => {
//   setFilteredProducts(
//     products.filter((product) => product.price >= min && product.price <= max)
//   );
// };

// const genderFilterHandler = ([menCheck, womenCheck]) => {
//   // console.log(menCheck, womenCheck)

//   setFilteredProducts(
//     products.filter(
//       (product) => product.gender === "Women" || product.gender === "Men"
//     )
//   );

//   if (menCheck && !womenCheck) {
//     setFilteredProducts(
//       products.filter((product) => product.gender === "Men")
//     );
//   } else if (!menCheck && womenCheck) {
//     setFilteredProducts(
//       products.filter((product) => product.gender === "Women")
//     );
//   } else {
//     setFilteredProducts(
//       products.filter((product) => product.gender === "Women" || product.gender === "Men")
//     );
//   }
// };
