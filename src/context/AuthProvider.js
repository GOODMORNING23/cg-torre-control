import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom"
import UsuarioAxios from "../config/UsuarioAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate()

    useEffect(() =>{
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await UsuarioAxios('/perfil', config)
                setAuth(data)
                navigate('/home')
            } catch (error) {
                setAuth({})
            }

            setCargando(false)
        }
        autenticarUsuario()
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth, 
                cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;