import React from "react";
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'
import style from '../styles/Nav.module.css'
import { useDispatch } from "react-redux";
import { resetCharacters } from "../redux/action";


export default function Nav ({onSearch,loginOut}) {

    const dispatch = useDispatch()
    
    return(
        <div className={style.nav}>
            <Link to = "/about" >
                <button>About</button>
            </Link>
            <Link to = "/favorites" >
                <button>Favorites</button>
            </Link>
            <Link to = "/home">
                <button onClick={()=>dispatch(resetCharacters())}>Home</button>
            </Link>
            <SearchBar onSearch={onSearch}  />
            <button onClick={loginOut}>LogOut</button>
        </div>
    )
}