import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Product from './Product.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    let idRandom = Math.floor(Math.random() * 50) + 1;
    let url = window.location.href;
    console.log('url: ', url);
    let id = url.split('/')[url.split('/').length - 1] || idRandom;
    console.log('id: ', typeof id);
    axios.get(`/api/products/${id}`)
      .then(res => {
        const product = res.data;
        this.setState({
          product: product
        })
      })
  }

  render() {
    return (
      <div>
        {console.log(this.state.product)}
        <Product product={this.state.product} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('ProductInfoService'));