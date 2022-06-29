import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Attractions from "./pages/Attractions/Attractions";
import Quiz from "./pages/Quiz/Quiz.jsx";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/attractions" component={Attractions} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
