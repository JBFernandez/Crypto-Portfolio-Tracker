import { useEffect, useState } from "react"
import { dbApi } from "../helpers/dbApi";
import { useSelector } from "react-redux";
import { useAssestsDbStore } from "./useAssetsDbStore";

const initialState = {
    loading: true,
    data:{

    }
}

export const useFetchPrices = (update ) => {
    
    const [assetsPrice, setAssetsPrice] = useState(initialState);
    const { startLoadingAssets, startAddPrice, coins, loading } = useAssestsDbStore();


    // let fetchAssets = assets.data;

    // if ( JSON.stringify( fetchAssets ) === '{}' ) {
    //     return
    // }

    // console.log(assets);

    // console.log( coins );

    const getAssetsPrices = async() => {

        try {

            // console.log('aqui arriba');

            const { data } = await dbApi.post("/coinmarketcap/prices", 
                // assets.data
                coins
             )

            let prices = {};

            
            Object.keys( data.data ).forEach( (key) => {

                prices[key] = data.data[key][0].quote.USD.price;
            
            } )

            // console.log( prices );


            // const prices = 

            // const assetSymbol = result.data.result.map( (asset) => {
            //     return {
            //         symbol: asset.symbol,
            //         quantity: asset.quantity.$numberDecimal
            //     }
            // } )

            // console.log(assetSymbol);

            // return assetSymbol;
            return prices;
            
        } catch (error) {
            console.log(error);
            console.log('error');

        }      
        
    }    
    
    useEffect(() => {

        // console.log('el useEffect');
        // getAssetsPrices().then( resp => {
        //     console.log( resp );
        //     console.log('Aqui dentro de useEff');
        // } ).catch(  error => {
        //     console.log(error);
        // } );
        

        getAssetsPrices().then( resp => {

            setAssetsPrice({
                loading: false,
                data: resp
            })

            startAddPrice( resp );

        } ).catch( error => {
            console.log(error);
        } )     


    }, [update]);

    return {
        assetsPrice,
    
    }
    



}