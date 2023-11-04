const { Router } = require('express');
const User = require('../models/User');
const CryptoAsset = require('../models/CryptoAsset');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/generateJwt');

const router = Router();


router.post('/register', async( req, resp ) => {


    const { name, email, password }  = req.body;
    const salt = bcrypt.genSaltSync(10);
    const userPassword = bcrypt.hashSync( password, salt );


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
            password: userPassword
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

        const token = await generateJwt("afkajsdkl8923848", "cocorock");

        if ( bcrypt.compareSync( req.body.password, user.password ) ) {
            return resp.status(200).json({
                token: token,
                ok: true,
                id: user._id,
                name: user.name
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

} );

module.exports = router;

