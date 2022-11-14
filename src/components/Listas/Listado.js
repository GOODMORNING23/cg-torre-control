import React from "react";
import { Link } from 'react-router-dom'

export const Listado = ({ nombreLista, icon, url}) => {

  const estilos = {
    color: "white"
  }

  return (
    <li className="nav-item">
      <Link to={url} className="nav-link">
        <i className={icon} />
        <p style={estilos}> {nombreLista}</p>
      </Link>
    </li>
  );
};
