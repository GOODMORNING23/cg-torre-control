import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useApoyoRed = (fecha, cliente) => {
  const [datosApoyoRed, setDatosApoyoRed] = useState([]);
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
          `/apoyored?cliente=${cliente}&fecha=${fecha}`,
          config
        );

        let datosArrayIndex = 0;
        const datosArray = data.reduce((prevValue, currentValue, index) => {
          // eslint-disable-next-line no-mixed-operators
          if (currentValue.indicador === "LLAMADAS ENTRANTES" && data[index - 1].indicador !== "FTE's"  || currentValue.indicador === "DEMANDA" && data[index - 1].indicador !== "FTE's") {
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
          if (datosArrayIndex === 0) {
            prevValue[datosArrayIndex] = { ...prevValue[datosArrayIndex], heders: [
              "INDICADORES",
              `${mesAntePasado}'${year}`,
              `${mesPasado}'${year}`,
              `${mesActual}'${year}`,
            ]};
          }
          //console.log(datosArray);
          return [...prevValue];
        }, []);
        setDatosApoyoRed(datosArray);
      } catch (error) {
        setDatosApoyoRed([]);
      }
    };
    AtencionDatosFISA();
  }, [fecha, cliente]);

  return {
    datosApoyoRed,
  };
};
