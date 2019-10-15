import React, { Component } from 'react';
import UserComponent from './Users/Users';
import Product from './Product/product';
import './App.css';

class App extends Component {
  state = {
    productList: [{
      product: 'iphone', key: "1"
    }, { product: 'redmi', key: "2" }, { product: 'oppo', key: "3" }, { product: 'vivo', key: "4" }]
  };

  changeProduct = (productName, oldValue) => {
    const productList = this.state.productList;
    if (productList.length > 0) {
      productList[0].product = productName;
      this.setState(productList);
      console.log(oldValue);
    }

  }

  removeProduct = (productIndex) => {
    console.log('index position', productIndex);
    const productList = this.state.productList.splice(productIndex, 1);
    this.setState(productList);
  }

  printValue = (value) => {
    console.log('Value is ', value);
  }

  render() {
    console.log(this.state.productList);
    const products = this.state.productList.map((value, index) => {
      return (<Product key={value.key} product={value.product} onClick={() => this.printValue(value)}
        indexPosition={index} removeFunction={this.removeProduct}
      />);
    });

    return (
      <div className="App">
        <header>
          <p>
            This is my first react application.
        </p>
        </header>
        <div>
          {products}
          <button onClick={this.changeProduct.bind(this, 'Samsung', 'iphone')}>Change product name</button>
        </div>
        <UserComponent />
      </div>
    );
  }
}

export default App;
