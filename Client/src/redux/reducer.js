import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET, ADD_CHARACTER ,REMOVE_CHARACTER, SEARCH_CHARACTER,RESET_CHARACTERS} from "./type-action";

const initialState = {
    characters: [],
    charactersOrigin:[],
    myFavorites: [],
    myFavoritesOrigin :[],
}

const  rootReducer = (state=initialState , {type ,payload}) => {
    switch (type) {
        case RESET_CHARACTERS :
            return {
                ...state,
                characters:[...state.charactersOrigin]
            } 
        case SEARCH_CHARACTER :
            return {
                ...state,
                characters: [payload]
            } 
        case ADD_CHARACTER :
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    charactersOrigin: [...payload],
                    characters : [...state.charactersOrigin],
                };
            }
            return {
                ...state,
                characters: [payload, ...state.characters]
            };
        case REMOVE_CHARACTER:
            const removeCharacter = state.myFavoritesOrigin.filter((char) => char.id !== payload)
            return {
                ...state,
                myFavorites: removeCharacter,
                myFavoritesOrigin :removeCharacter,
            }
        case ADD_FAV :
            return {
                ...state,
                myFavorites : payload,
                myFavoritesOrigin : payload
            } 
        case REMOVE_FAV:
            // const removeFav = state.myFavoritesOrigin.filter((char) => char.id !== payload)
            return {
                ...state,
                myFavorites: payload,
                myFavoritesOrigin :payload
            }
        case FILTER:
            const genero = state.myFavoritesOrigin.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites:genero
            }
        case ORDER:
            const newOrder = state.myFavoritesOrigin.sort((a,b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload? 1 : -1;
                }
                if (a.id < b.id) {
                    return "Descendente" === payload? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                myFavorites: newOrder
            }
        case RESET:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin]
            }
        default:
            return {...state}
    }   
}

export default rootReducer;