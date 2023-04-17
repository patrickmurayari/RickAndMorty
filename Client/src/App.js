import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';

import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import Favorites from './components/Favorites.jsx'
import Cards from './components/Cards.jsx';

import {Routes , Route , useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addCharacter, searchCharacter  } from './redux/action.js';
import About from "./components/About.jsx";

function App() {
  const Email = "patrickm@gmail.com"
  const Password = "@Patr123"
  

   const [characters,setCharacters] = useState([])
   const [access,setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch();


   useEffect(()=> {
    axios
      .get(`http://localhost:3001/rickandmorty/characters`)
      .then((results)=> {
        console.log(":::1", results.data);
        setCharacters([...results.data])
        dispatch(addCharacter(results.data))

    })
   },[])



   function onSearch(id) {
      axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          console.log(":::::2", data);
          dispatch(searchCharacter(data))
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
                element={<Cards onClose={onClose} />}
                ></Route>
         <Route path='/about' element={<About />}> </Route>
         <Route path='/favorites' element={<Favorites onClose={onClose} />}> </Route>
      </Routes>
   </div>
   );
}

export default App;
