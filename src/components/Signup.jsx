import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from './api';


const Signup = ()=>{

    const navigate = useNavigate();
    const [formData,setFormData] = useState({username:'',email:'',password:''})
    const handleForm = (e)=>{
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const { username, email, password } = formData;

        // Check if any field is empty
        if (!username || !email || !password) {
        alert("Please fill in all fields.");
        }
           const result = await axios.post(`${api}/vendor/register`,formData);
           
           console.log("registered successfully",result.data) 
           alert("Registered successfully")
           navigate('/login')
           setFormData({username:'',email:'',password:''})
        } catch (error) {
            console.error("Registration Failed", error);
        }
    }

    return(
        <>
        <div className="rigisterBody">
            <form className="form" onSubmit={handleSubmit}>
                <div className="username">
                    <h3>Register</h3>
                    <div className="bt"onClick={()=> navigate('/login')}>🫱Go to Login</div>
                </div>
                <div className="username">
                    <label>User name</label>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={handleForm} 
                        value={formData.username} 
                        placeholder="Enter user name"
                    />
                </div>

                <div className="username">
                    <label>Email</label>
                    <input  
                        type="text" 
                        name="email" 
                        value={formData.email}
                        onChange={handleForm} 
                        placeholder="Enter Email"
                    />
                </div>

                <div className="username">
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        onChange={handleForm}
                        value={formData.password} 
                        placeholder="Enter Password"
                    />
                </div>

                <div className="username">
                    <button className="btn" type="submit">submit</button>
                    
                </div>
                
            </form>
        </div>
        </>
    )
}
export default Signup;
