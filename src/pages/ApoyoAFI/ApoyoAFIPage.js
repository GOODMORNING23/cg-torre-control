import { useState, useEffect } from "react";
import { Table } from "../../components";
import { TituloResumen } from "../../components/TituloResumen/TituloResumen";
import { Cards } from "../../components/Cards";
import { Meta } from "../../components/Meta/Meta";
import { useApoyoAFI } from "../../hooks/ApoyoAFI/useApoyoAFI";
import { useCumpliAFI } from "../../hooks/ApoyoAFI/useCumpliAFI";
import { useComentAFI } from "../../hooks/ApoyoAFI/useComentAFI";

export const ApoyoAFIPage = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [cliente, setCliente] = useState("16-AFI-ACCR");
  const [fecha, setFecha] = useState(hoy);
  const { datosApoyoAFI } = useApoyoAFI(fecha, cliente);
  const {datosCumpliAFI} = useCumpliAFI(fecha, cliente);
  const {datosComentAFI} = useComentAFI(fecha, cliente);
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

  const clientes = [
    {
      value: "16-AFI-ACCR",
      name: "ACC AFI",
    },
    {
      value: "37-AFI-VTEL",
      name: "Verificacion Tel AFI",
    },
    {
      value: "53-AFI-DISP",
      name: "Disperciones AFI",
    },
  ];

  console.log(datosApoyoAFI);

  useEffect(() => {
    if (datosApoyoAFI?.length) {
      const modi = datosApoyoAFI.map((index) => {
        if (
          index.indicador === "% COA AUTORIZO" ||
          index.indicador === "% APROBADOSS"
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
        } else if (
          index.indicador === "COLOCACIÓN (miles)" ||
          index.indicador === "COA AUTORIZÓ (miles)"
        ) {
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
        } else {
          return index;
        }
      });
      setDatosIndex(modi);
    }
  }, [datosApoyoAFI]);

  const year = fecha_today.getFullYear();
  const mesActual = meses[fecha_today.getMonth()];
  const mesPasado = meses[fecha_today.getMonth() - 1];
  const mesAntePasado = meses[fecha_today.getMonth() - 2];

  
  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const nombre = clientes.filter(index => index.value === cliente);

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
            <TituloResumen
              largo={"col-12 col-sm-6 col-md-7"}
              nombre={""}
              responsable={"Null"}
            />
            {nombre.map(item => (<h1 style={EstilosLetra}>{item.name}</h1>))}
            <br/>
            <div className="row">
              <Table
                expand={"col-8"}
                heders={[
                  "INDICADORES",
                  `${mesAntePasado}'${year}`,
                  `${mesPasado}'${year}`,
                  `${mesActual}'${year}`,
                ]}
                datos={datosIndex}
              />

              <Cards name={"Apoyo AFI"} large={"col-md-4"}>
                {datosCumpliAFI.map((index) => (
                  <Meta
                    icon={index.icon}
                    estilo={index.estilo}
                    key={index.id}
                    dato={index.valor}
                    pronostico={index.pronostico}
                    nombreEtiqueta={index.indicador}
                    large={"col-12 col-sm-6 col-md-6"}
                    item={""}
                  />
                ))}
                {datosComentAFI.map((item) => (
                    <Meta
                    dato={item.valor}
                    nombre={"Comentario"}
                    estilo={"info-box-icon bg-primary elevation-1"}
                    icon={"fas fa-comments"}
                    nombreEtiqueta={item.indicador}
                    large={"col-12 col-sm-6 col-md-12"}
                    item={""}
                  />
                ))}
              </Cards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
