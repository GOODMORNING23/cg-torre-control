import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useComentRed = (fecha, cliente) => {
  const [datosComentRed, setDatosRed] = useState([]);

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
          `/comentario/apoyored?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosRed(data);
      } catch (error) {
        setDatosRed([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosComentRed,
  };
};