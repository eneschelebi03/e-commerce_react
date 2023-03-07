import React from 'react'

const WrapperCard = (props) => {
  return (
    <div className="product">
      <div className="img icon-circle">
        <i>{props.card.cover}</i>
      </div>
      <h3>{props.card.title}</h3>
      <p>{props.card.decs}</p>
    </div>
  );
}

export default WrapperCard