import React from "react";

export const ControlLlamadasAFI = () => {
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
              T2-Indicadores AFI 2022 v2.0
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={2572}
                src="https://datastudio.google.com/embed/reporting/d14bfdf1-bee5-4f02-8d91-120d3871e22e/page/p_ptrwxtf1lc"
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
