import { useEffect, useState } from "react"
import { dbApi } from "../helpers/dbApi";
import { useSelector } from "react-redux";

const initialState = {
    loading: true,
    data:{

    }
}

export const useFetchDB = (load) => {
    
    const [dbAssets, setDbAssets] = useState(initialState);

    const { user } = useSelector( state => state.auth );

    const getPortfolioAssets = async() => {

        try {

            const result = await dbApi.post("/main/portfolio", {
                userId: user.id
            } )

            const assetSymbol = result.data.result.map( (asset) => {
                return {
                    symbol: asset.symbol,
                    quantity: asset.quantity.$numberDecimal
                }
            } )

            return assetSymbol;
            
        } catch (error) {
            console.log(error);
        }      
        
    }    
    
    useEffect(() => {

        getPortfolioAssets().then( resp => {

            setDbAssets({
                loading: false,
                data: resp
            })


        } ).catch( error => {
            console.log(error);
        } )     


    }, [load]);

    return {
        dbAssets,
    
    }
    



}