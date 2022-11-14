import React from "react";

const EstilosLetra = {
  color: "navy",
  fontFamily: "Times New Roman",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "-1px -1px 1px #aaa"
};

export const TituloResumen = ({ nombre = "", largo }) => {
  const fecha = new Date();
  const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre","Noviembre","Diciembre", ];

  const year = fecha.getFullYear();
  const mesActual = meses[fecha.getMonth()];

  return (
    <>
      <div className={largo}>
        <div className="info-box">
          <h1 style={EstilosLetra}>
            {" "}
            Resumen Subdireccion COA {mesActual} {year}{" "}
            <span style={{color: "red"}}>{nombre}</span>
          </h1>
        </div>
      </div>
    </>
  );
};
