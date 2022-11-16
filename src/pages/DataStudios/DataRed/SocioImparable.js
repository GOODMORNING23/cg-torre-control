import React from "react";

export const SocioImparable = () => {
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
              T4-Indicadores Socio-Imparable '22
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1350}
                src="https://datastudio.google.com/embed/reporting/9e167145-1200-467a-96f8-ff7f5aea4178/page/p_c7slofawzc"
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
