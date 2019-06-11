import React from 'react';
import logo from './logo.svg';
import ProductList from './ProductList';
import SideBasket from './SideBasket';
import {productData} from './data/productData';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: []
    }
  }

  handleAddToBasket = e => {
    e.preventDefault();
    const productAdded = productData.find(product => product.productId === e.target.value)
    this.setState({ ...this.state, basketItems: [...this.state.basketItems, productAdded] });
  }
  render () {
    return (
    <main className="app">
      <ProductList handleAddToBasket={this.handleAddToBasket}/>
      <SideBasket basketItems={this.state.basketItems} />
    </main>
  )
    };
}

export default App;
