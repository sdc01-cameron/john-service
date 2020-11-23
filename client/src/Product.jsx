import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
//import primeLogo from '../../public/images/primeLogo_621x260.png';
import GlobalFonts from './fonts/fonts.js';

import Tile from './Tile.jsx';
import Stars from './Stars.jsx';
import Table from './Table.jsx';

const Wrapper = styled.section`
  padding: 5px;
  font-family: 'PT Sans';
  font-weight: 400;
  font-size: 15px;
`;

const TileWrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-gap: 5px
`;

const TableWrapper = styled.div`
  font-size: 15px;
`;

const About = styled.div`
  font-size: 15px;
`;


const Product = ({product}) => {
  //let isSelected = false;
  const [selectedProduct, setProduct] = useState({});

  const productSelection = (selProduct) => {
    setProduct(selProduct);
  }

  let ratingsNum = Math.floor(Math.random() * 1000) + 1;
  if (selectedProduct.name) {
    product = selectedProduct;
    //isSelected = true;
  }
  return (
    <Wrapper>
      <div>
        <h1>{product.name}</h1>
        <Stars rating={product.ratings_avg} ratingsNum={ratingsNum} />
        <hr></hr>
        <p>Price: <span style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</span></p>
        <h4>{product.prime ? <img alt="prime" src={`https://fec-pics.s3.us-east-2.amazonaws.com/primeLogo_621x260.png`} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
        <p>This item is {product.returnable ? 'returnable' : 'non-returnable'} </p>
        <p>Flavor: <b>{product.flavor}</b></p>
        <div>
          <TileWrapper>
            {[...Array(4)].map((item, index) => {
              return index === 0 ? <Tile product={product} productSelection={productSelection}/> : <Tile productSelection={productSelection}/>
            })}
          </TileWrapper>
        </div>
        <TableWrapper>
          <Table product={product} />
        </TableWrapper>
        <hr></hr>
        <About>
          <p><b>About this item</b></p>
          <p>{product.about}</p>
        </About>
      </div>
    </Wrapper>
  )
}

export default Product;