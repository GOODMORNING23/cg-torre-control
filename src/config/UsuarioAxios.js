import axios from "axios"

const UsuarioAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_LOGIN_SERVICE}/auth`
})

export default UsuarioAxios;