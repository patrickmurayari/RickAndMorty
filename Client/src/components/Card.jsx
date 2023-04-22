import style from '../styles/Card.module.css';
import {addFav , removeFav} from '../redux/action.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
   const {id,name,status, species,gender,origin,image,onClose} = props
   const dispatch = useDispatch()

   const [isFav,setIsfav] = useState(false)
   const favoritos  = useSelector(state => state.myFavorites )


   const handleFavorite = () => {
      if (isFav) {
         setIsfav(false)
         dispatch(removeFav(id));
      }else {
         setIsfav(true)
         dispatch(addFav(props))
      }
   }
   
   useEffect(() => {
      favoritos.forEach((fav) => {
         if (fav.id === props.id) {
            setIsfav(true);
         }
      });
   }, [favoritos]);

   function superClouse() {
      onClose(id);
      dispatch(removeFav(id));
    }


   return (
      <div className={style.card}>
         <div className={style.head_card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
                  )}
         <button onClick={superClouse}>X</button>
         </div>
         <Link className={style.link} to={`/detail/${id}`}>
            <h2>{name.slice(0,16)}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt='' />
         </Link>
      </div>
   );
}
