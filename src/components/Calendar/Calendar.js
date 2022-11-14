import React from "react";

export const Calendar = ({fecha, setFecha}) => {
  return (
    <>
      <label>Selecciona fecha: </label>
      <input
        className="mt-1"
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
    </>
  );
};
