import React, { Component } from "react";

import Header from "../components/Header";

// import Map from "../assets/PlattegrondNBCCongrescentrum[9809].pdf"

import { Subscribe } from "unstated";
import AppState from "../states/AppState";

const styles = {
  fixed: {
    backgroudColor: "white",
    position: "fixed",
    height: "70vh",
    width: "99vw",
    top: "15vh",
    overflowX: "hidden"
  },
  scrollable: {
    top: "5vh",
    position: "absolute",
    heigth: "100%",
    width: "100%",
    overflowX: "auto",
    overflowY: "auto", 
    padding: "3vh"
  }
};
class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <Header lastPage="/menu" />
        <Subscribe to={[AppState]}>
          {appState => (
            <React.Fragment>
              <div style={styles.fixed}>
                <span style={styles.scrollable}>
              <img src={appState.state.map} alt=""  />
              </span>
              </div>
            </React.Fragment>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Menu;
