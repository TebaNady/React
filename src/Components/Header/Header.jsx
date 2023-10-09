import React from "react"
import { Link } from "react-router-dom"
import styles from './Header.module.css'
import logo from '../../Images/logo.png';
export default function Header() {
    return (
        <nav className={styles.nav}>
            <Link className={styles["nav-link"]} to="">
                <img src={logo} width="30px" />
            </Link>
            <Link className={styles["nav-link"]} to="home" aria-current="page">Home</Link>
            <Link className={styles["nav-link"]} to="artist">Artist</Link>
            <Link className={styles["nav-link"]} to="about">About</Link>
            <Link className={styles["nav-link"]} to="contact">Contact</Link>
            <Link className="btn btn-warning rounded-pill ms-5 text-light" role="button" >Get a ticket</Link>
        </nav>
    )
}