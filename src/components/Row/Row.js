import React from "react";

export const Row = ({ item }) => {
  const center = {
    textAlign: "center",
  };
  const { id, indicador, mes1, mes2, mes3, sombra } = item;

  const RenderMes = (mes) => {
    if ((mes?.value || mes?.value === 0) && mes?.porcentaje) {
      return <th style={center}>{mes.value}%</th>;
    } else if ((mes?.value || mes?.value === 0) && mes?.pesos) {
      return <th style={center}>${mes.value}</th>;
    }else {
      return <th style={center}>{mes}</th>;
    }
  };

  return (
    <tr style={sombra ? { backgroundColor: "#E8E8E8" } : {}} key={id}>
      <th style={center}>{indicador}</th>
      {RenderMes(mes1)}
      {RenderMes(mes2)}
      {RenderMes(mes3)}
    </tr>
  );
};
