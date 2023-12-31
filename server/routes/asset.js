const { Router } = require("express");
const CryptoAsset = require("../models/CryptoAsset");

const router = Router();

router.post('/add', async( req, resp ) => {

    try {

             
        
        let assets = await CryptoAsset.find({ userId: req.body.userId });

        let result = [];

        result = assets.filter( ass => ass.id == req.body.id );


        if ( Object.keys(result).length > 0 ) {
            return resp.status(400).json({
                ok: false,
                message: "You already have this asset in your portfolio, edit in Portfolio tab"
            })
        }

        let asset = new CryptoAsset( req.body );

        await asset.save();




        return resp.status(200).json({
            asset: asset
        })
        
    } catch (error) {
        console.log(error);

        resp.status(500).json({
            message: "contact admin",
            error: error
        })
    }

}  );

router.post("/portfolio", async( req, resp ) => {

    try {

    const result = await CryptoAsset.find({ userId: req.body.userId });

    resp.status(200).json({
        ok: true,
        result
    })

        
    } catch (error) {

        console.log(error);
        resp.status(400).json({
            ok: false,
            error
        })
        
    }
} )

router.post("/portfolio/delete", async( req, resp ) => {

    try {
        
        const result = await CryptoAsset.deleteOne({ userId: req.body.userId, symbol: req.body.symbol });
        console.log(result);

        resp.status(200).json({
            ok: true,
            result
    })

        
    } catch (error) {

        console.log(error);
        resp.status(400).json({
            ok: false,
            error
        })
        
    }
} )


module.exports = router;