import { useEffect, useState } from "react"
import { coinMarketCapApi } from "../helpers/api";


export const useFetchAssets = (load) => {

    const [assets, setAssets] = useState({
        coins: [],
        loading: true,
    });

    const getAsset = async() => {
        try {
            const {data} = await coinMarketCapApi.post("/coinmarketcap/", {
                data: { 
                    limit: 10 
                }
            });


        const assets = data.data.map( coin => {

            return {
                number: coin.cmc_rank,
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol,
                price: coin.quote.USD.price,
            }
        } );
        return assets;
        } catch (error) {
        }
    }

    useEffect(() => {

        getAsset().then( resp => {
            setAssets({
                coins: resp,
                loading: false
            })
        } ).catch( error => {
            console.log(error);
        } );
    
      
    }, [load])
    
    
    


     return assets

}
