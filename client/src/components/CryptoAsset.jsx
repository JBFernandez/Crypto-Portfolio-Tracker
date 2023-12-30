import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useSelector, useStore } from 'react-redux';
import { dbApi } from '../helpers/dbApi';
import Swal from "sweetalert2";


export const CryptoAsset = ( {asset} ) => {

  const {user} = useSelector( state => state.auth );


  // const [quantity, setQuantity] = useState("");
  const { form, handleChange }  = useForm({
    quantity: "",
  });
  const [portfolioAsset, setPortfolioAsset] = useState({
    id: "",
    userId: "",
    name: "",
    price:"",
    symbol:"",
    quantity: ""
  })


  useEffect(() => {
    setPortfolioAsset({
      id: asset.id,
      userId: user.id,
      name: asset.name,
      price: asset.price,
      symbol: asset.symbol,
      quantity: form.quantity
  });


  }, [form.quantity])
  


  const submit = async(e) => {
      e.preventDefault();
      
      try {

        const { data } = await dbApi.post("/main/add", portfolioAsset);

        
        Swal.fire({
          icon: 'success',
          title: data.asset.name,
          text: "Added to portfolio",
          timer: 1500
        })
        
      } catch (error) {
        console.log(error);

        Swal.fire({
          icon: 'error',
          title: error.response.data.message,
        })
      }

 }
 
  let price = 0;
  
  asset.price > 1? price = asset.price.toFixed(2) : price = asset.price.toFixed(5);

  return (
    <>
        <ul className="list-group list-group-horizontal justify-content-md-center"  >
          <li className="list-group-item col-1"> { asset.number } </li>
          <li className="list-group-item col-3"> { asset.name } </li>
          <li className="list-group-item col-3">$ { price } </li>
          <li className="list-group-item col-2"> <input className='form-control me-2' type="text" name="quantity" onChange={handleChange}  /> </li>
          <li className="list-group-item col-1"> <button className='btn btn-primary' onClick={ submit } > ADD </button> </li>
        </ul>
    </>
  )
}
