const { Router } = require("express");
const CryptoAsset = require("../models/CryptoAsset");

const router = Router();

router.post('/add', async( req, resp ) => {

    try {
        let asset = await CryptoAsset.findOne({ id: req.body.id });

        if (asset) {
            return resp.status(400).json({
                ok: false,
                message: "You already have this asset in your portfolio, edit in Portfolio tab"
            })
        }

        asset = new CryptoAsset( req.body );

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


module.exports = router;