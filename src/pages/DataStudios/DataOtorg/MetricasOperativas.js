import React from "react";

export const MetricasOperativas = () => {
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
              T8-Metrcicas Operativas CROWD
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={2572}
                src="https://datastudio.google.com/embed/reporting/9abbb2bb-73e2-469d-9839-2080e5680312/page/p_wdx5jx3czc"
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
