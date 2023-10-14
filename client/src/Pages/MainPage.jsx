import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CryptoAsset } from '../components/CryptoAsset'
import { NavBar } from '../components/NavBar'
import "../Pages/mainPage.css";
import { useFetchAssets } from '../hooks/useFetchAssets2';

export const MainPage = () => {


  
  const assets = useFetchAssets(1);

  console.log( assets );
  
  


  const coinMarketCap = (e) => {
    
    e.preventDefault();

    const url =  window.location.href = "https://coinmarketcap.com/"

  }


  return (
    <div className='main-container' >

        <NavBar />

         <p> Data provided by &nbsp;</p> <p className='coinGecko'   onClick={ coinMarketCap } >CoinMarketCap </p>

        <ul className="list-group list-group-horizontal justify-content-md-center" style={{paddingTop:"5%"}} >
          <li className="list-group-item  col-2">#</li>
          <li className="list-group-item col-2">Name</li>
          <li className="list-group-item col-2">Price (USD)</li>
          <li className="list-group-item col-2">Quantity</li>
          <li className="list-group-item col-2">Add</li>
        </ul>

        

        {/* <CryptoAsset number={ one.number } name={one.name} price={ one.price } /> */}
        {/* <CryptoAsset /> */}

        { assets.loading && <p className="alert alert-dark text-center " role="alert" > Loading... </p> }

      
        {
        assets.coins.map( asset => {
          return <CryptoAsset key={asset.number} asset={asset} />
        } ) }



    </div>
  )
}
