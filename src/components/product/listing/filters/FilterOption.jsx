import React from "react";

import { Checkbox, FormControlLabel, Radio } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { CheckBoxRounded } from "@mui/icons-material";

const FilterOption = (props) => {

   const handleChange = (event) => {
     props.onCheck(event.target.checked);
  }; 
  
  const controlRadio = (
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
            color: "#0f3460",
          }}
        />
      }
      size="small"
    />
  );

  const controlCheck = (
    <Checkbox
      size="small"
      sx={{
        color: "#999999",
      }}
      checkedIcon={
        <CheckBoxRounded
          sx={{
            color: "#0f3460",
          }}
        />
      }
      onChange={handleChange}
    />
  );

  let control;

  if (props.controlType === "CheckBox") {
    control = controlCheck;
  } else {
    control = controlRadio;
  }

  const value = props.value;



  return (
    <FormControlLabel
      value={value}
      control={control}
      label={value}
      className="custom"
    />
  );
};

export default FilterOption;
