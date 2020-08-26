import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about/about.component";
import Instruction from "./pages/instruction/instruction.component";
import Board from "./components/board/board.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/instruction" component={Instruction} />
      <Route exact path="/about" component={About} />
      <Route exact path="/game" component={Board} />
    </Switch>
  );
}

export default App;
