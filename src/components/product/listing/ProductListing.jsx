import React from 'react'

import "./Listing.css"
import ProductCard from '../../cards/ProductCard'


const ProductListing = (props) => {

  const products = props.productItems

  const onAddToCartHandler = (item) => {
    props.onAddToCart(item)
  }

  return (
    <>
      <div className='listings-container flexbox'>
        {products.map(product => {
                      return (
                        <ProductCard
                          item={product}
                          key={product.id}
                          onAddToCart={onAddToCartHandler}
                        />
                      );
        })}
      </div>
    
    </>
  )
}

export default ProductListing