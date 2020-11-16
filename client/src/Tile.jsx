import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styled from 'styled-components';

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
        <p>Price: ${product.price}</p>
        <h4>Prime: {product.prime ? 'Yes' : 'No'}</h4>
      </Item>
    )
  }
}

export default Tile;