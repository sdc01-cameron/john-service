import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styled from 'styled-components';
import primeLogo from '../../public/images/primeLogo_621x260.png';

const Item = styled.div`
  border: 2px solid #E0E0E0;
  border-radius: 5px;
  justify-content: center;
  padding: 10px;
  margin: 5px;
  ${({ isSelected }) => isSelected && `
    background-color: #FFFFE0;
    border-color: #FFA723;
    box-shadow: 2px 2px 2px 2px orange;
  `}
  &:hover {
    background-color: #FFEFD5;

  }
`;

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      //isSelected: false
    }
    this.selected = this.selected.bind(this);
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/products/${randomNum}`)
      .then(res => {
        const product = res.data;
        this.setState({
          product: res.data
        })
      })
  }

  selected() {
    this.props.productSelection(this.state.product);
  }

  render () {
    let product = this.state.product;
    // if (this.props.product) {
    //   product = this.props.product;
    // } else {

    // }

    return (
      <Item onClick={this.selected}>
        <h3>{product.name}</h3>
        <p style={{ color: 'red' }}>${Number(product.price).toFixed(2)}</p>
        <h4>{product.prime ? <img alt="prime" src={primeLogo} style={{ height: '25px', width: '57px'}}/> : 'Not Prime'}</h4>
      </Item>
    )
  }
}

export default Tile;