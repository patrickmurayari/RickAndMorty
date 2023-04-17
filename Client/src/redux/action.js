import { ADD_FAV, REMOVE_FAV , FILTER, ORDER, RESET , ADD_CHARACTER , REMOVE_CHARACTER, SEARCH_CHARACTER, RESET_CHARACTERS} from "./type-action";

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
    return {
        type: ADD_FAV,
        payload: character
    }
} 

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload:id
    }
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