import React from 'react'
import { Link } from 'react-router-dom'


export const PortfolioPage = () => {
  return (
    <div className='main-container' >

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" > <Link  className='nav-link active' to={"/main"}> { "Add user here:" } Portfolio </Link>  </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page"> <Link  className='nav-link active' to={"/main"}> Main </Link> </a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page"> <Link  className='nav-link active' to={"/login"}> Somewhere </Link> </a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page"> <Link  className='nav-link active' to={"/login"}> Logout </Link> </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>



    </div>
  )
}
