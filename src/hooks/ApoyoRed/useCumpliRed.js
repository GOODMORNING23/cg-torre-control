import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useCumpliRed = (fecha, cliente) => {
  const [datosCumpliRed, setDatosCumpliRed] = useState([]);

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
          `/cumplimiento/red?cliente=${cliente}&fecha=${fecha}`,
          config
        );

        const cumplimiento = data.map((cumpli) => {
            return {
              ...cumpli,
              icon: cumpli.indicador === "Meta" ?  "fas fa-chart-pie" : null,
              estilo: cumpli.indicador === "Meta" ?  "info-box-icon bg-info elevation-1" : null,
              item: cumpli.indicador === "Meta" ? "%" : "%",
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

        setDatosCumpliRed(datosArray);
      } catch (error) {
        setDatosCumpliRed([]);
      }
    };
    Comentarios();
  }, [fecha, cliente]);

  return {
    datosCumpliRed,
  };
};