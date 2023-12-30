import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { TableHeader } from '../components/tableHeader'
import { useFetchDB } from '../hooks/useFetchDB'
import { useFetchPrices } from '../hooks/useFetchPrices'
import { useAssestsDbStore } from '../hooks/useAssetsDbStore'
import { TableHeaderPortfolio } from '../components/TableHeaderPorfolio'
import { CryptoPortfolioCoin } from '../components/CryptoPortfolioAsset'


export const PortfolioPage = (  ) => {

  
  // const { dbAssets } = useFetchDB(1);

  // console.log(dbAssets);

  // const [assets, setAssets] = useState(dbAssets);

  
  // useFetchPrices( 2 );

  // let x = Object.keys(dbAssets.data).length !== 0;

  const { startLoadingAssets, coins, loading } = useAssestsDbStore();

  const { assetsPrice }  = useFetchPrices( 2 );


  return (
    <div className='main-container' >

        <NavBar />

        <TableHeaderPortfolio />

        {/* { loading && <p className="alert alert-dark text-center " role="alert" > Loading... </p> } */}

        {
          coins.map( coin => {
          return <CryptoPortfolioCoin key={coin.number} coin={coin} />
        } ) }




    </div>
  )
}
