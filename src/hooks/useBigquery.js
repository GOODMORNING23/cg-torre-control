import { useState, useEffect } from "react";
import DatosBigquery from "../config/DatosBigQuery";

export const useBigquery = (campania, fecha, cliente) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const BigqueryData = async () => {
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
        const { data } = await DatosBigquery(
          `/atc/${campania}/${fecha}/${cliente}`,
          config
        );
        setDatos(data);
      } catch (error) {
        setDatos([]);
      }
    };
    BigqueryData();
  }, [campania, fecha, cliente]);

  return {
    datos,
  };
};