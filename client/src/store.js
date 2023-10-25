import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "../src/store/authSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
})