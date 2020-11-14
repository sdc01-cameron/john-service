import React from 'react';
import ReactDOM from 'react-dom';

function Product({product}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Ratings:</p>
      {console.log(product.ratings)}
      <h4>Prime: {product.prime ? 'Yes' : 'No'}</h4>
      <p>Returnable: {product.returnable ? 'Yes' : 'No'}</p>
      <p>Flavor: {product.flavor}</p>
      <p>Price: ${product.price}</p>
      <p>Ingredients: {product.ingredients}</p>
      <p>About: {product.about}</p>
      <p>Sensitivity: {product.sensitivity}</p>
    </div>
  )
}

export default Product;