import { useState, useEffect } from "react";
import DatosAxios from "../../config/DatosAxios";

export const useRepositorio = (gerencia, tipo) => {
  const [datosRepo, setDatosRepo] = useState([]);

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
          `/repositoriocg?gerencia=${gerencia}&tipo=${tipo}`,
          config
        );
        setDatosRepo(data);
      } catch (error) {
        setDatosRepo([]);
      }
    };
    AtencionDatosFISA();
  }, [gerencia, tipo]);

  return {
    datosRepo,
  };
};
