import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { Button } from "semantic-ui-react";

import { Subscribe } from "unstated";
import ProgramContainer from "../../states/ProgramState";

import ProgramImage from "../../assets/Program/ProgramImage.png";

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
        <NavLink to="/program">
          <BackButton />
        </NavLink>
        <Subscribe to={[ProgramContainer]}>
          {programState => (
            <div>
              <div style={styles.container}>
                <img
                  src={ProgramImage}
                  alt=""
                  style={styles.programDetailImage}
                />
                <p style={styles.imageTitle}>
                  {programState.state.eventInfo.time} -{" "}
                  {programState.state.eventInfo.name}
                </p>
              </div>
              <div style={styles.textDiv}>
                <p>{programState.state.eventInfo.text}</p>
                <p style={styles.redText}>
                  Locatie : {programState.state.eventInfo.location}
                </p>
                <p style={styles.redText}>
                  {programState.state.speakerInfo.speaker}{" "}
                  {programState.state.speakerInfo.name}
                </p>
              </div>
              {programState.state.speakerInfo.speaker && (
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
