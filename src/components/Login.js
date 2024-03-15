import React from 'react';
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { userContext } from "../context/contextprovider";
import { Link } from "react-router-dom";


function Login() {
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [redirect,setRedirect]=useState(false);
  const {setUserInfo} = React.useContext(userContext);
  const [role,setRole] = useState("client");




  const login=async(e)=>{
    e.preventDefault();
    const response=await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/user/login',{
    method:'POST',
    body:JSON.stringify({email,password}),
    headers:{'Content-Type':'application/json'},
    credentials:'include',
    });

    const Data = await response.json();
    const data = Data.data;

    

    if(response.ok){
        setRole(data.role);
        setUserInfo(data.username);
        setRedirect(true);
    }
    else{
      alert("Wrong credentials");
    }
  }

  

  if(redirect===true){
    
    if(role === "dealer"){
      return <Navigate to ={'/dealerdetails'}/>
    }
    else{
      return <Navigate to ={'/cars'}/>
     }
  }

  return (
    <div className="login">
    <div className="container mt-5">
    <div className="row">
    <div className="col-12">
    <h2 className="login d-flex justify-content-center">Login</h2>
    <form onSubmit={login}>
    <div class="mb-3">
      <label for="exampleInputEmail1" className="form-label d-flex justify-content-center"  >Email address</label>
      <input type="email" className="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <div id="emailHelp" className="form-text d-flex justify-content-center">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label d-flex justify-content-center">Password</label>
      <input type="password" className="form-control" required="true" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <div className="d-flex justify-content-center">
      <Link to="/changepassword">Change Password</Link>
      </div>
      </div>
    <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary mb-2 mt-3">Login</button>
    </div>
    <div className="d-flex justify-content-center">
    <h6 style={{color:"teal"}}>Please register first if don't have account.</h6>
    </div>
  </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Login;
