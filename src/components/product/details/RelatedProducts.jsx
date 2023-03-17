import React from "react";
import ProductCard from "../../cards/ProductCard";

const RelatedProducts = ({ productItems, onAddToCart }) => {
  const onAddToCartHandler = (item) => {
    onAddToCart(item);
  };

  return (
    <>
      <div className="container related">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <img
              src="../images/product/related.png"
              alt=""
            />
            <h2>Related Products</h2>
          </div>
          <div className="heading-right row">
            <span>View all</span>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
        <div className="d_flex">
          {productItems.map((productItem) => {
            return (
              <ProductCard
                item={productItem}
                key={productItem.id}
                onAddToCart={onAddToCartHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
