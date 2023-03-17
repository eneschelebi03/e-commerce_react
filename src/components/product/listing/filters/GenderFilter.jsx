import { FormControl, RadioGroup } from "@mui/material";
import React from "react";
import FilterCard from "./FilterCard";
import FilterOption from "./FilterOption";

const GenderFilter = () => {
  return (
    <>
      <FilterCard heading={"Gender"}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FilterOption value="Men" controlType="CheckBox" />
            <FilterOption value="Women" controlType="CheckBox" />
          </RadioGroup>
        </FormControl>
      </FilterCard>
    </>
  );
};

export default GenderFilter;
