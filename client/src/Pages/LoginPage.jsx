import React from 'react';
import '../Pages/loginPage.css';
import { Link } from "react-router-dom";

export const LoginPage = () => {

  

  const register = (e) => {
    e.preventDefault();


      
  }



  return (
    <div className='login-container'  >

        <h1 id='title' className="badge text-bg alert alert-dark w-100" >
          Login
        </h1>

        <form  className='form'>

        <div className="mb-3">
            <label for="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="InputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="password1"/>
        </div>
      
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className='register-container' style={{paddingTop:"5%"}} >
          <div >Dont have an account  </div> <Link style={{paddingLeft:"1%"}} to={"/register"} > Register </Link>
        </div>
        
    </div>
  )
}
