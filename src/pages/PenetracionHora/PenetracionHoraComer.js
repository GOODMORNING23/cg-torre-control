import { TableOpti } from "../../components/TableOpti/TableOpti";
import { Titulo } from "../../components/Titulo/Titulo";
import Headers from "./Headers";
import { usePenetracion } from "../../hooks/PenetracionHora/usePenetracion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

export const PenetracionHoraComer = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [empresa, setEmpresa] = useState("FISA");
  const [fecha, setFecha] = useState(hoy);
  const { datosPenetracion } = usePenetracion(empresa, hoy);
 

  const handleChange = (e) => {
    setEmpresa(e.target.value);
  };

  const empresas = [
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
    }
  ];
  console.log(fecha);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
      <div className="row p-2">
          <label>Selecciona una Campaña: </label>
          <select
            className="form-group form-control  col-md-2"
            value={empresa}
            onChange={handleChange}
          >
            {empresas.map((cli) => (
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
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/Home/PenetracionHome" className="nav-link">
              Regresa Penetraciones Home
            </Link>
          </li>
        </div>
        <div className="content-header">
          <div className="container-fluid">
            <Titulo
              largo={"col-12 col-sm-6 col-md-12"}
              nombre={`Penetracion por hora Comercial ${empresa}`}
              colorA={"navy"}
            />
            <div className="row">
              {!!datosPenetracion.length &&
                datosPenetracion.map((item, index) => (
                  <>
                    <TableOpti
                      flag={true}
                      expand={"col-12"}
                      heders={Headers}
                      sections={Section}
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
