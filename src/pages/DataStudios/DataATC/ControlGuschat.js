import React from "react";

export const FrameDataATC = () => {
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
              T1-11Indicadores ATC Noviembre '22
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1543}
                src="https://datastudio.google.com/embed/reporting/bc4b5f14-a6e2-41c6-bcdf-5c0d11417cb5/page/p_1ffgm849yc"
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
