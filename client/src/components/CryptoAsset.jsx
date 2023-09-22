import React from 'react'

export const CryptoAsset = ( {asset} ) => {

  return (
    <>
        <ul className="list-group list-group-horizontal justify-content-md-center"  >
          <li className="list-group-item  col-2"> { asset.number } </li>
          <li className="list-group-item col-4"> { asset.name } </li>
          <li className="list-group-item col-4">{ asset.price }</li>
        </ul>
    </>
  )
}
