import { useState, useEffect, createContext } from "react";
import DatosAxios from "../config/DatosAxios";

const DTSContext = createContext();

const DTSProvider = ({children}) => {
    
    const [datos, setDatos] = useState({});
    
    useEffect(() =>{
        const datosConcentrados = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const fecha = '2022-06-19'

            try {
                const { data } = await DatosAxios(`/dtsConcentrados/FISA?fecha=${fecha}`,config)
                setDatos(data)
            } catch (error) {
                setDatos({})
            }
        }
        datosConcentrados()
    }, [])

    return (
        <DTSContext.Provider
            value={{
                datos,
                setDatos
            }}
        >
            {children}
        </DTSContext.Provider>
    )
}

export {
    DTSProvider
}

export default DTSContext;