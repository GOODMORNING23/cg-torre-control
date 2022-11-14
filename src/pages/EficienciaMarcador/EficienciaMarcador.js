import { Titulo } from "../../components/Titulo/Titulo";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { useEficiencia } from "../../hooks/EficienciaMarcador/useEficiencia";
import { useState } from "react";
import { TableOpti } from "../../components/TableOpti/TableOpti";

export const EficienciaMarcador = () => {
  const [empresa, setEmpresa] = useState("");
  const [canal, setCanal] = useState("");
  const [fecha1, setFecha1] = useState("");
  const [fecha2, setFecha2] = useState("");

  const { datosEficiencia } = useEficiencia(empresa, canal, fecha1, fecha2);

  const datos = [
    {
      name: "Seleccione",
      value: "Seleccione",
    },
    {
      name: "FISA",
      value: "FISA",
    },
    {
      name: "AEF",
      value: "AEF",
    },
  ];

  const datos1 = [
    {
      name: "Seleccione",
      value: "Seleccione",
    },
    {
      name: "DIGITAL_TEMPERATURAS",
      value: "DIGITAL_TEMPERATURAS",
    },
    {
      name: "TELEMARKETING",
      value: "TELEMARKETING",
    },
    {
      name: "DIGITAL_RENO_FORMER",
      value: "DIGITAL_RENO_FORMER",
    },
    
  ];
  const handleChange = (e) => {
    setEmpresa(e.target.value);
  };

  const handleChangecanal = (e) => {
    setCanal(e.target.value);
  };
  console.log(datosEficiencia);
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <Titulo
              largo={"col-12 col-sm-6 col-md-12"}
              nombre={"Eficiencia del Marcador"}
              colorA={"Navy"}
            />
            <div className="row">
              <label>Selecciona una Empresa: </label>
              <select
                className="form-group form-control  col-md-2"
                value={empresa}
                onChange={handleChange}
              >
                {datos.map((cli) => (
                  <option key={cli.value} value={cli.value}>
                    {cli.name}
                  </option>
                ))}
              </select>
              <label>Selecciona una Canal: </label>
              <select
                className="form-group form-control  col-md-2"
                value={canal}
                onChange={handleChangecanal}
              >
                {datos1.map((cli) => (
                  <option key={cli.value} value={cli.value}>
                    {cli.name}
                  </option>
                ))}
              </select>
              <input
                className="form-group form-control  col-md-2"
                type="date"
                value={fecha1}
                onChange={(e) => setFecha1(e.target.value)}
              />
              <br />
              <input
                className="form-group form-control  col-md-2"
                type="date"
                value={fecha2}
                onChange={(e) => setFecha2(e.target.value)}
              />
              <br />
            </div>
          </div>
          <TableOpti
            datos={datosEficiencia}
          />
        </div>
      </div>
    </div>
  );
};
