import React from "react";
import { Link } from "react-router-dom";

export const CardBox = ({ name, icon, url, nameLink, large, color }) => {
  return (
    <div className={large}>
      <div className="info-box shadow-lg">
        <span className={color}>
          <i className={icon} />
        </span>
        <div className="info-box-content">
          <span className="info-box-text"><b>{name}</b></span>
          <span className="info-box-number">
            <Link to={url}>{nameLink}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
