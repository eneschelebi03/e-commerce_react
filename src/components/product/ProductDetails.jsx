import React from "react";
import { useParams } from "react-router-dom";

import ProductImages from "./ProductImages";
import Data from "../flashDeals/Data";
import "./ProductDetails.css"

const ProductDetails = () => {
  const { productId } = useParams();
  const product = Data.productItems.find((prod) => prod.id === parseInt(productId));

  console.log(productId)

  return (
    <>
      <div className="hero-row">
        <div className="hero-col hero-col1">
          <ProductImages images={"." + product.cover} />
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
            <span className="discount hero-subHeading">
              {product.discount}%
            </span>
            <del className="discount2 hero-para">$250.00</del>
            <div className="cart2-sec">
              <div className="cart2-col cart2-col1">
                {/* <button className="minus">-</button> */}
                {/* <svg
                  onClick={() => {
                    let count = items - 1;
                    if (count < 1) {
                      count = 0;
                    }
                    setItems(count);
                  }}
                  className="minus"
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
                </svg> */}
                <i class="fa fa-minus minus"></i>

                <span className="cart2-values">{}</span>
                <i className="fa fa-plus plus"></i>
              </div>
              <div className="cart2-col cart2-col2">
                <button className="cart2-btn">
                  <span class="material-icons-outlined cart2-main">shopping_cart</span>
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
