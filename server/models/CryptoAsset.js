const mongoose = require('mongoose');

const CryptoAssetSchema = mongoose.Schema({
    id:{ type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }, 
      price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
      },
      symbol: {
        type: String,
        required: true
      },
      quantity: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
      }
    }
)

module.exports = mongoose.model( 'cryptoAsset', CryptoAssetSchema );
