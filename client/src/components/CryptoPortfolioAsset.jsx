import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useSelector, useStore } from 'react-redux';
import { dbApi } from '../helpers/dbApi';
import Swal from "sweetalert2";


export const CryptoPortfolioCoin = ( {coin} ) => {


  const clickDelete = (e) => {
    e.preventDefault();

    console.log( 'lo borrraste' );
      
  }
  


//   const submit = async(e) => {
//       e.preventDefault();
      
//       try {

//         const { data } = await dbApi.post("/main/add", portfolioAsset);

        
//         Swal.fire({
//           icon: 'success',
//           title: data.asset.name,
//           text: "Added to portfolio",
//           timer: 1500
//         })
        
//       } catch (error) {
//         console.log(error);

//         Swal.fire({
//           icon: 'error',
//           title: error.response.data.message,
//         })
//       }
//  }
 
  

  return (
    <>
        <ul className="list-group list-group-horizontal justify-content-md-center"  >
          <li className="list-group-item col-1"> { coin.number } </li>
          <li className="list-group-item col-2"> { coin.symbol } </li>
          <li className="list-group-item col-2">$ { coin.price } </li>
          <li className="list-group-item col-2"> { coin.quantity } </li>
          <li className="list-group-item col-2"> { (coin.quantity * coin.price).toFixed(2) } </li>
          <li className="list-group-item col-1"> <button className='btn btn-danger' onClick={ clickDelete } > Delete </button> </li>
        </ul>
    </>
  )
}
