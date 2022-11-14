import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useCumpliOtorg = (fecha, cliente) => {
  const [datosCumpliOtor, setDatosCumpliOtor] = useState([]);

  useEffect(() => {
    const AtencionDatosFISA = async () => {
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
          `/cumplimiento/otorg?cliente=${cliente}&fecha=${fecha}`,
          config
        );

        const cumplimiento = data.map((cumpli) => {
            return {
              ...cumpli,
              icon: cumpli.indicador === "Meta" || cumpli.indicador === "Meta en minutos" ?  "fas fa-chart-pie" : null,
              estilo: cumpli.indicador === "Meta" || cumpli.indicador === "Meta en minutos" ?  "info-box-icon bg-info elevation-1" : null,
              item: cumpli.indicador === "Meta" ? "%" : cumpli.indicador === "Meta en minutos" ? "" : "%",
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
        setDatosCumpliOtor(datosArray);
      } catch (error) {
        setDatosCumpliOtor([]);
      }
    };
    AtencionDatosFISA();
  }, [fecha, cliente]);

  return {
    datosCumpliOtor,
  };
};
