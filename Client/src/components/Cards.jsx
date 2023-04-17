import Card from './Card';
import style from '../styles/Cards.module.css'
import { useSelector } from 'react-redux';


export default function Cards({onClose}) {
   const {characters} = useSelector((state)=>state)
   
   return (<div className={style.cards_container}  >
      { characters &&   
        characters.map(({id,name,status,species,gender,origin,image}) => {
            return (<Card
               key = {id}
               id= {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}  
               origin = {origin}
               image = {image}
               onClose={onClose}
               />)
         })
       }
   </div>);
}
