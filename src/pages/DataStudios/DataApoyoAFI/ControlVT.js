import React from "react";

export const ControlVT = () => {
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
              Control VT yBackoffice AFI
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={2572}
                src="https://datastudio.google.com/embed/reporting/19fa947e-86d6-4fc4-8736-2ba57aa1eef3/page/p_ptrwxtf1lc"
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
