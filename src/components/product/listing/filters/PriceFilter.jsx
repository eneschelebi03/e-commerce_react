import React from "react";
import FilterCard from "./FilterCard";
import { FormControl, RadioGroup } from "@mui/material";
import FilterOption from "./FilterOption";

const PriceFilter = (props) => {
  const handleChange = (event) => {
    const value = event.target.value;

    let min;
    let max;
    switch (value) {
      case "1 - 100":
        min = 1;
        max = 100;
        break;
      case "100 - 200":
        min = 100;
        max = 200;
        break;
      case "200 - 300":
        min = 200;
        max = 300;
        break;
      case "300 - 500":
        min = 300;
        max = 500;
        break;
      case "Above 500":
        min = 500;
        max = 9999999;
        break;
      default:
        min = 1;
        max = 9999999;
    }

    props.onFilter(min, max);
  };

  return (
    <>
      <FilterCard heading={"Price"}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="price"
            onChange={handleChange}
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
