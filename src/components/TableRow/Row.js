import React from "react";

export const Row = ({ item }) => {
  const center = {
    textAlign: "center",
    fontSize: "15px"
  };

  const { id, responsable, nombre_archivo, liga, personal_cg, descripcion, gerencia, tipo_archivo } = item;

  return (
    <tr key={id}>
      <th style={center}>{responsable}</th>
      <th style={center}>{nombre_archivo}</th>
      <th style={center}>
        <a 
          href={`${liga}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a Documento
        </a>
      </th>
      <th style={center}>{personal_cg}</th>
      <th style={center}>{descripcion}</th>
      <th style={center}>{gerencia}</th>
      <th style={center}>{tipo_archivo}</th>
    </tr>
  );
};


