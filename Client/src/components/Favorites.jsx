import {useDispatch, useSelector } from "react-redux"
import React, { useState } from "react"
import Card from "./Card"
import Style from '../styles/Cards.module.css'
import { removeFav, filterCards , orderCards, reset} from "../redux/action"


const Favorites = ({onClose}) => {
    const dispatch = useDispatch()
    const favorites =  useSelector((state) => state.myFavorites)
    const [aux,setAux] = useState(false)

    const closeFavorite = (id) => {
        onClose(id)
        dispatch(removeFav(id))
    }

    const handleOrder = (event) => {
        event.preventDefault()
        const valor = event.target.value;
        dispatch(orderCards(valor))
    }
    
    const handleFilter = (event) => {
        event.preventDefault()
        const valor = event.target.value
        dispatch(filterCards(valor))
    }

    const resetBut = () => {
        dispatch(reset())
    }
    return (
        <div>
            <select name="order" 
                    defaultValue={"DEFAULT"}
                    onChange={handleOrder}>
                <option value="DEFAULT" disabled="true" >Select Order</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select name="filter" 
                    defaultValue={"DEFAULT"}
                    onChange={handleFilter}>
                <option value="DEFAULT" disable="true">Select Filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <button onClick={resetBut}>Reset</button>
            <div className={Style.cards_container}>
            {
                favorites && favorites.map(({id,name,status,species,gender,origin,image}) => {
                    return (<Card
                        key = {id}
                        id= {id}
                        name = {name}
                        status = {status}
                        species = {species}
                        gender = {gender}  
                        origin = {origin}
                        image = {image}
                        onClose={()=>closeFavorite(id)}
                        />)
                    })
                }
            </div>
        </div>
    )
}

export default Favorites;