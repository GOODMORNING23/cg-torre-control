import React, { useState } from "react";

export const Card = ({ nombre, datos = [], expand }) => {
  const [datosIndex, setDatosIndex] = useState("Seleccione");
  const handleChange = (e) => {
    setDatosIndex(e.target.value);
  };
  return (
    <div className={expand}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{nombre}</h3>
        </div>
        <div className="card-body">
          <div className="mb-4">
              <select
                className="form-group form-control  col-md-12"
                value={datos}
                onChange={handleChange}
              >
                {datos.map((cli) => (
                  <option key={cli.value} value={cli.value}>
                    {cli.name}
                  </option>
                ))}
              </select>
          </div>
        </div>
      </div>
    </div>
  );
};
