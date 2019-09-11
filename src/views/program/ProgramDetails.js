import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Header from "../../components/Header";

import { Subscribe } from "unstated";

import ProgramImage from "../../assets/Program/ProgramImage.png";
import AppState from "../../states/AppState";

const styles = {
  programDetailImage: {
    position: "relative",
    width: "100vw",
    margin: "0 0 0 0"
  },
  imageTitle: {
    position: "absolute",
    bottom: "2.5vh",
    left: "5vw",
    fontSize: "3.5vh"
  },
  container: {
    position: "relative",
    textAlign: "center",
    color: "white"
  },
  textDiv: {
    margin: "8vw",
    fontSize: "4vw"
  },
  redText: {
    color: "red",
    margin: "0",
    padding: "0"
  }
};

class ProgramDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <Header lastPage="/program" />

        <Subscribe to={[AppState]}>
          {appState => (
            <div
              style={{
                padding: "0 0 2vh 0"
              }}
            >
              <div style={styles.container}>
                <img
                  src={appState.state.eventInfo.banner}
                  alt=""
                  style={styles.programDetailImage}
                />
                <p style={styles.imageTitle}>
                  {appState.state.eventInfo.time} -{" "}
                  {appState.state.eventInfo.name}
                </p>
              </div>
              <div style={styles.textDiv}>
                <p>{appState.state.eventInfo.text}</p>
                <p style={styles.redText}>
                  Locatie : {appState.state.eventInfo.location}
                </p>
                {appState.state.speakerInfo.speaker && (
                  <p style={styles.redText}>
                    {appState.state.speakerInfo.speaker}{" "}
                    {appState.state.speakerInfo.name}
                  </p>
                )}
              </div>
              {appState.state.speakerInfo.speaker && (
                <NavLink to="/program-speaker">
                  <Button
                    color="orange"
                    style={{
                      backgroundColor: "#FFA304",
                      width: "60vw",
                      margin: "0vw 0vw 0vw 20vw"
                    }}
                  >
                    Over de spreker
                  </Button>
                </NavLink>
              )}
            </div>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default ProgramDetails;
