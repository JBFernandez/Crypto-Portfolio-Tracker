import axios from "axios"

export const dbApi = axios.create({
    baseURL:"http://127.0.0.1:4000"
})

// TODO: Agregar interceptors para poner Token (JWT)

dbApi.interceptors.request.use( (config) => {
    // console.log(config);

    return config;

} )