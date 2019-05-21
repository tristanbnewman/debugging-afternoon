import React, { Component } from "react";
import "./ShoppingCart.css";

class ShoppingCart extends Component {

  componentWillMount(){
    console.log(this.props.cart)
  }

  render() {

    if(this.props.cart[0]){

      const shoppingCartDisplay = this.props.cart.map((element, index)=>{
        return (<div className="shopping-cart-product-container" key={index}>
          <img src={element.image} alt="" />
          <div className="shopping-cart-info">
            <h2>{element.desc}</h2>
            <h2>{"$" + element.price + ".00"}</h2>
            <div className="shopping-cart-button-container">
             <button
                className="shopping-cart-button"
                onClick={() => this.props.removeFromCart(element)}>
                  Remove From Shopping Cart
              </button>
            </div>
          </div>
        </div>)
      })

      return shoppingCartDisplay
    }
    else{
      return <div className="shopping-cart-container">
          <div className="go-buy-something">
            <h1>Your shopping cart is empty! Go buy something!</h1>
          </div>
        </div>
      
    }

    // if(this.props.cart){

    //   shoppingCartDisplay = this.props.cart.map((element, index) => {
    //     return (
    //       <div className="shopping-cart-product-container" key={index}>
    //         <img src={element.image} alt="" />
    //         <div className="shopping-cart-info">
    //           <h2>{element}</h2>
    //           <h2>{"$" + element.price + ".00"}</h2>
    //           <div className="shopping-cart-button-container">
    //             <button
    //               className="shopping-cart-button"
    //               onClick={() => this.props.removeFromCart(element)}
    //             >
    //               Remove From Shopping Cart
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   });
    // }
    // else{
    //   shoppingCartDisplay = 
    // }
    

    // return (
    //   
    // );
  }
}

export default ShoppingCart;
