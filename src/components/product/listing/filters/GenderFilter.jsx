import { FormControl, FormGroup } from "@mui/material";
import React, { useState } from "react";
import FilterCard from "./FilterCard";
import FilterOption from "./FilterOption";

const GenderFilter = (props) => {
  const [[menCheck, womenCheck], setGenderFilter] = useState([false, false]);

  const menCheckHandler = (checked) => {
    setGenderFilter([checked, womenCheck]);
    props.onGenderFilter([checked, womenCheck]);
  };

  const womenCheckHandler = (checked) => {
    setGenderFilter([menCheck, checked]);
    props.onGenderFilter([menCheck, checked]);
  };

  return (
    <>
      <FilterCard heading={"Gender"}>
        <FormControl>
          <FormGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FilterOption
              value="Men"
              controlType="CheckBox"
              onCheck={menCheckHandler}
            />
            <FilterOption
              value="Women"
              controlType="CheckBox"
              onCheck={womenCheckHandler}
            />
          </FormGroup>
        </FormControl>
      </FilterCard>
    </>
  );
};

export default GenderFilter;
