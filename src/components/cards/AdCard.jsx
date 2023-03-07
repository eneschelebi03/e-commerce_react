import React from 'react'

const AdCard = (props) => {
  return (
    <>
      <div className={props.classes}>
        <div className="img">
          <img src={props.data.cover} alt="" />
        </div>
        <h4>{props.data.name}</h4>
        <span>{props.data.price}</span>
      </div>
    </>
  );
}

export default AdCard