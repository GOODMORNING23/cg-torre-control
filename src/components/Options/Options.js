import React from "react";

export const Options = ({ cliente, setCliente }) => {
  const clientes = [
    {
      value: "FISA",
      name: "FISA",
    },
    {
      value: "AEF",
      name: "AEF",
    },
    {
      value: "AFI",
      name: "AFI",
    },
  ];

  const handleChange = (e) => {
    setCliente(e.target.value);
  };

  const estilos = {
    backgroundColor: "#0563af",
    color: "white",
    padding: "5px",
    width: "150px",
    border: "none",
    fontSize: "20px",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.2)",
    appearance: "button",
    outline: "none",
  };

  return (
    <>
      <label>Selecciona una Campaña: </label>
      <select style={estilos} value={cliente} onChange={handleChange}>
        {clientes.map((cli) => (
          <option key={cli.value} value={cli.value}>
            {cli.name}
          </option>
        ))}
      </select>
    </>
  );
};
