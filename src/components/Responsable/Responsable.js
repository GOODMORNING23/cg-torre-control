import React from "react";

export const Responsable = ({ name, correo, titulo, large }) => {
  const ResponsableEstilo = {
    color: "navy",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };

  const NombreR = {
    color: "Red",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };

  const Correo = {
    color: "back",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    textAlign: "center",
    textShadow: "-1px -1px 1px #aaa",
  };


  return (
    <div className={large}>
      <div className="card d-flex flex-fill">
        <div className="card-header  border-bottom-0">
          <h3 style={ResponsableEstilo}>{titulo}</h3>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col-12 card-header border-bottom-0">
              <h1 style={NombreR} className="lead">
                <span className="info-box-icon  elevation-0">
                  <i className="fas fa-user" />
                </span>{" "}
                {name}
              </h1>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="text-right">
            <h2 style={Correo} className="lead">
              {correo}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
