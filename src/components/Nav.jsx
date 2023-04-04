import React from "react";
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'
import style from '../styles/Nav.module.css'
// import "./Nav.css"

export default function Nav (props) {
    
    return(
        <div className={style.nav}>
            <Link to = "/about" >
                <button>About</button>
            </Link>
            <Link to = "/home">
                <button>Home</button>
            </Link>
            <SearchBar onSearch={props.onSearch}  />
        </div>
    )
}