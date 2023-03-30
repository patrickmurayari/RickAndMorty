import React, { useState } from "react";
export default function SearchBar(props) {
   const [id , setId]  = useState(""); 

   const handleChange = (event) => {
      const valor = event.target.value;
      setId(valor)
   }
   return (
      <div>
         <input type='search' onChange={handleChange} value ={id}  />
         <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}