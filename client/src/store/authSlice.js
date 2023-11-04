import {createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: "",
      user: {},
      errorMessage: undefined
    },
    reducers: {
        OnChecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
           },
    
           onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = {
              name: payload.name,
              id: payload.id || payload._id
            };
            state.errorMessage = undefined;
           },
    
           onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
           },
    
           clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
           }
    
        }
  })

  export const { OnChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;
  