import React from "react";

const FilterCard = (props) => {
  return (
    <div className="filter-card">
      <h3>{props.heading}</h3>
      {props.children}
    </div>
  );
};

export default FilterCard;
