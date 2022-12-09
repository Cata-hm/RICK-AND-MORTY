import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"

export default function NavBar(props) {
    
    return (
        <div className= {styles.nav}>
        <Link to= "/favorites" className={styles.links}>Favorites</Link>
        <Link to= "/about" className={styles.links}>About</Link>
        <Link to= "/home" className={styles.links}>Home</Link>
        <SearchBar onSearch = {props.onSearch}/>
        </div>
    );
}