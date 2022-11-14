import { useEffect, useState } from "react";
import { Table } from "../../components";
import { Meta } from "../../components/Meta/Meta";
import { TituloResumen } from "../../components/TituloResumen/TituloResumen";
import { useCobr } from "../../hooks/useCobr";
import { useCompCobr } from "../../hooks/useCompCobr";
import { useComentario } from "../../hooks/useComentario";
import { useCumpliCobr } from "../../hooks/CumplimientoCobr/useCumpliCobr";
import { useComentCob } from "../../hooks/Cobranza/useComentCob";
import array from "../Comercial/array";

export const CobranzaPage = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [cliente, setCliente] = useState("FISA");
  const [fecha, setFecha] = useState(hoy);
  const { datosCobr } = useCobr(fecha, cliente);
  const { datosCompCobr } = useCompCobr(fecha);
  const { datosCumpliCobr } = useCumpliCobr(fecha, cliente);
  const {datosComentCob} = useComentCob(fecha, cliente);
  const [datosIndex, setDatosIndex] = useState([]);
  const [datosComp, setDatosComp] = useState([]);
  const fecha_today = new Date();
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

  useEffect(() => {
    if (datosCobr?.length) {
      const modi = datosCobr.map((index) => {
        if (
          index.indicador === "%RPC (Contacto Objetivo)" ||
          index.indicador === "%PTP (Promesas de Pago)" ||
          index.indicador === "%KPTP (Promesas Cumplidas)"
        ) {
          return {
            ...index,
            mes1: {
              value: index.mes1,
              porcentaje: true,
            },
            mes2: {
              value: index.mes2,
              porcentaje: true,
            },
            mes3: {
              value: index.mes3,
              porcentaje: true,
            },
            sombra: index.indicador === "EVPH (Monto Efectivo por Hora)",
          };
        } else if (index.indicador === "MR (miles)" || index.indicador === "EVPH (Monto Efectivo por Hora)") {
          return {
            ...index,
            mes1: {
              value: index.mes1,
              pesos: true,
            },
            mes2: {
              value: index.mes2,
              pesos: true,
            },
            mes3: {
              value: index.mes3,
              pesos: true,
            },
            sombra: index.indicador === "EVPH (Monto Efectivo por Hora)",
          };
        }else {
          return index;
        }
      });
      setDatosIndex(modi);
    }
  }, [datosCobr]);

  useEffect(() => {
    if (datosCompCobr?.length) {
      const modiComp = datosCompCobr.map((index) => {
        if (
          index.indicador === "%RPC (Contacto Objetivo)" ||
          index.indicador === "%PTP (Promesas de Pago)" ||
          index.indicador === "%KPTP (Promesas Cumplidas)"
        ) {
          return {
            ...index,
            mes1: {
              value: index.mes1,
              porcentaje: true,
            },
            mes2: {
              value: index.mes2,
              porcentaje: true,
            },
            mes3: {
              value: index.mes3,
              porcentaje: true,
            },
            sombra: index.indicador === "MR (miles)",
          };
        } else {
          return index;
        }
      });
      setDatosComp(modiComp);
    }
  }, [datosCompCobr]);

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

  const year = fecha_today.getFullYear();
  const mesActual = meses[fecha_today.getMonth()];
  const mesPasado = meses[fecha_today.getMonth() - 1];
  const mesAntePasado = meses[fecha_today.getMonth() - 2];

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

  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const nombre = datosIndex.filter(index => index.cliente === cliente && index.indicador === "FTE's");

  const EstilosLetra = {
    color: "Red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa"
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="row p-2">
          <label>Selecciona una Campaña: {" "}</label>

          <select className="form-group form-control  col-md-2" value={cliente} onChange={handleChange}>
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
            {nombre.map(item => (<h1 style={EstilosLetra}>Cobranza {item.cliente}</h1>))}
            <br />
            <div className="row">
              <TituloResumen
                nombre={""}
                responsable={"Carla Eugenia de Leon de Alba"}
                largo={"col-12 col-sm-6 col-md-3"}
              />
              {datosCumpliCobr.map((index) => (
                <Meta
                  icon={index.icon}
                  estilo={index.estilo}
                  key={index.id}
                  dato={index.valor}
                  pronostico={index.pronostico}
                  nombreEtiqueta={index.indicador}
                  large={"col-12 col-sm-6 col-md-3"}
                  item={index.item}
                />
              ))}

              <Table
                expand={"col-12"}
                heders={[
                  "INDICADORES",
                  `${mesAntePasado}'${year}`,
                  `${mesPasado}'${year}`,
                  `${mesActual}'${year}`,
                ]}
                datos={datosIndex}
              />

              {datosComentCob.map((index) => (
                <Meta
                  dato={index.valor}
                  nombre={"Comentario"}
                  estilo={"info-box-icon bg-primary elevation-1"}
                  icon={"fas fa-comments"}
                  nombreEtiqueta={index.indicador}
                  large={"col-12 col-sm-6 col-md-5"}
                  item={""}
                />
              ))}
              <hr />
              {/* <Table expand={"col-12"} heders={headers} datos={datosComp} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
