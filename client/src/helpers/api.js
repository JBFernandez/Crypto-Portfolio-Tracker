import axios from "axios";


export const coinMarketCapApi = axios.create({
    baseURL:"http://127.0.0.1:4000",
    });