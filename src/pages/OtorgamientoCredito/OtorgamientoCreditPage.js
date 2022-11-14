import { useState, useEffect } from "react";
import { Table } from "../../components";
import { TituloResumen } from "../../components/TituloResumen/TituloResumen";
import { useOtorgamiento } from "../../hooks/OtorgamientoCredito/useOtorgamiento";
import { Cards } from "../../components/Cards";
import { Meta } from "../../components/Meta/Meta";
import { useCumpliOtorg } from "../../hooks/OtorgamientoCredito/useCumpliOtorg";
import { useComentOtorg } from "../../hooks/OtorgamientoCredito/useComentOtorg";

export const OtorgamientoCreditoPage = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [cliente, setCliente] = useState("FISA");
  const [fecha, setFecha] = useState(hoy);
  const { datosOtorgamiento } = useOtorgamiento(fecha, cliente);
  const { datosCumpliOtor } = useCumpliOtorg(fecha, cliente);
  const { datosComentOtor } = useComentOtorg(fecha, cliente);
  const [datosIndex, setDatosIndex] = useState([]);

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

  // "48-AEF-CCAP", "51-AEF-DISP", "COAOR-22747", "39-FIS-VTEL"

  const clientes = [
    {
      value: "FISA",
      name: "Expedientes FISA-AEF (C)",
    },
    {
      value: "AEF",
      name: "Dispersiones AEF (C)",
    },
    {
      value: "AFI",
      name: "Videollamada (C)",
    },
    {
      value: "FINDEP",
      name: "Validacion Paquete (C)",
    },
    {
      value: "FINSOL",
      name: "Verificacion Telefonica",
    },
  ];
  useEffect(() => {
    if (datosOtorgamiento?.length) {
      const modi = datosOtorgamiento.map((index) => {
        const datos = index.datos.map((item) => {
          if (
            item.indicador === "% de aprobadas" ||
            item.indicador === "% Aprobadas" ||
            item.indicador === "% RESUELTAS EN TIEMPO" ||
            item.indicador === "% Atendidas"
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
          } else if (item.indicador === "Monto Dispersado (K)" || item.indicador === "$ Monto prom dispersado (K)" || item.indicador === "MONTO DISPUESTO DLL") {
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
  }, [datosOtorgamiento]);

  const letras = [
    {
      id: 0,
      value: "FISA",
      name: "Expediente FISA",
    },
    {
      id: 1,
      value: "FISA",
      name: "Expediente AEF",
    },
    {
      id: 2,
      value: "FISA",
      name: "Exp PYME FISA",
    },
    {
      id: 3,
      value: "FISA",
      name: "Exp PYME AEF",
    },
    {
      id: 0,
      value: "AEF",
      name: "Dispersiones AEF",
    },
    {
      id: 1,
      value: "AEF",
      name: "Veribanco / Vericuenta",
    },
    {
      id: 2,
      value: "AEF",
      name: "Vericuenta",
    },
    {
      id: 2,
      value: "23-FIS-EVIR",
      name: "Aplicacion Pagos AEF (71-AEF-APLI)",
    },
  ];

  const handleChange = (e) => {
    setCliente(e.target.value);
  };
  const nombre = clientes.filter((index) => index.value === cliente);
  const titulos = letras.filter((index) => index.value === cliente);

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

  console.log(datosCumpliOtor);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="row p-2">
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
          <br />
          <div className="container-fluid">
            <TituloResumen
              largo={"col-12 col-sm-6 col-md-4"}
              nombre={""}
              responsable={"Null"}
            />
            {nombre.map((item) => (
              <h1 style={EstilosLetra}>{item.name}</h1>
            ))}
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <div>
                {/* style={{ display: "grid", gridTemplateRows: `repeat(${datosIndex.length}, minmax(auto, auto))`}} */}

                <br />
                {datosIndex.map((index, i) => (
                  <>
                    {/* {nombre.map((item) => (
                      <h1 style={EstilosLetra}>{item.name}</h1>
                    ))}
                    <br /> */}
                    {!!titulos.length &&
                      titulos.map((item) =>
                        item.id === i ? (
                          <h1 style={EstilosLetra2}>{item.name}</h1>
                        ) : (
                          ""
                        )
                      )}
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
                {!!datosCumpliOtor.length && datosCumpliOtor.map((item, i) => (
                  <>
                    <Cards
                      name={""}
                      large={"col-md-12"}
                      style={
                        i === 0
                          ? { marginTop: "83px" }
                          : i === 1
                          ? { marginTop: "150px" }
                          : i === 2
                          ? { marginTop: "590px" }
                          : i === 3
                          ? { marginTop: "320px" }
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
                          large={"col-12 col-sm-6 col-md-6"}
                          item={index.item}
                        />
                      ))}
                      {datosComentOtor.filter(
                        (date) =>
                          date.indicador_tabla === item.datos[0].indicador_tabla
                      ).length && (
                        <Meta
                          dato={
                            datosComentOtor.filter(
                              (date) =>
                                date.indicador_tabla ===
                                item.datos[0].indicador_tabla
                            )[0].valor
                          }
                          nombre={"Meta Nivel de Servicio"}
                          estilo={"info-box-icon bg-primary elevation-1"}
                          icon={"fas fa-comment"}
                          nombreEtiqueta={
                            datosComentOtor.filter(
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
                {datosCumpliOtor.length === 0 && (
                  <Cards
                    name={""}
                    large={"col-md-12"}
                    style={{ marginTop: "23px" }}
                  >
                    {datosComentOtor.map((index) => (
                      <Meta
                        dato={index.valor}
                        nombre={"Meta Nivel de Servicio"}
                        estilo={"info-box-icon bg-primary elevation-1"}
                        icon={"fas fa-comment"}
                        nombreEtiqueta={index.indicador}
                        item={""}
                        large={"col-12 col-sm-6 col-md-12"}
                      />
                    ))}
                  </Cards>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
