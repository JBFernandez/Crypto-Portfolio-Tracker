import {createSlice } from "@reduxjs/toolkit";

export const assetSlice = createSlice({
    name: 'assets',
    initialState: {
        loading:"",
        coins:[ 
        ]      
    },
    reducers: {
        onCheckingAsset: ( state ) => {
            state.loading = true;
        },
    
        onLoadAssets: ( state, { payload } ) => {
            state.loading = false;
            state.coins =  payload ;
        },

        onAddprice: ( state,  {payload}  ) => {
            state.loading = false;
            state.coins = state.coins.map( (coin) => {
                let price = 0;
                payload[coin.symbol] > 1? price = payload[coin.symbol].toFixed(2) : price = payload[coin.symbol].toFixed(5);
                return {
                    ...coin,
                    price: price
                    // price: payload[coin.symbol]
                }
            } )
        },

        onDeleteAsset: ( state,  {payload}  ) => {
            state.loading = false;
            state.coins = state.coins.filter( (coin) => coin.symbol !== payload  )
            
        }


    
        // onLogout: ( state, { payload } ) => {
        //     state.status = 'not-authenticated';
        //     state.user = {};
        //     state.errorMessage = payload;
        // },
    
        // clearErrorMessage: ( state ) => {
        //     state.errorMessage = undefined;
        // }
    
    }
  })

  export const { onCheckingAsset, onLoadAssets, onAddprice, onDeleteAsset } = assetSlice.actions;