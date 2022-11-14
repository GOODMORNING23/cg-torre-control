import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useComentOtorg = (fecha, cliente) => {
  const [datosComentOtor, setDatosComentOtor] = useState([]);

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
          `/comentario/otorg?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosComentOtor(data);
      } catch (error) {
        setDatosComentOtor([]);
      }
    };
    AtencionDatosFISA();
  }, [fecha, cliente]);

  return {
    datosComentOtor,
  };
};
