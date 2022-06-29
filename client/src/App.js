import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Attractions from "./pages/Attractions/Attractions";

import "./App.css";
import React from "react";
// import Header from "./components/header/Header";
// import Homepage from "./pages/homepage/Homepage";
// import About from "./pages/about/About";

function App() {
  return (
    <React.Fragment>
      <Router>
        {/*      <Header /> */}
        <Switch>
          {/*  <Route exact path="/" component={Homepage} />*/}
          <Route exact path="/attractions" component={Attractions} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
