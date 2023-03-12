import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addToCart = () => {
    props.onAddToCart(props.item);
  };

  return (
    <Link to={`/products/${props.item.id}`}>
      <div className="product mtop box">
        <div className="img">
          <span className="discount">{props.item.discount}% Off</span>
          <img src={props.item.cover} alt="" />
          <div className="product-like">
            <label>{count}</label> <br />
            <i className="fa-regular fa-heart" onClick={increment}></i>
          </div>
        </div>

        <div className="product-details">
          <h3>{props.item.name}</h3>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price">
            <h4>{props.item.price}.00</h4>
            <button onClick={addToCart}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
