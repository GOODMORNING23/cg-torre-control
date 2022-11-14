import { useEffect, useState } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useEficiencia = (empresa, canal, fecha1, fecha2) => {
  const [datosEficiencia, setDatosEficiencia] = useState([]);

  useEffect(() => {
    const DatosEficiencia = async () => {
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
        const { data } = await DatosAxios(
          `/eficienciamarcador?empresa=${empresa}&canal=${canal}&fecha1=${fecha1}&fecha2=${fecha2}`,
          config
        );

        console.log(data);
        
        setDatosEficiencia(data);
      } catch (error) {
        setDatosEficiencia([]);
      }
    };
    DatosEficiencia();
  }, [empresa, canal, fecha1, fecha2]);
  return {
    datosEficiencia
  };
};
