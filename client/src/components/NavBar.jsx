import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./navBar.css";
import { useAssestsDbStore } from '../hooks/useAssetsDbStore';

export const NavBar = () => {
  
  const { startLoadingAssets, coins, loading } = useAssestsDbStore();
  const navigate = useNavigate();

  const navBarClick = async(e) => {
      e.preventDefault();
      
      navigate(`/${e.target.id}`);      

  }

  const portfolioClick = async(e) => {
    e.preventDefault();
    
    await startLoadingAssets();

    navigate(`/${e.target.id}`);      

}

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Crypto Tracker</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id='portfolio' onClick={portfolioClick}  className="nav-link active" aria-current="page"> Porfolio </a>
                </li>
                <li className="nav-item">
                <a id='main' onClick={navBarClick} className="nav-link active" aria-current="page"> Main Page </a>
                </li>
                <li className="nav-item">
                <a id='login' onClick={navBarClick} className="nav-link active" aria-current="page"> logout </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

    </>
  )
}
