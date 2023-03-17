import { FormControl, RadioGroup } from "@mui/material";
import React from "react";
import FilterCard from "./FilterCard";
import FilterOption from "./FilterOption";

const ManufacturerFilter = () => {
  const manufacturers = [
    "Novartis",
    "Roche",
    "Merck & Co.",
    "Sanofi",
    "GlaxoSmithKline",
    "AbbVie",
    "Eli Lilly and Company",
    "Bayer",
    "Bristol-Myers Squibb",
    "Gilead Sciences",
    "Amgen",
    "Biogen",
  ];

  return (
    <>
      <FilterCard heading={"Manufacturer"}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            {manufacturers.map((manufacturer) => {
              return (
                <FilterOption value={manufacturer} controlType="CheckBox" />
              );
            })}
          </RadioGroup>
        </FormControl>
      </FilterCard>
    </>
  );
};

export default ManufacturerFilter;
