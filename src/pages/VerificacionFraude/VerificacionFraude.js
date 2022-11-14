import { TableOpti } from "../../components/TableOpti/TableOpti";
import { Titulo } from "../../components/Titulo/Titulo";
import Headers from "./Headers";
import { useState } from "react";
import Section from "./Section";
import { useVerifica } from "../../hooks/VerificaFraude/useVrifica";

export const VerificacionFraude = () => {
  const hoy = new Date().toLocaleDateString("en-CA");
  const [fecha, setFecha] = useState(hoy);
  const { datos } = useVerifica(fecha);




  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="row p-2">
          <input
            className="form-group form-control  col-md-2"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="content-header">
          <div className="container-fluid">
            <Titulo
              largo={"col-12 col-sm-6 col-md-12"}
              nombre={`Verificacion Fraude`}
              colorA={"navy"}
            />
            <div className="row">
              <TableOpti
                flag={true}
                expand={"col-12"}
                heders={Headers}
                datos={datos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
