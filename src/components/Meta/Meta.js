import React from "react";

export const Meta = ({
  dato,
  pronostico = dato,
  icon = null,
  estilo,
  nombreEtiqueta,
  item,
  visualizar,
  large,
}) => {
  const RenderEstilos = ({ pronostico }) => {
    if (pronostico >= 98) {
      return (
        <span className="info-box-icon bg-success elevation-1">
          <i className="fas fa-thumbs-up" />
        </span>
      );
    } else if (pronostico >= 95 && pronostico < 98) {
      return (
        <span className={`info-box-icon bg-warning elevation-1`}>
          <i className="fas fa-frown" />
        </span>
      );
    } else if (pronostico <= 95) {
      return (
        <span className={`info-box-icon bg-danger elevation-1`}>
          <i className="fas fa-thumbs-down" />
        </span>
      );
    }
  };

  const Valores = ({ item }) => {
    if (item === "$") {
      return (
        <span className="info-box-number">
          <small>{item}</small> {dato}
        </span>
      );
    } else {
      return <span className="info-box-number">{dato}<small>{item}</small></span>;
    }
  };

  return (
    <div className={large}>
      <div style={{ display: visualizar }} className="info-box">
        {icon ? (
          <span className={estilo}>
            <i className={icon} />
          </span>
        ) : (
          <RenderEstilos pronostico={pronostico} />
        )}
        <div className="info-box-content">
          <span className="info-box-text">{nombreEtiqueta}</span>
          <Valores item={item} />
        </div>
      </div>
    </div>
  );
};
