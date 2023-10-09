import React from "react"
import { Link } from "react-router-dom"
import style from './About.module.css'
export default function About() {
    return (
        <div className={`${style.content}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-warning">About The Party</h3>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</h5>
                        <br />
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h5>
                        <a className="btn btn-warning rounded-pill ms-5 text-light" role="button" >Know more</a>
                    </div>
                </div>
            </div>
        </div>


    )
}