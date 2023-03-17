import React from "react";
import FilterCard from "./FilterCard";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { CheckBoxRounded } from "@mui/icons-material";

const PriceFilter = () => {
  const controlType = (
    <Radio
      icon={
        <CheckBoxIcon
          sx={{
            color: "#999999",
          }}
        />
      }
      checkedIcon={
        <CheckBoxRounded
          sx={{
            color: "#999999",
          }}
        />
      }
      size="small"
    />
  );

  return (
    <>
      <FilterCard heading={"Price"}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            <FormControlLabel value="All" control={controlType} label="All" />
            <FormControlLabel
              value="1-100"
              control={controlType}
              label="1-100"
            />
            <FormControlLabel
              value="100-200"
              control={controlType}
              label="100-200"
            />
            <FormControlLabel
              value="200-300"
              control={controlType}
              label="200-300"
            />
          </RadioGroup>
        </FormControl>
      </FilterCard>
    </>
  );
};

export default PriceFilter;
