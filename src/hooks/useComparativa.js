import { useState, useEffect } from 'react';
import DatosAxios from '../config/DatosAxios';

export const useComparativa = ( fecha ) => {
    const [comparativo, setComparativo] = useState([]);
    const [comparativoCobr, setComparativoCobr] = useState([]);

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
          const { data } = await DatosAxios(`/comparativo/atcl?fecha=${fecha}`, config);
          const { data1 } = await DatosAxios(`/comparativo/cobr?fecha=${fecha}`, config);
          setComparativo(data);
          setComparativoCobr(data1);
        } catch (error) {
          setComparativo([]);
        }
      };
      ComparativaCampanias();
    }, [fecha]);

  
    return {
        comparativo,
        comparativoCobr,
    };
}
