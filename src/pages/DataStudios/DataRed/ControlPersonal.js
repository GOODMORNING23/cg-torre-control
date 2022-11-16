import React from "react";

export const ControlPersonal = () => {
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
              T3Tablero Control Personal '22
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1350}
                src="https://datastudio.google.com/embed/reporting/1239cf62-3b91-4eb0-9235-2a2f42dfc4d5/page/1WKgC"
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
