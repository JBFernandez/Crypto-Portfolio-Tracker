import { useEffect, useState } from "react"
import { coinMarketCapApi } from "../helpers/api";


export const useFetchAssets = (load) => {
    
    const [assets, setAssets] = useState([]);

    const getAsset = async() => {
        try {
            const {data} = await coinMarketCapApi.post("/coinmarketcap/", {
                data: { "limit": "10" }
            });
    

        let number = 1;

        // const assets = data.map( coin => {
        // return {
        //     number: number++,
        //     id: coin.id,
        //     name: coin.name,
        //     symbol: coin.symbol,
        //     price: coin.current_price,
        //     }
        // } )
        console.log(data);
        // return assets;
        } catch (error) {
        }
    }

    useEffect(() => {

        // getAsset(1).then( resp => {
        //     setAssets({
        //         coins: resp,
        //         loading: false
        //     })
        // } ).catch( error => {
        //     console.log(error);
        // } );
    
      
    }, [load])
    
    
    


    // return assets

}
