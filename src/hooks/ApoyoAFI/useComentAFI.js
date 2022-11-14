import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useComentAFI = (fecha, cliente) => {
  const [datosComentAFI, setDatosAFI] = useState([]);

  useEffect(() => {
    const Comentarios = async () => {
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
          `/comentario/apoyoafi?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosAFI(data);
      } catch (error) {
        setDatosAFI([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosComentAFI,
  };
};