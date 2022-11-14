/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import DatosAxios from "../config/DatosAxios";

export const useComer = (fecha, cliente) => {
  const [datosComer, setDatosComer] = useState([]);
  const fecha_today = new Date(fecha);
  const meses = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

  const year = fecha_today.getFullYear();
  const mesActual = meses[fecha_today.getMonth()];
  const mesPasado = meses[fecha_today.getMonth() - 1];
  const mesAntePasado = meses[fecha_today.getMonth() - 2];

  useEffect(() => {
    const DatosComercial = async () => {
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
          `/comercial?cliente=${cliente}&fecha=${fecha}`,
          config
        );
        console.log(data);

        let datosArrayIndex = 0;
        const datosArray = data.reduce((prevValue, currentValue, index) => {
          // eslint-disable-next-line no-mixed-operators
          if (currentValue.indicador === "ASIGNACION" && data[index - 1].indicador !== "FTE's"  
            || currentValue.indicador_tabla === "30-AFI-TLMK-COMP" && currentValue.indicador === "CREDITOS DISPUESTOS") {
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
          if (datosArrayIndex === 0 || datosArrayIndex === 3) {
            prevValue[datosArrayIndex] = { ...prevValue[datosArrayIndex], heders: [
              "INDICADORES",
              `${mesAntePasado}'${year}`,
              `${mesPasado}'${year}`,
              `${mesActual}'${year}`,
            ]};
          }
          

          // console.log(prevValue);
          return [...prevValue];
        }, []);

        
        setDatosComer(datosArray);
      } catch (error) {
        setDatosComer([]);
      }
    };
    DatosComercial();
  }, [fecha, cliente]);
  return {
    datosComer,
  };
};
