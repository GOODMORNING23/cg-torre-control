import React from "react";
import { Link } from "react-router-dom";

export const Options = ({name, estilo, widget, tipo }) => {
  return (
    <a
      className={estilo}
      data-widget={widget}
      data-type={tipo}
    >
      {name}
    </a>
  );
};
