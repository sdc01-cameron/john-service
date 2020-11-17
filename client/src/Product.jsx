import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import primeLogo from '../../public/images/primeLogo_621x260.png';

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
        <hr></hr>
        <p>Price: <span style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</span></p>
        <h4>{product.prime ? <img alt="prime" src={primeLogo} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
        <p>This item is {product.returnable ? 'returnable' : 'non-returnable'} </p>
        <p>Flavor: <b>{product.flavor}</b></p>
        <div>
          <TileWrapper>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </TileWrapper>
        </div>
        <p><b>Ingredients</b> {product.ingredients}</p>
        <p><b>Brand</b> {product.brand}</p>
        <p><b>Sensitive</b> {product.sensitivity}</p>
        <p><b>Ingredient Information</b></p>
        <p>{product.ingredient_info}</p>
        <hr></hr>
        <p><b>About this item</b></p>
        <p>{product.about}</p>
      </div>
    </Wrapper>
  )
}

export default Product;