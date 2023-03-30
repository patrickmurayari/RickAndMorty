import React from "react";
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'
import "./Nav.css"

export default function Nav (props) {
    
    return(
        <div className="nav">
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