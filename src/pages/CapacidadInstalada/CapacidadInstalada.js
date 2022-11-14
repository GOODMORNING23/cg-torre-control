import { useState } from "react";
import { TableOpti } from "../../components/TableOpti/TableOpti";
import { Titulo } from "../../components/Titulo/Titulo";
import datos from "./datos";
import datos2, { datos3 } from "./datos2";

export const CapacidadInstalada = () => {
    const [indexDatos, setIndexDatos] = useState([]);

    const headers = [
        {
          text: "Campaña",
          background: "#0B5394",
        },
        {
          text: "Personal Requerido",
          background: "#0B5394",
        }
    ];

    const headers2 = [
        {
          text: "Campaña",
          background: "#0B5394",
        },
        {
          text: "Demanda",
          background: "#0B5394",
        },
        {
          text: "Tiempo Promedio",
          background: "#0B5394",
        },
        {
          text: "Tiempo Requerido Seg",
          background: "#0B5394",
        },
        {
          text: "Tiempo Requerido Hrs",
          background: "#0B5394",
        },
        {
          text: "Personal Requerido",
          background: "#0B5394",
        }
    ];
    const click = (item)  => {
        const table = datos3.filter(index => index.id === item.id)
        setIndexDatos(table[0].table)
    }

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <Titulo
              largo={"col-12 col-sm-6 col-md-12"}
              nombre={"Capacidad Instalada"}
              colorA={"Navy"}
            />
            <div className="row">
              <TableOpti
                onClickRow={click} 
                expand={"col-5"}
                heders={headers} 
                datos={datos}
              />
            </div>
            <div  className="row">
            {!!indexDatos.length &&
              <TableOpti 
                expand={"col-12"}
                heders={headers2} 
                datos={indexDatos}
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
