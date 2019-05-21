import React, { Component } from "react";
import axios from "axios";
import StoreFront from "./Components/StoreFront/StoreFront";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      cart: [],
      showCart: false
    };
    this.addToCart = this.addToCart.bind(this)
    this.navigate = this.navigate.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
  }

  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/products/")
      .then(response => {
        this.setState({
          products: response.data
        });
      });
  
  }
  addToCart(item) { 
    console.log(item)
    console.log(this.state)
    this.setState({cart: [...this.state.cart, item]
    });
  }
  removeFromCart(index) {
    let cartCopy = this.state.cart.slice();
    cartCopy.splice(index, 1);
    this.setState({
      cart: cartCopy
    });
    console.log(this.state.cart)
  }
  navigate(location) {
    if (location === "cart") {
      this.setState({showCart: true})
    } else {
      this.setState({showCart: false})
    }
  }

  render() {
    const { products, cart, showCart } = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <NavBar navigate={this.navigate} />
        <div className="main-container">
          {showCart ? (
            <ShoppingCart cart={cart} removeFromCart={this.removeFromCart} />
          ) : (
            <StoreFront products={products} addToCart={this.addToCart} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
