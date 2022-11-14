import React from "react";

export const Cards = ({children, name, large, style}) => {
  return (
    <div style={style} className={large}>
      <div className="card">
        <div className="card-header">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
          <div className="container-fluid">
            <div className="row">
             {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
