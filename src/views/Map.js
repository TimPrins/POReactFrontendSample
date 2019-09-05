import React, { Component } from "react";

import Header from "../components/Header";

// import Map from "../assets/PlattegrondNBCCongrescentrum[9809].pdf"

import { Subscribe } from "unstated";
import AppState from "../states/AppState";

// const styles = {};
class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <Header lastPage="/menu" />
        <Subscribe to={[AppState]}>
          {appState => (
            <React.Fragment>
              <img src={appState.state.map} alt=""  />
            </React.Fragment>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Menu;
