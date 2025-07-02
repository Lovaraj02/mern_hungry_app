import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {

        if (!email || !password) {
        alert("Please fill in all fields.");
        }
      const response = await fetch('http://localhost:8000/vendor/login',
        {method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({email,password})
        })
        const data = await response.json()
        if(response.ok){
          alert('login successful')
          navigate('/')
          setEmail('');
          setPassword('');
          localStorage.setItem('loginToken', data.token)
          console.log("login successfully",data.token)
        }


    } catch (error) {
      console.error(error)
    }   
  }
  return (
    <div className="loginSection">
      <form className="authForm" onSubmit={loginHandler}>
        <h3>Vendor Login</h3>
        <label>Email</label>
        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="enter your email"/><br />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password"/><br />
        <div className="btnSubmit">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
