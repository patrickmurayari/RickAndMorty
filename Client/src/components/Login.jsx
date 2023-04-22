import React from "react"; 
import { useState } from "react";
import style from '../styles/Login.module.css'
 
export default function Login({loginAccess}) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

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
            else if (!regex.test(inputs.email)) {
                errors.Email = "Debe ser un email valido"
            }
            else if (!regexPass.test(inputs.password)) {
                errors.password = "Debe ser un password valido"
            }
        return errors
        }

    function handleSubmit(e){
        e.preventDefault();
        const aux = Object.keys(errors)
        if (aux.length===0){
            loginAccess(inputs);
            setInputs({
                email:"",
                password:""
            })

            setErrors({
                email:"",
                password:""
            })
        } else {
            return alert("ERROR")
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
            <div>{errors.email}</div>
            <label>Password:</label>
            <input name="password" 
                   value={inputs.password} 
                   onChange={handleOnchage}>
            </input>
            <p>{errors.password}</p>
            {
                Object.keys(errors).length === 0 ? 
                (<button type= "submit">Ingresar</button>) 
                : (<div>Insert Info</div>)
            }
         </div>
        </form>
    )
}