import { ADD_FAV, REMOVE_FAV , FILTER, ORDER, RESET , ADD_CHARACTER , REMOVE_CHARACTER, SEARCH_CHARACTER, RESET_CHARACTERS} from "./type-action";
import axios from "axios";

export const searchCharacter = (character) => {
    return {
        type: SEARCH_CHARACTER,
        payload: character
    }
} 

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
} 


export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload:id
    }
}

export const addFav = (character) => {
    return async function(dispatch){
        try {
            const {data} = await axios.post(`http://localhost:3001/rickandmorty/favorite`, character);
            return dispatch({
                 type: ADD_FAV,
                 payload: data
            })
            
        } catch (error) {
            console.log("addFav not found", error);
        }
    }
    // return {
    //     type: ADD_FAV,
    //     payload: myFavorites
    // }
} 

export const removeFav = (id) => {
    return async function(dispatch){
        try {
            const {data} = await axios.delete(`http://localhost:3001/rickandmorty/favorite/${id}`);
            return dispatch({
                 type: REMOVE_FAV,
                 payload: data
            })
            
        } catch (error) {
            console.log("removeFav not found", error);
        }
    }
    // return {
    //     type: REMOVE_FAV,
    //     payload: myFavorites
    // }
}

export const  filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender 
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const resetCharacters = () => {
    return {
        type: RESET_CHARACTERS
    }
}