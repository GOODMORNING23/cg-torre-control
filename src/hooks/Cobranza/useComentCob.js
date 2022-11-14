import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useComentCob = (fecha, cliente) => {
  const [datosComentCob, setDatosComentCob] = useState([]);

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
          `/comentario/cobr?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosComentCob(data);
      } catch (error) {
        setDatosComentCob([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosComentCob,
  };
};