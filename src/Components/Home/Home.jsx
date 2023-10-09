import React from "react"
import style from './Home.module.css'
export default function Home() {
    return (
        <div className={style.content}>
            <div className="row">
                <div className="offset-7 col-6">
                    <h5>31th octobar 2018</h5>
                    <h4 className="text-warning">Halloween Party</h4>
                    <p>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
                    <a className="btn btn-warning rounded-pill ms-5 text-light" role="button" >Explore more</a>
                </div>
            </div>
        </div>
    )
}