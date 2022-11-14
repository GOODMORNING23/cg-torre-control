import { useState, useEffect } from 'react';
import DatosAxios from '../config/DatosAxios';

export const useCompCobr = ( fecha ) => {
    const [datosCompCobr, setdatosCompCobr] = useState([]);

    useEffect(() => {
      const ComparativaCampanias = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
  
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
  
        try {
          const { data } = await DatosAxios(`/comparativo/cobr?fecha=${fecha}`, config);
          
          setdatosCompCobr(data);

        } catch (error) {
            setdatosCompCobr([]);
        }
      };
      ComparativaCampanias();
    }, [fecha]);

  
    return {
        datosCompCobr,
    };
}