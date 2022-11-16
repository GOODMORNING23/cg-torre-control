import React, { useState, useEffect } from "react";
import { TableRow } from "../../components/TableRow/TableRow";
import { useRepositorio } from "../../hooks/RepositoriosCG/useRepositorio";
import headers from "./headers";

export const RepositorioCG = () => {
  const [data, setData] = useState([]);
  const [gerencia, setGerencia] = useState("");
  const [tipo, setTipo] = useState([]);
  const [valor1, setValor1] = useState("");

  const { datosRepo } = useRepositorio(gerencia, valor1);

  const gerencias = [
    {
      name: "COBRANZA",
      tipo: ["CM", "FUNNEL", "OTRO"],
    },
    {
      name: "COMERCIAL",
      tipo: ["CM", "OTRO"],
    },
    {
      name: "CONTROL DE GESTION",
      tipo: ["DS", "OTRO"],
    },
    {
      name: "CROWD",
      tipo: ["DS", "FUNNEL"],
    },
    {
      name: "SSO",
      tipo: ["DS", "OTRO"],
    },
    {
      name: "DIRECCION DE PRODUCTO",
      tipo: ["OTRO"],
    },
    {
      name: "TODAS",
      tipo: ["DS", "OTRO"],
    },
  ];

  // useEffect(() => {
  //   if (data.length) {
  //     setGerencia(data[0].name);
  //   }
  // }, [data]);

  useEffect(() => {
    setData(gerencias);
  }, []);

  useEffect(() => {
    data.forEach((data) => {
      if (data.name === gerencia) {
        setTipo(data.tipo);
        // setValor1(data.name)
      }
    });
  }, [gerencia, data]);

  const handleChange = (e) => {
    setGerencia(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeTipo = (e) => {
    setValor1(e.target.value);
  };

  const EstilosLetra = {
    color: "Red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };

  const EstilosLetraH3 = {
    color: "black",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h1 style={EstilosLetra} className="text-center">
              Repositorio Control de Gestion
            </h1>
            <br />
            <div className="card card-default">
              <div className="card-header">
                <h3 style={EstilosLetraH3} className="card-title">
                  Selecciona tu Repositorio
                </h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Gerencias</label>
                      <select
                        className="form-group form-control select2 col-md-3"
                        value={gerencia}
                        onChange={handleChange}
                        defaultValue={"default"}
                      >
                        <option value={"default"}>Seleccionar</option>
                        {data.map((cli) => (
                          <option key={cli.name} value={cli.name}>
                            {cli.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tipo de Archivo</label>
                      <select
                        className="form-group form-control select2 col-md-3"
                        value={valor1}
                        onChange={handleChangeTipo}
                        defaultValue={"default"}
                      >
                        <option value={"default"}>Seleccionar</option>
                        {!!tipo.length &&
                          tipo.map((cli, key) => (
                            <option key={key} value={cli}>
                              {cli}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <br />
                  <TableRow
                    expand={"col-12"}
                    heders={headers}
                    datos={datosRepo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
