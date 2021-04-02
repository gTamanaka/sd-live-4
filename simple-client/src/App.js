import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cadastrar from "./cadastrar/cadastrar";
import Leituras from "./leituras/leituras";
import Login from "./login/login";
import Home from "./home/home"
import { Config } from "./config/config";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>SD</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leituras">Leituras</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar</Link>
            </li>
            <li>
              <Link to="/config">Config</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <article className={"main-article"}>
          <Switch>
          <Route path="/config">
            <Config></Config>
            </Route>
            <Route path="/cadastrar">
              <Cadastrar></Cadastrar>
            </Route>
            <Route path="/leituras">
              <Leituras></Leituras>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </article>
        </main>
      </div>
    </Router>
  );
}

