import React from "react";

const Backdrop = (props) => {
  return <div onClick={props.onToggle} className="backdrop"></div>;
};

export default Backdrop