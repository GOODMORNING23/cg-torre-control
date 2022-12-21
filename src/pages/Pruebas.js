import { TableOpti } from "../../src/components/TableOpti";
import { Titulo } from "../../src/components/Titulo/Titulo";
import { useState } from "react";
import { useBigquery } from "../hooks/useBigquery";

export const Pruebas = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [empresa, setEmpresa] = useState("FISA");
  const [fecha, setFecha] = useState("2022-11-21");
  const [campania, setCampania] = useState("ATC-CLIENTES");
  const { datos } = useBigquery(campania, fecha, empresa)

  const currentTime = new Date();

  const hora = currentTime.toLocaleTimeString();

 
console.log(datos);
  const handleChange = (e) => {
    setEmpresa(e.target.value);
  };

  const empresas = [
    {
      value: "FISA",
      name: "FISA",
    },
    {
      value: "AEF",
      name: "AEF",
    },
    {
      value: "AFI",
      name: "AFI",
    }
  ];

  return (
    <div className="wrapper">
      <div className="content-wrapper">
      <div className="row p-2">
          <label>Selecciona una Campaña: </label>
          <select
            className="form-group form-control  col-md-2"
            value={empresa}
            onChange={handleChange}
          >
            {empresas.map((cli) => (
              <option key={cli.value} value={cli.value}>
                {cli.name}
              </option>
            ))}
          </select>
          <input
            className="form-group form-control  col-md-2"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          
        </div>
        <div className="content-header">
          <div className="container-fluid">
            <Titulo
              largo={"col-12 col-sm-6 col-md-12"}
              nombre={`Pruebas BigQuery ${empresa}`}
              colorA={"navy"}
            />
            <div className="row">
             <TableOpti 
                datos={datos}
             />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
