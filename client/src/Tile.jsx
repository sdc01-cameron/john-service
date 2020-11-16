import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const URL = 'http://localhost:3005/api/products/';

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
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <h4>Prime: {product.prime ? 'Yes' : 'No'}</h4>
      </div>
    )
  }
}

export default Tile;