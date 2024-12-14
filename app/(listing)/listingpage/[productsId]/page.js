

import React from 'react'
import Products from './_components/Products/Products';

async function ProductPage({params}) {
   
    
    const result = await params.productsId;
    // console.log(await params)
  return (<Products id={result} />);
}

export default ProductPage
