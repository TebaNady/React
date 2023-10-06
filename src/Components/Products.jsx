import React, { Component } from "react";

export default class Product extends Component {
    render() {
        let { title, price, brand, thumbnail } = this.props.productDetails
        return (
                
                       <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card text-start bg-secondary text-light mb-5">
                            <img className="card-img" src={thumbnail} alt={title} height='200px'/>
                            <div className="card-body">
                                <h4 className="card-text">Name: {title}</h4>
                                <p className="card-text">Brand: {brand}</p>
                                <p className="card-text">Price: {price}</p>
                                <button className="btn btn-primary me-3" onClick={()=>this.props.increaseProductPrice(this.props.index)}>Increase price</button>
                                <button className="btn btn-danger" onClick={() => this.props.deleteProduct(this.props.index)}>Delete product</button>
                            </div>
                            </div>
                
            </div>
        )
    }
}