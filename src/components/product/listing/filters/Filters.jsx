import React, { useEffect, useState } from "react";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import ManufacturerFilter from "./ManufacturerFilter";
import PriceFilter from "./PriceFilter";
import ReactDOM from "react-dom"
import Backdrop from "../../../../common/helpers/Bakcdrop";


const Filters = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResize() {
    if (window.innerWidth < 900) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (props.activeFilter) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const priceFilterHandler = (min, max) => {
    props.onPriceRangeChange(min, max)
  }

  return (
    <>
      <div
        className={`col_flex filters-container ${
          isSmallScreen && "mobile-view"
        } ${props.activeFilter && "active"}`}
      >
        {props.activeFilter &&
          ReactDOM.createPortal(
            <Backdrop onToggle={props.onHideFilter} />,
            document.getElementById("backdrop-root")
          )}
        <PriceFilter onFilter={priceFilterHandler} />
        <GenderFilter  />
        <ColorFilter />
        <ManufacturerFilter />
      </div>
    </>
  );
};

export default Filters;
