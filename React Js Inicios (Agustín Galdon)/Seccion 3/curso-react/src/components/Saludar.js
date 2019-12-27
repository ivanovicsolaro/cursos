import React from "react";

function Saludar(props) {
  const { name, enviarSaludo } = props;
  return (
    <div>
      <p>Hola {name}</p>
      <button onClick={() => enviarSaludo(name)}>Enviar Saludo</button>
    </div>
  );
}

export default Saludar;
