import React from "react";
import FilterCard from "./FilterCard";
import { FormControl, RadioGroup } from "@mui/material";
import FilterOption from "./FilterOption";

const PriceFilter = () => {
  return (
    <>
      <FilterCard heading={"Price"}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            <FilterOption value="All" controlType="Radio" />
            <FilterOption value="1 - 100" controlType="Radio" />
            <FilterOption value="100 - 200" controlType="Radio" />
            <FilterOption value="200 - 300" controlType="Radio" />
            <FilterOption value="300 - 500" controlType="Radio" />
            <FilterOption value="Above 500" controlType="Radio" />
          </RadioGroup>
        </FormControl>
      </FilterCard>
    </>
  );
};

export default PriceFilter;
