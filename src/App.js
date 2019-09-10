import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

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

import MapPage from "./views/Map";

import "./App.css";

let mounted = 0;
// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.scale}%)`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 40
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: 0
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: 0
  }
};

class App extends Component {
  componentDidMount() {
    if (mounted == 0) {
      mounted = 1;
      return <Redirect to="city selector" exact />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main className="main-component">
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
            >
              <Redirect from="/" to="city-selector" exact />
              <Route path="/generic-evaluation" component={GenericEvaluation} />
              <Route path="/city-selector" component={CitySelector} />
              <Route path="/introduction" component={Introduction} />

              <Route path="/tutorial-1" component={Tutorial1} />
              <Route path="/tutorial-2" component={Tutorial2} />
              <Route path="/tutorial-3" component={Tutorial3} />
              <Route path="/tutorial-4" component={Tutorial4} />

              <Route path="/menu" component={Menu} />

              <Route path="/map" component={MapPage} />

              <Route path="/workshops" component={Workshop} />
              <Route path="/workshop-detail" component={WorkshopDetail} />
              <Route path="/workshop-evaluation" component={WorkshopEval} />

              <Route path="/contact" component={Contact} />

              <Route path="/program" component={Program} />
              <Route path="/program-details" component={ProgramDetails} />
              <Route path="/program-speaker" component={ProgramSpeaker} />
            </AnimatedSwitch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
