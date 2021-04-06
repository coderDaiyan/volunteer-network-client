import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
