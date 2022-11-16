import React from "react";

export const Facturacion = () => {
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
              T6-Facturacion-COA '22
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1620}
                src="https://datastudio.google.com/embed/reporting/3cc41fbf-47bb-468a-8668-9b08a0129af5/page/VgD"
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
