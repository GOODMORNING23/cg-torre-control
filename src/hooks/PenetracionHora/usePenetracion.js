import { useEffect, useState } from "react";
import DatosAxios from "../../config/DatosAxios";

export const usePenetracion = (empresa, fecha) => {
  const [datosPenetracion, setDatosPenetracion] = useState([]);

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
          `/penetracionhora?empresa=${empresa}&fecha=${fecha}`,
          config
        );
        let datosArrayIndex = 0;
        const datosArray = data.reduce((prevValue, currentValue, index) => {
          // eslint-disable-next-line no-mixed-operators
          if ((currentValue.lista === "01_COBR_ALTO_RIESGO" && index !== 0)   || (currentValue.lista === "01_AEF_RB_INICIAL" && index !== 0)) {
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
        console.log(datosArray);
        setDatosPenetracion(datosArray);
      } catch (error) {
        setDatosPenetracion([]);
      }
    };
    DatosCumplimiento();
  }, [empresa, fecha]);
  return {
    datosPenetracion
  };
};
