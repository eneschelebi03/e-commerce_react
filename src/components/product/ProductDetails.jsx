import React, { useState } from "react";

import ProductImages from "./ProductImages";

const ProductDetails = (props) => {
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    if (qty >= 99) {
      setQty(99);
    } else {
      setQty((qty) => qty + 1);

    }
  };

  const decreaseQty = () => {
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty((qty) => qty - 1);
    }
  };

  const product = props.product

  const addToCart = () => {
    props.onAddToCart(product, qty);
  };

  return (
    <>
      <div className="hero-row">
        <div className="hero-col hero-col1">
          <ProductImages images={product.images} discount={product.discount} />
        </div>
        <div className="hero-col hero-col2">
          <div className="col2-wrapper">
            <h4 className="hero-subHeading">BORCELLE COMPANY</h4>
            <h1 className="main-heading">{product.name}</h1>
            <p className="hero-para">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole,they'll withstand everything
              the weather can offer.
            </p>
            <span className="dollar">${product.price}.00</span>
            <del className="discount2 hero-para">$250.00</del>
            <div className="cart2-sec">
              <div className="cart2-col cart2-col1">
                <i className="fa fa-minus minus" onClick={decreaseQty}></i>
                <span className="cart2-values">{qty}</span>
                <i className="fa fa-plus plus" onClick={increaseQty}></i>
              </div>
              <div className="cart2-col cart2-col2">
                <button className="cart2-btn" onClick={addToCart}>
                  <span className="material-icons-outlined cart2-main">
                    shopping_cart
                  </span>
                  <span className="cart2-text">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
