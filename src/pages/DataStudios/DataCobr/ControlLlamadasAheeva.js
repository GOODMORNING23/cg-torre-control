import React from "react";

export const ControlLlamadasAheeva = () => {
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
              T12-10-AFI-COB '22
            </h1>
            <br />
            <div className="row">
              <iframe
                width={1800}
                height={2770}
                src="https://datastudio.google.com/embed/reporting/e7d65c1a-5739-4b53-99a0-6eb5a0f9f7b8/page/p_vzei8y4kuc"
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
