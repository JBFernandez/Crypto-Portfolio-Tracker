import React, { useEffect, useState } from 'react'
import '../Pages/loginPage.css'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux'
import { OnChecking, onLogin } from '../store/authSlice';
import { useAuthStore } from '../hooks/useAuthStore';
import Swal from 'sweetalert2';


const initialForm = {
  name: "",
  email: "",
  password: "",
  password2: ""
}


export const RegisterPage = () => {


  const { form, handleChange }  = useForm(initialForm);
  const dispatch = useDispatch();


  const { status, user, startRegister } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    startRegister( form.name, form.email, form.password  );


  }

  
  
  
  return (
      
    <div className='login-container'  >

        <h1 id='title' className="badge text-bg alert alert-dark w-100" >
          Register
        </h1>
        <form  className='form'>
        <div className="mb-3">
            <label htmlFor="InputName" className="form-label">Name</label>
            <input type="name" name='name' onChange={ handleChange } className="form-control" id="name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' onChange={ handleChange }  className="form-control" id="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">Password</label>
            <input type="password" name='password' onChange={handleChange} className="form-control" id="password1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="InputPassword2" className="form-label">Confirm Password</label>
            <input type="password" name='password2' onChange={ handleChange }  className="form-control" id="password2"/>
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" onClick={ handleSubmit } className="btn btn-primary">Submit</button>
        </form>

        <div className='register-container' style={{paddingTop:"5%"}} >
          <div >Already have an account  </div> <Link style={{paddingLeft:"1%"}} to={"/login"} > Login </Link>
        </div>

    </div>


  )
}
