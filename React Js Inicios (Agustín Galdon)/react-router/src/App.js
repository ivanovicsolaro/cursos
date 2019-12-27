import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/quien-soy">Quien Soy?</Link>
        </div>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien-soy">
            <QuienSoy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
