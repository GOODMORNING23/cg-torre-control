import { useEffect, useState } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useCumpliComer = (fecha, cliente) => {
  const [datosCumpliComer, setDatosCumpliComer] = useState([]);

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
          `/cumplimiento/comer?cliente=${cliente}&fecha=${fecha}`,
          config
        );

        
        const cumplimiento = data.map((cumpli) => {
          return {
            ...cumpli,
            icon: cumpli.indicador === "Meta Monto Colocado" || cumpli.indicador === "Pronostico" || cumpli.indicador === "Meta" ?  "fas fa-chart-pie" : null,
            estilo: cumpli.indicador === "Meta Monto Colocado" || cumpli.indicador === "Pronostico" || cumpli.indicador === "Meta" ?  "info-box-icon bg-info elevation-1" : null,
            pronostico: cumpli.indicador === "Cumplimiento" ? data.filter(item => item.indicador === "Pronostico" && item.indicador_tabla === cumpli.indicador_tabla)[0].valor : null,
            item: cumpli.indicador === "Meta Monto Colocado" ? "$" :  cumpli.indicador === "Meta" ? "" : "%",
          }
        })
        let datosArrayIndex = 0;
        const datosArray = cumplimiento.reduce((prevValue, currentValue, index) => {
          // eslint-disable-next-line no-mixed-operators

          if (index > 0 && currentValue.indicador_tabla !== cumplimiento[index - 1].indicador_tabla) {
            datosArrayIndex++;
          }
          if (prevValue[datosArrayIndex]?.datos) {
            prevValue[datosArrayIndex] = { ...prevValue[datosArrayIndex] };
          } else {
            prevValue[datosArrayIndex] = {datos: []};
          }
          prevValue[datosArrayIndex].datos = [
            ...prevValue[datosArrayIndex].datos,
            currentValue,
          ];
         

          return [...prevValue];
        }, []);

        
        setDatosCumpliComer(datosArray);
      } catch (error) {
        setDatosCumpliComer([]);
      }
    };
    DatosCumplimiento();
  }, [fecha, cliente]);
  return {
    datosCumpliComer
  };
};
