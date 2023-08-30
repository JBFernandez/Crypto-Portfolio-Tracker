import React from 'react'
import '../Pages/loginPage.css'

export const RegisterPage = () => {
  return (
      
    <div className='login-container'  >

        <h1 id='title' className="badge text-bg-primary w-100" >
          Register
        </h1>
        <form  className='form'>
        <div className="mb-3">
            <label for="InputName" className="form-label">Name</label>
            <input type="name" className="form-control" id="name"/>
        </div>
        <div className="mb-3">
            <label for="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="InputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="password1"/>
        </div>
        <div className="mb-3">
            <label for="InputPassword2" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password2"/>
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>


  )
}
