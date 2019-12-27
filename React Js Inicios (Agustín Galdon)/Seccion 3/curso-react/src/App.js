import React from "react";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hola <Saludar name="IvanSOlaro" />
        </h1>
      </header>
    </div>
  );
}

export default App;
