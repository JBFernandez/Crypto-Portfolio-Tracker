import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CryptoAsset } from '../components/CryptoAsset'
import { NavBar } from '../components/NavBar'
import "../Pages/mainPage.css";
import { useFetchAssets } from '../hooks/useFetchAssets';

export const MainPage = () => {


  
  const assets = useFetchAssets(1);

  console.log( assets.coins );
  
  


  const coinGecko = (e) => {
    
    e.preventDefault();

    const url =  window.location.href = "https://www.coingecko.com/"

  }


  return (
    <div className='main-container' >

        <NavBar />

         <p> Data provided by &nbsp;</p> <p className='coinGecko'   onClick={ coinGecko } >CoinGecko </p>

        <ul className="list-group list-group-horizontal justify-content-md-center" style={{paddingTop:"5%"}} >
          <li className="list-group-item  col-2">#</li>
          <li className="list-group-item col-4">Name</li>
          <li className="list-group-item col-4">Price</li>
        </ul>

        

        {/* <CryptoAsset number={ one.number } name={one.name} price={ one.price } /> */}
        {/* <CryptoAsset /> */}

        
        {/* {
        assets.coins.map( asset => {
          return <CryptoAsset key={asset.number} asset={asset} />
        } ) } */}



    </div>
  )
}
