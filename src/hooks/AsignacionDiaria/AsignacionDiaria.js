import { useEffect, useState } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useAsignacionDiaria = (hoy) => {
  const [datosAsignacion, setDatosAsignacion] = useState([]);

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
          `/asignaciondiaria?fecha=${hoy}`,
          config
        );
        let datosArrayIndex = 0;
        const datosArray = data.reduce((prevValue, currentValue, index) => {
          // eslint-disable-next-line no-mixed-operators
          if (index >= 1 && currentValue.grupo !== data[index - 1].grupo) {
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
        //   if (datosArrayIndex === 0 || datosArrayIndex === 3) {
        //     prevValue[datosArrayIndex] = { ...prevValue[datosArrayIndex], heders: [
        //       "INDICADORES",
        //       `Datos1`,
        //       `$Datos2`,
        //       `Datos3`,
        //     ]};
        //   }
          return [...prevValue];
        }, []);
        setDatosAsignacion(datosArray);
      } catch (error) {
        setDatosAsignacion([]);
      }
    };
    DatosCumplimiento();
  }, [hoy]);
  return {
    datosAsignacion
  };
};
