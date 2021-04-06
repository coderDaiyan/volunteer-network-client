import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/register"></Route>
          <Route path="/login"></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
