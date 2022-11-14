import React from "react";
import { Link } from "react-router-dom";

export const Items = ({url, activate, id, selected, name}) => {
  return (
    <>
      <Link
        to={url}
        className={activate}
        id={id}
        data-toggle="pill"
        href="#vert-tabs-home"
        role="tab"
        aria-controls="vert-tabs-home"
        aria-selected={selected}
      >
        {name}
      </Link>
    </>
  );
};
