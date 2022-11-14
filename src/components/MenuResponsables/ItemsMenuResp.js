import React from "react";
import { Link } from 'react-router-dom'

export const ItemsMenuResp = ({url, nombreCampania, activo}) => {
  return (
    <Link
      to={url}
      className="nav-link active"
      id="vert-tabs-home-tab"
      data-toggle="pill"
      href="#vert-tabs-home"
      role="tab"
      aria-controls="vert-tabs-home"
      aria-selected={activo}
    >
      {nombreCampania}
    </Link>
  );
};
