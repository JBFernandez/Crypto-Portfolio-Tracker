import React from 'react';
import '../Pages/loginPage.css';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';

const initialForm = {
  email:"",
  password:""
}


export const LoginPage = () => {

  const { form, handleChange } = useForm(initialForm);
  const { startLogin } = useAuthStore()

  

  const register = (e) => {
    e.preventDefault();

    startLogin( form.email, form.password );



    


      
  }



  return (
    <div className='login-container'  >

        <h1 id='title' className="badge text-bg alert alert-dark w-100" >
          Login
        </h1>

        <form onChange={ handleChange }  className='form'>

        <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">Email address</label>
            <input type="email" name='email'  className="form-control" id="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">Password</label>
            <input type="password" name='password' className="form-control" id="password"/>
        </div>
      
        <div className="mb-3 form-check">
        </div>
        <button onClick={ register } type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className='register-container' style={{paddingTop:"5%"}} >
          <div >Dont have an account  </div> <Link style={{paddingLeft:"1%"}} to={"/register"} > Register </Link>
        </div>
        
    </div>
  )
}
