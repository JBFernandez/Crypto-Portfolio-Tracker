const axios = require('axios');
const { Router } = require('express');  



const router = Router();

router.get('/', ( req, resp ) => {

    const assets = new Promise(async (resolve, reject) => {
        let response = null;
        try {
            response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${req.body.limit}`, {
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


module.exports = router;