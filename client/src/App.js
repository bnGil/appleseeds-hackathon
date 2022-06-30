import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useData } from "./context/Context";

import Attractions from "./pages/Attractions/Attractions";
import Quiz from "./pages/Quiz/Quiz.jsx";
import Header from "./pages/Header/Header";
import HeaderAR from "./pages/Header/Header.AR";
import HomePage from "./pages/HomePage/HomePage";
import HomePageAR from "./pages/HomePage/HomePage.AR";
import HomePageHE from "./pages/HomePage/HomePage.HE";
import HeaderHE from "./pages/Header/Header.HE";

function App() {
  const { language } = useData();
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          {language === "AR" ? (
            <HeaderAR />
          ) : language === "HE" ? (
            <HeaderHE />
          ) : (
            <Header />
          )}
          <Switch>
            {language === "AR" ? (
              <>
                <Route exact path="/" component={HomePageAR} />
                <Route exact path="/attractions" component={Attractions} />
                <Route exact path="/quiz" component={Quiz} />
              </>
            ) : language === "HE" ? (
              <>
                <Route exact path="/" component={HomePageHE} />
                <Route exact path="/attractions" component={Attractions} />
                <Route exact path="/quiz" component={Quiz} />
              </>
            ) : (
              <>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/attractions" component={Attractions} />
                <Route exact path="/quiz" component={Quiz} />
              </>
            )}
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
