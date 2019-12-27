import React from "react";
import Saludar from "./components/Saludar";

function App() {
  const enviarSaludo = nombre => {
    console.log("Hola " + nombre);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Saludar name="Hola mundo como estas?" enviarSaludo={enviarSaludo} />
        </h1>
        <p>
          <Saludar name="Ivan solaro" enviarSaludo={enviarSaludo} />
        </p>
      </header>
    </div>
  );
}

export default App;
