const axios = require('axios');
const { Router } = require('express');  



const router = Router();

router.post('/', ( req, resp ) => {

    const assets = new Promise(async (resolve, reject) => {
        let response = null;
        console.log(req.body.data.limit);
        try {
            response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${req.body.data.limit}`, {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.APIKEY,
            },
            });
        } catch(ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
        }
        if (response) {
            // success
            const json = response.data;
            // console.log(json);
            resolve(json);
        }
        });    

    assets.then( (data) => 
    resp.json({
        data: data.data
    }) ).catch( (err) => console.log(err) );
    
} )

router.post( '/prices', ( req, resp ) => {


    const assetPrices = new Promise(async (resolve, reject) => {
        let response = null;
        let assetsInfo = req.body;

        // let assetsInfo = [];

        // if (  JSON.stringify(req.body) === '{}' ) {
        //     return
        // } else {
        //     assetsInfo = req.body
        // }

        console.log( assetsInfo );

        try {

            let assets = assetsInfo.map( (asset) => {
                return asset.symbol            
            } );

            response = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${assets.toString()}`, {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.APIKEY,
            },
            });
        } catch(ex) {
            response = null;
            // error
            reject(ex);
        }
        if (response) {
            // success
            resolve(response.data);
        }
        });    

    assetPrices.then( (data) => 
    resp.json({
        data: data.data
    }) ).catch( (err) => {
        console.log(err);
        resp.status(400).json( err )
    } );



} )


module.exports = router;