import React, { Component } from 'react';
import Product from './Products';
export default class Home extends Component{
  state = {
    products : [
      {
      id : 1,
      type : "Phone",
      price : 120000,
      brand : "Iphone",
    },
    {
      id : 2,
      type : "Phone",
      price : 10000,
      brand : "OPPO",
    },
    {
      id : 3,
      type : "Phone",
      price : 11500,
      brand : "Realme",
    },
    {
      id : 4,
      type : "Labtop",
      price : 20000,
      brand : "HP",
    },
    {
      id : 5,
      type : "Labtop",
      price : 100000,
      brand : "Mac",
    }
  ]
  }
  render() {
    return (
      <div>
        <Product productDetails = {this.state.products[0]} />

      </div>
    );
  }
}
