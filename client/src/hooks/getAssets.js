import { useEffect, useState } from "react"


export const getAssets = (load) => {

    const [assets, setAssets] = useState([

    ]);

    useEffect(() => {
      
        setAssets([
            {
             number: 1,
             name: "Hola",
             price: 12
            },
            {
             number: 2,
             name: "Como",
             price: 14
         } ])
    
      
    }, [load])
    
    
    


    return assets

}

