import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import "./SignUpForm.css"
import axios from 'axios';

const SignUpForm = ({toggle,closeModel}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const body = {
                name,email,password
            }
            const response = await axios.post('http://localhost:8000/api/admin/user-register',body,{
                headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                }
            })
            const data = response.data;
            setMessage(data.message)
        }catch(err){
            console.log({error:err?.response?.data?.message});
        }
    }

    if(!toggle){
        return null
    }else{
        return createPortal(
            <div className='signUp-container'>
                <div className='signUp-form'>
                    <h1>Sign Up</h1>
                    <p style={{color:"red",textAlign:"center",marginBottom:"1rem"}}>{message}</p>
                     <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            onChange={(e)=>setName(e.target.value)} 
                            name="name" 
                            placeholder='enter your full name'
                        />
                        <input
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)} 
                            name="email" 
                            placeholder='enter your email'
                         />
                        <input 
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)} 
                            name="password"
                            placeholder='enter your password'
                        />
                        <input type="submit" value="Sign Up"/>
                     </form>
                     <div onClick={closeModel} className='signUp-form-close'>
                         <FontAwesomeIcon icon={faTimes}/>
                     </div>
                </div>
                 
            </div> 
            ,
            document.getElementById('signUp')
         );
    }
}

export default SignUpForm;
