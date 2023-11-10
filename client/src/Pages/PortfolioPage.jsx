import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { TableHeader } from '../components/tableHeader'
import { useFetchDB } from '../hooks/useFetchDB'


export const PortfolioPage = () => {

  const {dbAssets, setDbAssets} = useFetchDB(1);

  console.log(dbAssets.data);

  



  return (
    <div className='main-container' >

        <NavBar />

        <TableHeader />




    </div>
  )
}
