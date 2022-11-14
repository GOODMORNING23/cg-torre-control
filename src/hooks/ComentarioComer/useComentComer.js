import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useComentComer = (fecha, cliente) => {
  const [datosComentComer, setDatosComentComer] = useState([]);

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
          `/comentario/comer?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosComentComer(data);
      } catch (error) {
        setDatosComentComer([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosComentComer,
  };
};