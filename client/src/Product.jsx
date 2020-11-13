import React from 'react';
import ReactDOM from 'react-dom';

function Product({product}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <h6>Prime: {product.prime}</h6>
      <p>{product.flavor}</p>
      <p>${product.price}</p>
      <p>{product.ingredients}</p>
      <p>{product.about}</p>
    </div>
  )
}

export default Product;