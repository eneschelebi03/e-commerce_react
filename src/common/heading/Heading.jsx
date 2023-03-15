import React from 'react'

const Heading = (props) => {

    const heading = props.heading
    const icon = props.icon

  return (
    <div className="heading d_flex">
      <div className="heading-left row f_flex">
        {icon}
        <h2>{heading}</h2>
      </div>
      <div className="heading-right row">
        <div className="view-all">
          <span>View all</span>
          <i className="fa fa-caret-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Heading