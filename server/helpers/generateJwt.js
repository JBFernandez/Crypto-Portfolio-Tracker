const jwt = require("jsonwebtoken");


const generateJwt = ( uid, name ) => {

    return new Promise( ( resolve, reject ) => {

        jwt.sign( { uid, name }, process.env.SECRET_KEY, {
            expiresIn: "2h"
        }, (err, token) => {
            
            if(err) {
                console.log(err);
                reject(err);
            }

            resolve( token );
    
        } )
    

    } ) 

    
    
}

module.exports = {
    generateJwt
}