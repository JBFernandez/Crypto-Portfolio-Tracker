const { response, request } = require("express")
const jwt = require("jsonwebtoken")

// TODO: JWT


const validateJwt = ( response, request ) => {

    



    jwt.verify( request )
    
}

module.exports = {
    validateJwt
}