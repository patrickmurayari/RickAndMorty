import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';

import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import Favorites from './components/Favorites.jsx'
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';

import {Routes , Route , useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addCharacter, searchCharacter  } from './redux/action.js';
import About from "./components/About.jsx";

function App() {
  // const Email = "patrickm@gmail.com"
  // const Password = "@Patr123"
  

   const [characters,setCharacters] = useState([])
   const [access,setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch();


   useEffect(()=> {
    axios
      .get(`http://localhost:3001/rickandmorty/character/all`)
      .then((results)=> {
        // console.log(":::1", results.data);
        // setCharacters([...results.data])
        dispatch(addCharacter(results.data))

    })
   },[])



   function onSearch(id) {
      axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          // console.log(":::::2", data);
          dispatch(searchCharacter(data))
        });
    }

    function onClose(id) {
      setCharacters((oldChars) => {
        return oldChars.filter((ch) => ch.id !== id);
      });
    } 

    const loginAccess = (inputs) => {
      axios.get(`http://localhost:3001/rickandmorty/login?password=${inputs.password}&email=${inputs.email}`)
      .then(({data})=> {
        // console.log(':::::::: ESTYO ADENTRO DE AXIOS')
        // console.log(':::::::::', data.access);
        if(data.access) {
          navigate('/home');
          return alert("Welcome to our App");
        }else {
          return alert("invalid user")
        }
      })

    }

    const loginOut = () => {
      axios.get(`http://localhost:3001/rickandmorty/login?password=1323&email=123`)
      .then(({data})=> {
        console.log(':::::::::', data.access);
        if(!data.access) {
          setAccess(data.access)
          navigate('/');
        }
      })
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
         <Route path='/detail/:id' element={<Detail />}> </Route>
      </Routes>
   </div>
   );
}

export default App;
