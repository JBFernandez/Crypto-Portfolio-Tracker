const { Router } = require('express');
const User = require('../models/User');
const CryptoAsset = require('../models/CryptoAsset');

const router = Router();


router.post('/register', async( req, resp ) => {


    const { name, email, password }  = req.body;

    try {

        let user = await User.findOne({ email: email });

        if (user) {
            return resp.status(400).json({
                ok: false,
                message: "User already exists in DB"
            })
        }

       user = new User( {
            name: name,
            email: email,
            password: password
       } );

        let saved = await user.save();

        return resp.status(200).json({
            ok: true,
            resp: saved
        })

        
    } catch (error) {
     console.log(error);   
    }


}  );

router.post('/login', async( req, resp ) => {


    try {

        let user = await User.findOne({ email: req.body.email });


        if (!user) {
            return resp.status(200).json({
                ok: false,
                message: "Incorrect username or password 1"
            })
        }

        if ( user.password == req.body.password ) {
            return resp.status(200).json({
                token: "xxxx",
                ok: true,
                id: resp._id
            })
        } else {
            return resp.status(400).json({
                ok: false,
                message: "Incorrect username or password 2"
            })
        }
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            message: "contact admin"
        })
    }

} )

router.post('/main', async( req, resp ) => {

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
            message: "contact admin"
        })
    }



    

    


}  );


module.exports = router;