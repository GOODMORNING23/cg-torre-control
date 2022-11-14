import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useCumpliAFI = (fecha, cliente) => {
  const [datosCumpliAFI, setDatosCumpliAFI] = useState([]);

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
          `/cumplimiento/apoyoafi?cliente=${cliente}&fecha=${fecha}`,
          config
        );

        const cumplimiento = data.map((cumpli) => {
          return {
            ...cumpli,
            icon: cumpli.indicador === "Meta" ? "fas fa-chart-pie" : null,
            estilo:
              cumpli.indicador === "Meta"
                ? "info-box-icon bg-info elevation-1"
                : null,
            item: cumpli.indicador === "Meta" ? "%" : "%",
          };
        });
        setDatosCumpliAFI(cumplimiento);
      } catch (error) {
        setDatosCumpliAFI([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosCumpliAFI,
  };
};
