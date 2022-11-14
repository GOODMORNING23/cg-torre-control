import { useEffect, useState } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useCumpliCobr = (fecha, cliente) => {
  const [datosCumpliCobr, setDatosCumpliCobr] = useState([]);

  useEffect(() => {
    const DatosCumplimiento = async () => {
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
          `/cumplimiento/cobr?cliente=${cliente}&fecha=${fecha}`,
          config
        );

        const pronostico = data.filter(item => item.indicador === "Pronostico")[0]
        
        const cumplimiento = data.map((cumpli) => {
          return {
            ...cumpli,
            icon: cumpli.indicador === "Meta Monto Recuperado (miles)" || cumpli.indicador === "Pronostico" ?  "fas fa-chart-pie" : null,
            estilo: cumpli.indicador === "Meta Monto Recuperado (miles)" || cumpli.indicador === "Pronostico" ?  "info-box-icon bg-info elevation-1" : null,
            pronostico: cumpli.indicador === "Cumplimiento" ? pronostico.valor : null,
            item: cumpli.indicador === "Meta Monto Recuperado (miles)" ? "$" : "%",
          }
        })
        
        setDatosCumpliCobr(cumplimiento);
      } catch (error) {
        setDatosCumpliCobr([]);
      }
    };
    DatosCumplimiento();
  }, [fecha, cliente]);
  return {
    datosCumpliCobr
  };
};
