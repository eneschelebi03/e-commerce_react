import React from 'react'
import Filters from './Filters';
import ProductListing from './ProductListing'

const ListingPage = (props) => {



  return (
    <>
      <div className="container jc_flex ">
        <Filters />
        <ProductListing productItems={props.productItems} />
      </div>
    </>
  );
}

export default ListingPage