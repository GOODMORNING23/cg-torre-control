import React from "react";
import { Link } from "react-router-dom";

export const SmallCard = ({nameProject, large, icon, url, sizeColor}) => {
  return (
    <div className={large}>
      <div className={sizeColor}>
        <div className="inner">
          <h3>{nameProject}</h3>
          <p></p>
        </div>
        <br/>
        <div className="icon">
          <i className={icon}/>
        </div>
        <Link to={url} className="small-box-footer">
          Entrar <i className="fas fa-arrow-circle-right" />
        </Link>
      </div>
    </div>
  );
};
