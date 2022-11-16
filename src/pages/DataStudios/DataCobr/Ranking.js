import React from "react";

export const Ranking = () => {
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
              Rank X FTE Cob AFI 2022
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={1350}
                src="https://datastudio.google.com/embed/reporting/3ea0e06d-4bdc-4700-a195-b9d9843c831a/page/p_ja38ypee0c"
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
