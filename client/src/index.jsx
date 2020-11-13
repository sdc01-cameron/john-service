import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const URL = 'http://localhost:3005/api/products/';

class App extends React.Component {
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
        console.log(res.data);
        const product = res.data;
        this.setState({
          product: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Product goes here!</h1>
        <p>{this.state.product.name}</p>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));