import React, { useState } from "react";


const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
        {shopItems.map((shopItem) => {
          return (
            <div className="box" key={shopItem.id}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{shopItem.discount}% Off</span>
                  <img src={shopItem.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>

                <div className="product-details">
                  <h3>{shopItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{shopItem.price}.00</h4>
                    <button onClick={() => addToCart(shopItem)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ShopCart;
