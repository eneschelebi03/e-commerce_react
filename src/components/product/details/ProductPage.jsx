import React from "react";
import { useParams } from "react-router-dom";

import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

import "./ProductPage.css";



const ProductPage = (props) => {
  const onAddToCartHandler = (product, qty) => {
    props.onAddToCart(product, qty);
  };
    const { productId } = useParams();
    
    const productItems = props.productItems.slice(0, 4)
        .map(product => {
            return {...product, cover: "." + product.cover}
    })

  const product = productItems.find(
    (prod) => prod.id === parseInt(productId)
    );

  console.log(productId);

  return (
    <>
          <ProductDetails onAddToCart={onAddToCartHandler} product={product} />
          <RelatedProducts productItems={productItems} onAddToCart={ onAddToCartHandler } />
    </>
  );
};

export default ProductPage;
