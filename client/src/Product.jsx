import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Tile from './Tile.jsx';

const Wrapper = styled.section`
  padding: 4em;
`;

const TileWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px
`;

function Product({product}) {
  return (
    <Wrapper>
      <div>
        <h1>{product.name}</h1>
        <p>Ratings Average: {product.ratings_avg}</p>
        <h4>Prime: {product.prime ? 'Yes' : 'No'}</h4>
        <p>Returnable: {product.returnable ? 'Yes' : 'No'}</p>
        <p>Flavor: {product.flavor}</p>
        <div>
          <TileWrapper>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </TileWrapper>
        </div>
        <p>Price: ${product.price}</p>
        <p>Ingredients: {product.ingredients}</p>
        <p>Sensitivity: {product.sensitivity}</p>
        <p>About: {product.about}</p>
      </div>
    </Wrapper>
  )
}

export default Product;