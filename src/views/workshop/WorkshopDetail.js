import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { Button } from "semantic-ui-react";

import WorkshopImage from "../../assets/Workshops/Detail.png";

import { Subscribe } from "unstated";
import WorkshopsContainer from "../../states/WorkshopState";

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
        <NavLink to="/workshops">
          <BackButton />
        </NavLink>
        <Subscribe to={[WorkshopsContainer]}>
          {workshopState => (
            <div>
              <div style={styles.container}>
                <img
                  src={WorkshopImage}
                  alt=""
                  style={styles.programDetailImage}
                />
                <p style={styles.imageTitle}>
                  {workshopState.state.workshopInfo.title}
                </p>
              </div>
              <div style={styles.textDiv}>
                <p>{workshopState.state.workshopInfo.text}</p>
                <p style={styles.redText}>
                  Locatie : {workshopState.state.workshopInfo.location}
                </p>
                <p style={styles.redText}>
                  Spreker : {workshopState.state.workshopInfo.leader}
                </p>
              </div>
              <NavLink to="/workshop-evaluation">
                <Button
                  color="orange"
                  style={{
                    backgroundColor: "#FFA304",
                    width: "60vw",
                    margin: "0vw 0vw 0vw 20vw"
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
