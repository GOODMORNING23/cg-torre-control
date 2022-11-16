import React from "react";

export const IndicadoresCalidad = () => {
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
              T7-Indicadores Calidad COA
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1222}
                src="https://datastudio.google.com/embed/reporting/5d5c3e68-d9fa-4c45-993a-edd1b03ec345/page/p_79tldatcuc"
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
