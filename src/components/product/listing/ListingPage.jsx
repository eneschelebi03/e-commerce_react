import React from 'react'
import Filters from './filters/Filters';
import ProductListing from './ProductListing'

const ListingPage = (props) => {



  return (
    <>
      <div className="background">
        <div className="container jc_flex ">
          <Filters />
          <ProductListing productItems={props.productItems} />
        </div>
      </div>
    </>
  );
}

export default ListingPage