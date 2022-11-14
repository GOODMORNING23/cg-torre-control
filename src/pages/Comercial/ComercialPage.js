import { useEffect, useState } from "react";
import { Table } from "../../components";
import { TituloResumen } from "../../components/TituloResumen/TituloResumen";
import { useComer } from "../../hooks/useComer";
import { Cards } from "../../components/Cards/Cards";
import { Meta } from "../../components/Meta/Meta";
import { useCumpliComer } from "../../hooks/CumplimientoComer/useCumpliComer";
import { useComentComer } from "../../hooks/ComentarioComer/useComentComer";
import array from "./array";

export const ComercialPage = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [cliente, setCliente] = useState("FISA");
  const [fecha, setFecha] = useState(hoy);
  const { datosComer } = useComer(fecha, cliente);
  const { datosComentComer } = useComentComer(fecha, cliente);
  const { datosCumpliComer } = useCumpliComer(fecha, cliente);
  const [datosIndex, setDatosIndex] = useState([]);


  useEffect(() => {
    if (datosComer?.length) {
      const modi = datosComer.map((index) => {
        const datos = index.datos.map((item) => {
          if (
            item.indicador === "% RPC (Contacto Objetivo)" ||
            item.indicador === "CONVERSION VS SOL" ||
            item.indicador === "CONVERSION CREDITOS" ||
            item.indicador === "CUMPLIMIENTO"
          ) {
            return {
              ...item,
              mes1: {
                value: item.mes1,
                porcentaje: true,
              },
              mes2: {
                value: item.mes2,
                porcentaje: true,
              },
              mes3: {
                value: item.mes3,
                porcentaje: true,
              },
              sombra: item.indicador === "MONTO DISPUESTO (miles)",
            };
          } else if (item.indicador === "MONTO DISPUESTO (miles)" || item.indicador === "MONTO DISPUESTO" || item.indicador === "MONTO DISPUESTO DLL") {
            return {
              ...item,
              mes1: {
                value: item.mes1,
                pesos: true,
              },
              mes2: {
                value: item.mes2,
                pesos: true,
              },
              mes3: {
                value: item.mes3,
                pesos: true,
              },
            };
          } else {
            return item;
          }
        });
        return {
          ...index,
          datos,
        };
      });
      setDatosIndex(modi);
    }
  }, [datosComer]);

  const clientes = [
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
    },
  ];

  const clientes2 = [
    {
      id: 0,
      value: "AFI",
      name: "Resumen California",
    },
    {
      id: 1,
      value: "AFI",
      name: "Resumen Arizona",
    },
    {
      id: 2,
      value: "AFI",
      name: "Resumen Texas",
    },
    {
      id: 3,
      value: "AFI",
      name: "Resumen Sumatoria",
    },
  ];

  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const nombre = clientes.filter((index) => index.value === cliente);
  const titulos = clientes2.filter((index) => index.value === cliente);

  const EstilosLetra = {
    color: "Red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };
  const EstilosLetra2 = {
    color: "navy",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };

  const headers = [
    {
      text: "INDICADORES",
      background: "#0B5394",
    },
    {
      text: "FISA",
      background: "red",
    },
    {
      text: "AEF",
      background: "orange",
    },
    {
      text: "AFI",
      background: "purple",
    },
  ];
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div  className="row p-2">
          <label>Selecciona una Campaña: </label>
          <select
            className="form-group form-control  col-md-2"
            value={cliente}
            onChange={handleChange}
          >
            {clientes.map((cli) => (
              <option key={cli.value} value={cli.value}>
                {cli.name}
              </option>
            ))}
          </select>
          <input
            className="form-control  col-md-2"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <br />
        </div>
        <div className="content-header">
          <div className="container-fluid">
            {nombre.map((item) => (
              <h1 style={EstilosLetra}>Comercial {item.name}</h1>
            ))}
            <br />
            <TituloResumen
              largo={"col-12 col-sm-6 col-md-4"}
              responsable={"Null"}
            />

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <div>
                {/* style={{ display: "grid", gridTemplateRows: `repeat(${datosIndex.length}, minmax(auto, auto))`}} */}

                <br />
                {datosIndex.map((index, i) => (
                  <>
                    {!!titulos.length && titulos.map((item) => (
                      item.id === i ? <h1 style={EstilosLetra2}>{item.name}</h1> : ""
                    ))}
                    <br />
                    <Table
                      expand={"col-12"}
                      heders={index.heders}
                      datos={index.datos}
                    />
                  </>
                ))}
                
              </div>
              <div>
                {/* style={{ display: "grid", gridTemplateRows: `repeat(${datosCumpliComer.length}, minmax(auto, auto))`}} */}
                {/** datos[0] esto es entrar al array datos en la posicion 0 y traer el valor de indicador_tabla */}
                {datosCumpliComer.map((item, i) => (
                  <>
                    <Cards
                      name={item.datos[0].indicador_tabla}
                      large={"col-md-12"}
                      style={
                        i === 0
                          ? { marginTop: "48px" }
                          : i === 1
                          ? { marginTop: "390px" }
                          : i === 2
                          ? { marginTop: "125px" }
                          : {}
                      }
                    >
                      {item.datos.map((index) => (
                        <Meta
                          icon={index.icon}
                          estilo={index.estilo}
                          key={index.id}
                          dato={index.valor}
                          pronostico={index.pronostico}
                          nombreEtiqueta={index.indicador}
                          large={"col-12 col-sm-6 col-md-4"}
                          item={index.item}
                        />
                      ))}
                      {datosComentComer.filter(
                        (date) =>
                          date.indicador_tabla === item.datos[0].indicador_tabla
                      ).length && (
                        <Meta
                          dato={
                            datosComentComer.filter(
                              (date) =>
                                date.indicador_tabla ===
                                item.datos[0].indicador_tabla
                            )[0].valor
                          }
                          nombre={"Meta Nivel de Servicio"}
                          estilo={"info-box-icon bg-primary elevation-1"}
                          icon={"fas fa-comment"}
                          nombreEtiqueta={
                            datosComentComer.filter(
                              (date) =>
                                date.indicador_tabla ===
                                item.datos[0].indicador_tabla
                            )[0].indicador
                          }
                          item={""}
                          large={"col-12 col-sm-6 col-md-12"}
                        />
                      )}
                    </Cards>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
