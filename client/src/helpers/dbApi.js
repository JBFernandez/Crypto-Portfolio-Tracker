import axios from "axios"

export const dbApi = axios.create({
    baseURL:"http://127.0.0.1:4000"
})