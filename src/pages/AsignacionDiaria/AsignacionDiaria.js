import { TableOpti } from "../../components/TableOpti/TableOpti";
import { Titulo } from "../../components/Titulo/Titulo";
import section from "./Section";
import headers from "./headers";
import { useAsignacionDiaria } from "../../hooks/AsignacionDiaria/AsignacionDiaria";

export const AsignacionDiaria = () => {
  const hoy = new Date().toLocaleDateString("en-CA");

  const { datosAsignacion } = useAsignacionDiaria(hoy);

  const titulos = [
    {
      id: 0,
      name: "Tablero: Atencion a Clientes",
      value: "ATN",
    },
    {
      id: 1,
      name: "Tablero: Cobranza",
      value: "COB",
    },
    {
      id: 2,
      name: "Tablero: Comercial",
      value: "VTA",
    },
  ];
  const EstilosLetra2 = {
    color: "black",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
    margin: "auto",
  };

  const titulo = titulos.filter(
    (index) =>
      index.value === "ATN" || index.value === "COB" || index.value === "VTA"
  );


  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <Titulo
              largo={"col-12 col-sm-6 col-md-12"}
              nombre={"Asignacion Diaria"}
              colorA={"navy"}
            />
            <div className="row">
              {!!datosAsignacion.length &&
                datosAsignacion.map((item, index) => (
                  <>
                    {!!titulo.length &&
                      titulo.map((row) =>
                        row.id === index ? (
                          <h1 style={EstilosLetra2}>{row.name}</h1>
                        ) : (
                          ""
                        )
                      )}
                    <br />
                    <br />
                    <br />
                    <TableOpti
                      flag={true}
                      expand={"col-12"}
                      sections={section}
                      heders={headers}
                      datos={item.datos}
                    />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
