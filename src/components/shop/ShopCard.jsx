import React from "react";
import ProductCard from "../cards/ProductCard";


const ShopCard = ({ shopItems, addToCart }) => {

  const onAddToCartHandler = (item) => {
      addToCart(item);
  }

  return (
    <>
        {shopItems.map((shopItem) => {
          return <ProductCard item={shopItem} key={shopItem.id} onAddToCart={onAddToCartHandler} />;
        })}
    </>
  );
};

export default ShopCard;
