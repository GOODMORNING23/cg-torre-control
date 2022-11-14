import { useState, useEffect } from "react";
import DatosAxios from "../config/DatosAxios";

export const useComentario = (fecha, cliente) => {
  const [datosComent, setDatosComent] = useState([]);

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
          `/comentario/atcl?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        setDatosComent(data);
      } catch (error) {
        setDatosComent([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosComent,
  };
};

