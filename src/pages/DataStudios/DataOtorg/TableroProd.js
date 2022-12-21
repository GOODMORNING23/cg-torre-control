import React from "react";

export const TableroProd = () => {
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
              Tablero productividad gerencia CROWD
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={2572}
                src="https://datastudio.google.com/embed/reporting/65c5bd8b-8182-419d-b069-820c9d2f7d4b/page/sAMAD"
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
