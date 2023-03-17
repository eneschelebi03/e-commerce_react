import React from "react";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import ManufacturerFilter from "./ManufacturerFilter";
import PriceFilter from "./PriceFilter";

const Filters = () => {
  return (
    <>
      <div className="col-flex">
        <PriceFilter />
        <GenderFilter />
        <ColorFilter />
        <ManufacturerFilter />
      </div>
    </>
  );
};

export default Filters;
