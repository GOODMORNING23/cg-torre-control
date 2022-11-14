import { useState, useEffect } from "react";
import { Table } from "../../components";
import { TituloResumen } from "../../components/TituloResumen/TituloResumen";
import { useApoyoRed } from "../../hooks/ApoyoRed/useApoyoRed";
import { Cards } from "../../components/Cards";
import { Meta } from "../../components/Meta/Meta";
import { useComentRed } from "../../hooks/ApoyoRed/useComentRed";
import { useCumpliRed } from "../../hooks/ApoyoRed/useCumpliRed";

export const ApoyoRed = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [cliente, setCliente] = useState("AFI");
  const [fecha, setFecha] = useState(hoy);
  const { datosApoyoRed } = useApoyoRed(fecha, cliente);
  const { datosComentRed } = useComentRed(fecha, cliente);
  const { datosCumpliRed } = useCumpliRed(fecha, cliente);
  const [datosIndex, setDatosIndex] = useState([]);

  const clientes = [
    
    {
      value: "AFI",
      name: "Dispersiones AFI",
    },
    {
      value: "FISA",
      name: "Atencion SSO",
    },
    {
      value: "AEF",
      name: "Ejecutivos Virtuales FISA",
    },
    {
      value: "FINDEP",
      name: "Seguimiento Bonificaciones FISA",
    },
  ];

  const letras = [
    {
      id: 0,
      value: "FISA",
      name: "PAO T ESQCHA FISA (56-FIS-PAOT)",
    },
    {
      id: 1,
      value: "FISA",
      name: "Saldo Cero FISA (57-FIS-CERO)",
    },
    {
      id: 2,
      value: "FISA",
      name: "Seguimiento Contrato",
    },
    {
      id: 0,
      value: "AEF",
      name: "Seguimiento Contrato (23-FIS-EVIR)",
    },
    {
      id: 1,
      value: "AEF",
      name: "Aplicacion Pagos FISA (04-FIS-APLI)",
    },
    {
      id: 2,
      value: "AEF",
      name: "Aplicacion Pagos AEF (71-AEF-APLI)",
    },
  ];

  // useEffect(() => {
  //   if (datosApoyoRed?.length) {
  //     const modi = datosApoyoRed.map((index) => {
  //       const datos = index.datos.map((item) => {});
  //       if (
  //         index.indicador === "% SLA" ||
  //         index.indicador === "% RESUELTAS EN TIEMPO" ||
  //         index.indicador === "NIVEL DE SERVICIO CON CB" ||
  //         index.indicador === "NIVEL DE SERVICIO SIN CB"
  //       ) {
  //         return {
  //           ...index,
  //           mes1: {
  //             value: index.mes1,
  //             porcentaje: true,
  //           },
  //           mes2: {
  //             value: index.mes2,
  //             porcentaje: true,
  //           },
  //           mes3: {
  //             value: index.mes3,
  //             porcentaje: true,
  //           },
  //           sombra: index.indicador === "EVPH (Monto Efectivo por Hora)",
  //         };
  //       } else if (
  //         index.indicador === "MONTO BONIFICADO  (K$)" ||
  //         index.indicador === "MONTO PENALIZADO" ||
  //         index.indicador === "MONTO DISPERSADO APP (miles)" ||
  //         index.indicador === "MONTO DISPERSADO SUCURSAL (miles)" ||
  //         index.indicador === "MONTO DISPERSADO DIGITAL (miles)" ||
  //         index.indicador === "TOTAL (miles)" ||
  //         index.indicador === "MONTO RECUPERADO" ||
  //         index.indicador === "MONTO PAGADO (K$)" ||
  //         index.indicador === "MP LINEA (APPMOVIL) (K$)" ||
  //         index.indicador === "CONTRACARGOS APPMOVIL" ||
  //         index.indicador === "TOTAL MONTO RECUPERADO (K$)"
  //       ) {
  //         return {
  //           ...index,
  //           mes1: {
  //             value: index.mes1,
  //             pesos: true,
  //           },
  //           mes2: {
  //             value: index.mes2,
  //             pesos: true,
  //           },
  //           mes3: {
  //             value: index.mes3,
  //             pesos: true,
  //           },
  //           sombra: index.indicador === "EVPH (Monto Efectivo por Hora)",
  //         };
  //       } else {
  //         return index;
  //       }
  //     });
  //     setDatosIndex(modi);
  //   }
  // }, [datosApoyoRed]);

  useEffect(() => {
    if (datosApoyoRed?.length) {
      const modi = datosApoyoRed.map((index) => {
        const datos = index.datos.map((item) => {
          if (
            item.indicador === "% SLA" ||
            item.indicador === "% RESUELTAS EN TIEMPO" ||
            item.indicador === "NIVEL DE SERVICIO CON CB" ||
            item.indicador === "NIVEL DE SERVICIO SIN CB" ||
            item.indicador === "% ABANDONO (TOTAL)" ||
            item.indicador === "NIVEL DE SERVICIO"
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
          } else if (
            item.indicador === "MONTO BONIFICADO  (K$)" ||
            item.indicador === "MONTO DISPERSADO APP (miles)" ||
            item.indicador === "MONTO DISPERSADO SUCURSAL (miles)" ||
            item.indicador === "MONTO DISPERSADO DIGITAL (miles)" ||
            item.indicador === "TOTAL (miles)" ||
            item.indicador === "MONTO RECUPERADO" ||
            item.indicador === "MONTO PAGADO (K$)" ||
            item.indicador === "MP LINEA (APPMOVIL) (K$)" ||
            item.indicador === "CONTRACARGOS APPMOVIL" ||
            item.indicador === "TOTAL MONTO RECUPERADO (K$)" ||
            item.indicador === "MONTO DISPERSADO CALL CENTER (miles)" ||
            item.indicador === "MONTO PENALIZADO" 
          ) {
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
  }, [datosApoyoRed]);

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
    margin: "auto",
    // position: "fixed"
  };

  const EstilosLetra2 = {
    color: "navy",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };

  console.log(datosIndex);
  console.log(datosCumpliRed);
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
          <div className="container-fluid">
            {nombre.map((item) => (
              <h1 style={EstilosLetra}>{item.name}</h1>
            ))}

            <br />
            <TituloResumen
              largo={"col-12 col-sm-6 col-md-6"}
              nombre={"Apoyo a la Red"}
              responsable={"Null"}
              style={{ position: "fixed" }}
            />

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
                {datosCumpliRed.map((item, i) => (
                  <>
                    <Cards
                      name={item.datos[0].indicador_tabla}
                      large={"col-md-12"}
                      style={
                        i === 0
                          ? { marginTop: "83px" }
                          : i === 1
                          ? { marginTop: "240px" }
                          : i === 2
                          ? { marginTop: "35px" }
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
                      {datosComentRed.filter(
                        (date) =>
                          date.indicador_tabla === item.datos[0].indicador_tabla
                      ).length && (
                        <Meta
                          dato={
                            datosComentRed.filter(
                              (date) =>
                                date.indicador_tabla ===
                                item.datos[0].indicador_tabla
                            )[0].valor
                          }
                          nombre={"Meta Nivel de Servicio"}
                          estilo={"info-box-icon bg-primary elevation-1"}
                          icon={"fas fa-comment"}
                          nombreEtiqueta={
                            datosComentRed.filter(
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
                {datosCumpliRed.length === 0 && (
                  <Cards
                    name={datosComentRed.indicador_tabla}
                    large={"col-md-12"}
                    style={{ marginTop: "23px" }}
                  >
                    {datosComentRed.map((index) => (
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
