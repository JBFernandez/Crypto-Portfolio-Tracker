const express = require('express');
const cors = require("cors");
require('dotenv').config();


const app = express();


app.use( cors() );
app.use(express.json());


app.get('/', ( req, resp ) => {
    console.log("get en 4000/");
    resp.json({
        ok: true
    })
} );

app.use('/coinmarketcap', require( './routes/coinmarketcap' ))

app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
} );