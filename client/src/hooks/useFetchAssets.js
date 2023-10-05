import { useEffect, useState } from "react"
import { coinGeckoApi } from "../helpers/api";


export const useFetchAssets = (load) => {
    
    const [assets, setAssets] = useState([]);

    const getAsset = async() => {
        try {
            const {data} = await coinGeckoApi.get("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&precision=5");
    

        let number = 1;

        const assets = data.map( coin => {
        return {
            number: number++,
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            price: coin.current_price,
            }
        } )
        console.log(assets);
        return assets;
        } catch (error) {
        }
    }

    useEffect(() => {

        getAsset(1).then( resp => {
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
