import { useState, useEffect } from "react";
import DatosAxios from "../config/DatosAxios";

export const useATCFisa = (fecha, cliente) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const AtencionDatosFISA = async () => {
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
          `/atencionclientes?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatos(data);
      } catch (error) {
        setDatos([]);
      }
    };
    AtencionDatosFISA();
  }, [fecha, cliente]);

  return {
    datos,
  };
};
