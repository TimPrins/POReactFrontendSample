import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import { Button } from "semantic-ui-react";

// import WorkshopImage from "../../assets/Workshops/Detail.png";

import { Subscribe } from "unstated";
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

class WorkshopDetail extends Component {
  render() {
    return (
      <div>
        <Header lastPage="/workshops" />
        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              <div style={styles.container}>
                <img
                  src={appState.state.workshopInfo.bigImage}
                  alt=""
                  style={styles.programDetailImage}
                />
                <p style={styles.imageTitle}>
                  {appState.state.workshopInfo.title}
                </p>
              </div>
              <div style={styles.textDiv}>
                <p>{appState.state.workshopInfo.text}</p>
                <p style={styles.redText}>
                  Locatie : {appState.state.workshopInfo.location}
                </p>
                <p style={styles.redText}>
                  Spreker : {appState.state.workshopInfo.leader}
                </p>
              </div>
              <NavLink to="/workshop-evaluation">
                <Button
                  color="orange"
                  style={{
                    backgroundColor: "#FFA304",
                    width: "60vw",
                    margin: "0vw 0vw 10vw 20vw"
                  }}
                >
                  Geef feedback
                </Button>
              </NavLink>
            </div>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default WorkshopDetail;
