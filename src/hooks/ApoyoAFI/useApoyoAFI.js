import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useApoyoAFI = (fecha, cliente) => {
  const [datosApoyoAFI, setDatosApoyoAFI] = useState([]);

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
          `/apoyoafi?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosApoyoAFI(data);
      } catch (error) {
        setDatosApoyoAFI([]);
      }
    };
    AtencionDatosFISA();
  }, [fecha, cliente]);

  return {
    datosApoyoAFI,
  };
};
