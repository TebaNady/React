import React, { Component } from "react";

export default class Product extends Component {
    render() {
        let { id, type, price, brand } = this.props.productDetails
        return (
            <div className="container">

                <div className="row">
                    <div className="col-3">
                        <div className="card text-start bg-danger">
                            <div className="card-body">
                                <h2>The id is {id}</h2>
                                <p className="card-text">The type is {type}</p>
                                <p className="card-text">The price is {price}</p>
                                <p className="card-text">The brand is {brand}</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-3">
                            <div className="card text-start bg-danger">
                                <div className="card-body">
                                    <h2>The id is {id}</h2>
                                    <p className="card-text">The type is {type}</p>
                                    <p className="card-text">The price is {price}</p>
                                    <p className="card-text">The brand is {brand}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card text-start bg-danger">
                                <div className="card-body">
                                    <h2>The id is {id}</h2>
                                    <p className="card-text">The type is {type}</p>
                                    <p className="card-text">The price is {price}</p>
                                    <p className="card-text">The brand is {brand}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}