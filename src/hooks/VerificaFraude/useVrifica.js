import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useVerifica = (fecha) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const datosVerifica = async () => {
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
          `/verificacionFraude?fecha=${fecha}`,
          config
        );
        setDatos(data);
      } catch (error) {
        setDatos([]);
      }
    };
    datosVerifica();
  }, [fecha]);

  return {
    datos,
  };
};
