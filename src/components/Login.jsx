import React from "react"; 
import { useState } from "react";
import style from '../styles/Login.module.css'
 
export default function Login({loginAccess}) {
    // const Email = "pgmail.com@"
    // const Password = "@Patr123"

    const [inputs,setInputs] = useState({
        email: "",
        password: ""
    })

    const [errors,setErrors] = useState({
        email:"",
        password:""
    })

    
    function handleOnchage (event){
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
        
        setErrors(
            Validate({
                ...inputs,
                [event.target.name] : event.target.value 
            })
            )
        }


        function Validate(inputs){
            const errors= {};
            if (!inputs.email) {
                errors.Email ="Debe ingresar un email"
            }else if(!inputs.password) {
                errors.password="Debe ingresar un password"
            }
        return errors
        }

    function handleSubmit(e){
        e.preventDefault();
        const aux = Object.keys(errors)
        if (aux.length===0){
            setInputs({
                email:"",
                password:""
            })

            setErrors({
                email:"",
                password:""
            })
            alert("Bienvenido a RICK AND MORTY");
            loginAccess();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
         <div className={style.login}>
            <label>Email:</label>
            <input name="email" 
                   value={inputs.email} 
                   onChange={handleOnchage}>
            </input>
            <label>Password:</label>
            <input name="password" 
                   value={inputs.password} 
                   onChange={handleOnchage}>
            </input>
            {
                Object.keys(errors).length === 0 ? 
                (<button type= "submit">Ingresar</button>) 
                : (<div>Insert Info</div>)
            }
         </div>
        </form>
    )
}