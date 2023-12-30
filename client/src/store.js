import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "../src/store/authSlice";
import { assetSlice } from "./store/assetSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        assets: assetSlice.reducer,
    }
})