import React from "react";
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import Example from "./components/modal/modal";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick="{Example}">
        Hola Mundo
      </Button>
      <ReactIcon />
    </div>
  );
}

export default App;
