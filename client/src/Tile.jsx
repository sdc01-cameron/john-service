import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styled from 'styled-components';
import primeLogo from '../../public/images/primeLogo_621x260.png';

const URL = 'http://localhost:3005/api/products/';

const Item = styled.div`
  border: 3px solid;
  justify-content: center;
  padding: 10px;
  margin: 5px;
`;

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    axios.get(`${URL}${randomNum}`)
      .then(res => {
        const product = res.data;
        this.setState({
          product: res.data
        })
      })
  }

  render () {
    const {product} = this.state;
    return (
      <Item>
        <h3>{product.name}</h3>
        <p style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</p>
        <h4>{product.prime ? <img alt="prime" src={primeLogo} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
      </Item>
    )
  }
}

export default Tile;