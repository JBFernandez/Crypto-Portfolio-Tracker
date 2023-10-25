import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const CryptoAsset = ( {asset} ) => {

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
      name: asset.name,
      price: asset.price,
      symbol: asset.symbol,
      quantity: form.quantity
  });


  }, [form.quantity])
  


  const submit = (e) => {
      e.preventDefault();      

    console.log( portfolioAsset );      
 }
 
  let price = 0;
  
  asset.price > 1? price = asset.price.toFixed(2) : price = asset.price.toFixed(5);

  return (
    <>
        <ul className="list-group list-group-horizontal justify-content-md-center"  >
          <li className="list-group-item col-2"> { asset.number } </li>
          <li className="list-group-item col-2"> { asset.name } </li>
          <li className="list-group-item col-2">$ { price } </li>
          <li className="list-group-item col-2"> <input type="text" name="quantity" onChange={handleChange}  /> </li>
          <li className="list-group-item col-2"> <button onClick={ submit } > ADD </button> </li>
        </ul>
    </>
  )
}
