import React from "react";

const EstilosLetra = {
  color: "navy",
  fontFamily: "Times New Roman",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "-1px -1px 1px #aaa",
  margin: "auto",
  fontSize: "40px"
};

export const Titulo = ({ nombre, largo, colorA }) => {

  return (
    <>
      <div className={largo}>
        <div className="info-box">
          <h1 style={EstilosLetra}>
            <span style={{color: colorA}}>{nombre}</span>
          </h1>
        </div>
      </div>
    </>
  );
};
