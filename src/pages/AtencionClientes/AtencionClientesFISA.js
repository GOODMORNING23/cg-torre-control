import { useEffect, useState } from "react";
import { Table } from "../../components";
import { Meta } from "../../components/Meta/Meta";
import { TituloResumen } from "../../components/TituloResumen/TituloResumen";
import { useATCFisa } from "../../hooks/useATCFisa";
import { useComparativa } from "../../hooks/useComparativa";
import { useCumpliFisa } from "../../hooks/useCumpliFisa";
import { useComentario } from "../../hooks/useComentario";

export const AtencionClientesFISA = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [cliente, setCliente] = useState("FISA");
  const [fecha, setFecha] = useState(hoy);
  const { datos } = useATCFisa(fecha, cliente);
  const { comparativo } = useComparativa(fecha);
  const { datosCumpli, datosCumpliCobr } = useCumpliFisa(fecha, cliente);
  const { datosComent } = useComentario(fecha, cliente);
  const [datosIndex, setDatosIndex] = useState([]);
  const [datosComp, setDatosComp] = useState([]);
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

  useEffect(() => {
    if (datos?.length) {
      const modi = datos.map((index) => {
        if (
          index.indicador === "% ABANDONO (TOTAL)" ||
          index.indicador === "NIVEL DE SERVICIO"
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
            sombra:
              index.indicador === "% ABANDONO (TOTAL)" ||
              index.indicador === "NIVEL DE SERVICIO",
          };
        } else {
          return index;
        }
      });
      setDatosIndex(modi);
    }
  }, [datos]);

  useEffect(() => {
    if (comparativo?.length) {
      const modiComp = comparativo.map((index) => {
        if (
          index.indicador === "% ABANDONO (sin callback)" ||
          index.indicador === "NIVEL DE SERVICIO" ||
          index.indicador === "% ABANDONO (con callback)"
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
            sombra:
              index.indicador === "% ABANDONO (sin callback)" ||
              index.indicador === "NIVEL DE SERVICIO" ||
              index.indicador === "% ABANDONO (con callback)",
          };
        } else {
          return index;
        }
      });
      setDatosComp(modiComp);
    }
  }, [comparativo]);

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
  const diaAnterior = new Date(hoy);
  const anterior = diaAnterior.getDate(diaAnterior.getDate() - 1);
  console.log(anterior);

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
  const nombre = datosIndex.filter(
    (index) => index.cliente === cliente && index.indicador === "FTE's"
  );

  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const EstilosLetra = {
    color: "Red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };
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
            className="form-group form-control  col-md-2"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <br />
        </div>
        <div className="content-header">
          <div className="container-fluid">
            {nombre.map((item) => (
              <h1 style={EstilosLetra}>Atencion a Clientes {item.cliente}</h1>
            ))}
            <br />
            <div className="row">
              <TituloResumen
                responsable={"Carla Eugenia de Leon de Alba"}
                largo={"col-12 col-sm-6 col-md-4"}
              />
              {datosCumpli.map((index) => (
                <Meta
                  icon={index.icon}
                  estilo={index.estilo}
                  key={index.id}
                  dato={index.valor}
                  nombreEtiqueta={index.indicador}
                  large={"col-12 col-sm-6 col-md-4"}
                  item={"%"}
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

              {datosComent.map((index) => (
                <Meta
                  key={index.id}
                  dato={index.valor}
                  nombre={"Comentario"}
                  estilo={"info-box-icon bg-primary elevation-1"}
                  icon={"fas fa-comments"}
                  large={"col-12 col-sm-6 col-md-3"}
                  nombreEtiqueta={index.indicador}
                  item={""}
                />
              ))}
              {/* <Table expand={"col-12"} heders={headers} datos={datosComp} /> */}

              {/* <Todo meta={} cumpli={} data={} /> */}
              
            </div>
            {/* <iframe
                width={1080}
                height={920}
                src="https://datastudio.google.com/embed/reporting/a4d95024-c77f-4660-afbd-bebc693a088e/page/p_uzojtv02yc"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
