import React from "react";

export const RowOpti = ({ item, onClick = () => {}, heders = [] }) => {
  const center = {
    textAlign: "center",
  };

  const { id, sombra } = item;

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
    <tr onClick={() => onClick(item)} style={sombra ? { backgroundColor: "#E8E8E8" } : {}} key={id}>
      {!!heders.length ? heders.map(heder => (RenderMes(item[heder.key]))) : Object.keys(item).filter(key => key !== "id").map(key => (RenderMes(item[key])))}
    </tr>
  );
};
