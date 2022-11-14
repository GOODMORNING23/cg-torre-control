import { TableOpti } from "../../components/TableOpti/TableOpti";
import { Titulo } from "../../components/Titulo/Titulo";
import Headers from "./Headers";
import { useState } from "react";
import datos from "./ArrayData";
import datosAEF from "./DatosAEF";
import HeadersAEF from "./HeadersAEF";
import DatosQuery from "./DatosQuery";

export const Push = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [fecha, setFecha] = useState(hoy);
  const fecha_today = new Date(fecha);
  const [cliente, setCliente] = useState("FISA");
  const [menu, setMenu] = useState("PENSIONADOS");
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Aagosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const clientes = [
    {
      value: "Octubre",
      name: "Octubre",
    },
  ];

  const Menus = [
    {
        value: "GENERAL",
        name: "Reporte Ejecutivo General",
    },
    // {
    //   value: "PENSIONADOS",
    //   name: "Reporte Ejecutivo Pensionados",
    // },
    // {
    //   value: "FORMALDIGITAL",
    //   name: "Reporte Ejecutivo Formal Digital",
    // },
    // {
    //   value: "ALTOPERFIL",
    //   name: "Reporte Ejecutivo Alto Perfil",
    // },
    // {
    //   value: "DESCARTADO",
    //   name: "Reporte Ejecutivo Manual",
    // },
  ];
//   const json = JSON.stringify(DatosQuery);
//   let a = JSON.parse(json);
//   const dato = 0;
//   for(let x in a){
//     if(a[x].Empresa === "FISA" && a[x].status === "RECHAZADA" && a[x].Tipo_credito === "PENSIONADOS" && a[x].Dia === "12") {
//         dato += parseInt(a[x].Dia);
//     }
//   }

//   console.log(dato);

  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const handleChangeMenus = (e) => {
    setMenu(e.target.value);
  };

  const mesActual = meses[fecha_today.getMonth()];
  const year = fecha_today.getFullYear();

  const EstilosLetra = {
    color: "Red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
    margin: "auto"
  };

  const EstilosLetraAEF = {
    color: "#F6B26B",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
    margin: "auto"
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="row p-2">
          <label>Selecciona una Mes: </label>
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
          <label>Selecciona una Reporte: </label>
          <select
            className="form-group form-control  col-md-2"
            value={menu}
            onChange={handleChangeMenus}
          >
            {Menus.map((cli) => (
              <option key={cli.value} value={cli.value}>
                {cli.name}
              </option>
            ))}
          </select>
          {/* <input
            className="form-group form-control  col-md-2"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          /> */}
        </div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <Titulo
                largo={"col-6 col-sm-6 col-md-6"}
                nombre={`Push Octubre ${year}`}
                colorA={"red"}
              />
              <Titulo
              largo={"col-6 col-sm-6 col-md-6"}
              nombre={`Reporte Ejecutivo General`}
              colorA={"navy"}
            />
            </div>

            <div className="row">
            <h1 style={EstilosLetra}>FISA</h1>
              <TableOpti
                flag={true}
                expand={"col-12"}
                heders={Headers}
                datos={datos}
              />
              <h1 style={EstilosLetraAEF}>AEF</h1>
              <TableOpti
                flag={true}
                expand={"col-12"}
                heders={HeadersAEF}
                datos={datosAEF}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
