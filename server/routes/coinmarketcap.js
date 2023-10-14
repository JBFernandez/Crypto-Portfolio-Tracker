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


module.exports = router;