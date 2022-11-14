import { useEffect, useState } from "react";
import DatosAxios from "../config/DatosAxios";

export const useCumpliFisa = (fecha, cliente) => {
  const [datosCumpli, setDatosCumpli] = useState([]);

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
          `/cumplimiento/atcl?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        
        const cumplimiento = data.map((cumpli) => {
          return {
            ...cumpli,
            icon: cumpli.indicador === "Meta Nivel de Servicio" ?  "fas fa-chart-pie" : null,
            estilo: cumpli.indicador === "Meta Nivel de Servicio" ?  "info-box-icon bg-primary elevation-1" : null
          }
        })
        setDatosCumpli(cumplimiento);
      } catch (error) {
        setDatosCumpli([]);
      }
    };
    DatosCumplimiento();
  }, [fecha, cliente]);
  return {
    datosCumpli
  };
};
