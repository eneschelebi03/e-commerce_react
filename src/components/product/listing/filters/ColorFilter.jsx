import { FormControl, RadioGroup } from "@mui/material";
import React from "react";
import FilterCard from "./FilterCard";
import FilterOption from "./FilterOption";

const ColorFilter = () => {
  const colors = [
    "Black",
    "White",
    "Gray",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
  ];

  return (
    <>
      <FilterCard heading={"Colors"}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            {colors.map((color) => {
              return <FilterOption value={color} controlType={"CheckBox"} />;
            })}
          </RadioGroup>
        </FormControl>
      </FilterCard>
    </>
  );
};

export default ColorFilter;
