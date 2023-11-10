import React from 'react';
import "../Pages/mainPage.css";

export const TableHeader = () => {
  return (
    <>
        <ul className="list-group list-group-horizontal justify-content-md-center" style={{paddingTop:"5%"}} >
          <li className="list-group-item  col-2">#</li>
          <li className="list-group-item col-2">Name</li>
          <li className="list-group-item col-2">Price (USD)</li>
          <li className="list-group-item col-2">Quantity</li>
          <li className="list-group-item col-2">Add</li>
        </ul>
    </>
  )
}
