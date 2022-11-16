import React from "react";

export const SeguimientoMarcacion = () => {
  const EstilosLetraH3 = {
    color: "navy",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "2.5rem",
    textShadow: "-1px -1px 1px #aaa",
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid ">
            <h1 style={EstilosLetraH3} className="m-0">
              T9-Seguimiento Campañas COA '22
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1350}
                src="https://datastudio.google.com/embed/reporting/1052fc96-fab6-4db3-9c17-d5b7d83f1c85/page/3n3sC"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
