import React from 'react';
import "../Pages/mainPage.css";

export const TableHeaderPortfolio = () => {
  return (
    <>
        <ul className="list-group list-group-horizontal justify-content-md-center" style={{paddingTop:"5%"}} >
          <li className="list-group-item col-1">#</li>
          <li className="list-group-item col-2">Symbol</li>
          <li className="list-group-item col-2">Price (USD)</li>
          <li className="list-group-item col-2">Quantity</li>
          <li className="list-group-item col-2">Total (USD) </li>
          <li className="list-group-item col-1">Delete</li>
        </ul>
    </>
  )
}
