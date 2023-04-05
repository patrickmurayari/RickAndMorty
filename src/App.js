import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';

import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';

import {Routes , Route , useNavigate, useLocation } from "react-router-dom"
import About from "./components/About.jsx";

function App() {
   const Email = "patrickm@gmail.com"
    const Password = "@Patr123"
  

   const [characters,setCharacters] = useState([])
   const [access,setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()

   function onSearch(id) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          console.log(":::::", data);
          if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id);
            if (exist) {
              alert("ya existe");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
            window.alert("¡No hay personajes con este ID!");
          } // .then(()=>{})
        });
    }

    function onClose(id) {
      setCharacters((oldChars) => {
        return oldChars.filter((ch) => ch.id !== id);
      });
    } 

    const loginAccess = (inputs) => {
      if(inputs.password === Password && inputs.email === Email){
        setAccess(true)
        navigate("/home")
        return alert("BIEVENIDO A LA APP")
      }
    }

    const loginOut = () => {
        setAccess(false)
        navigate("/")
    }

    useEffect(()=>{
      !access && navigate("/");
    }, [access])


   return (   
   <div>
      {
        location.pathname === "/"? null: <Nav loginOut={loginOut} onSearch={onSearch}/> 
      } 
      <Routes> 
         <Route path='/' element={<Login loginAccess={loginAccess} /> }></Route>
         <Route path="/home" 
                element={<Home onClose={onClose} characters={characters} />}
                ></Route>
         <Route path='/about' element={<About />}> </Route>
      </Routes>
   </div>
   );
}

export default App;
