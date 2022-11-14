import { useState, useEffect } from "react";
import DatosAxios from "../config/DatosAxios";

export const useCobr = (fecha, cliente) => {
  const [datosCobr, setDatosCobr] = useState([]);
  useEffect(() => {
    const CobranzaDatos = async () => {
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
          `/cobranza?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosCobr(data);
      } catch (error) {
        setDatosCobr([]);
      }
    };
    CobranzaDatos();
  }, [fecha, cliente]);

  return {
    datosCobr,
  };
};
