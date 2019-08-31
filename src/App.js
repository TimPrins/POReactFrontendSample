import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/Header";

// import LoadingScreen from "./views/LoadingScreen";
import Introduction from "./views/Introduction";
import CitySelector from "./views/citySelector/CitySelector";

import Tutorial1 from "./views/tutorials/Tutorial1";
import Tutorial2 from "./views/tutorials/Tutorial2";
import Tutorial3 from "./views/tutorials/Tutorial3";
import Tutorial4 from "./views/tutorials/Tutorial4";

import Menu from "./views/Menu";

import Program from "./views/program/ProgramMain/Program";
import ProgramDetails from "./views/program/ProgramDetails";
import ProgramSpeaker from "./views/program/ProgramSpeaker";

import Contact from "./views/Contact";

import Workshop from "./views/workshop/workshopMain/Workshops";
import WorkshopDetail from "./views/workshop/WorkshopDetail";
import WorkshopEval from "./views/workshop/workshopEval/WorkshopEval";

import GenericEvaluation from "./views/genericEvaluation/GenericEvaluation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <main className="main-component" style={{ padding: "20vh 0 0 0" }}>
            <Switch>
              <Redirect from="/" to="loading-screen" exact />
              {/* <Route path="/loading-screen" component={LoadingScreen} /> */}
              <Route path="/generic-evaluation" component={GenericEvaluation} />
              <Route path="/city-selector" component={CitySelector} />
              <Route path="/introduction" component={Introduction} />

              <Route path="/tutorial-1" component={Tutorial1} />
              <Route path="/tutorial-2" component={Tutorial2} />
              <Route path="/tutorial-3" component={Tutorial3} />
              <Route path="/tutorial-4" component={Tutorial4} />

              <Route path="/menu" component={Menu} />

              <Route path="/map" component={null} />

              <Route path="/workshops" component={Workshop} />
              <Route path="/workshop-detail" component={WorkshopDetail} />
              <Route path="/workshop-evaluation" component={WorkshopEval} />

              <Route path="/contact" component={Contact} />

              <Route path="/program" component={Program} />
              <Route path="/program-details" component={ProgramDetails} />
              <Route path="/program-speaker" component={ProgramSpeaker} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
