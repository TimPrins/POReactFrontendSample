import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Header from "../../../components/Header";
import { Icon, Button } from "semantic-ui-react";
import "./Program.css";

import { Subscribe } from "unstated";
import AppState from "../../../states/AppState";

const styles = {
  title: {
    fontSize: "10vw",
    textAlign: "center",
    width: "100vw",
    padding: "4vh",
    backgroundColor: "#fff",
    position: "fixed",
    margin: "-3vh 0 0 0"
  },
  time: {
    margin: "0vw 5vw 0 10vw",
    padding: "4vw 0 0 0",
    fontSize: "4vw",
    fontWeight: "700"
  },
  infoDiv: { padding: "0 0 0 20vw" },
  text: { margin: 0, padding: 0 },
  arrow: {
    float: "right",
    margin: "0vw 10vw 10vw 0vw",
    padding: 0
  }
};

class Program extends Component {
  render() {
    return (
      <div>
        <Header lastPage="/menu" style={{position: "fixed"}}/>

        <h1 style={{ textAlign: "center" }}>Programma</h1>

        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              {appState.state.eventsArray.map(programDetail => (
                <div
                  className="listItems"
                  key={programDetail.time}
                  onClick={() =>
                    appState.setProgram(
                      programDetail.eventInfo,
                      programDetail.speakerInfo
                    )
                  }
                >
                  {
                    <div>
                      <NavLink to={!programDetail.eventInfo.button &&("/program-details")}>
                        <p style={styles.time}>
                          {programDetail.eventInfo.time} -{" "}
                          {programDetail.eventInfo.name}
                        </p>
                        {programDetail.speakerInfo && (
                          <Icon name="angle right" style={styles.arrow} />
                        )}
                        <div style={styles.infoDiv}>
                          {programDetail.speakerInfo && (
                            <div>
                              <p style={styles.text}>
                                Locatie : {programDetail.eventInfo.location}
                              </p>
                              <p style={styles.text}>
                                {programDetail.speakerInfo.speaker}{" "}
                                {programDetail.speakerInfo.name}
                              </p>
                            </div>
                          )}
                          {programDetail.eventInfo.button && (
                            <div
                              style={{
                                height: "15vw",
                                width: "100vw"
                              }}
                            >
                              <NavLink to="/workshops">
                                <Button
                                  color="orange"
                                  style={{
                                    backgroundColor: "#FFA304",
                                    width: "70vw",
                                    position: "absolute",
                                    left: "15vw",
                                    margin: "2vh 0"
                                  }}
                                >
                                  Naar workshop overzicht
                                </Button>
                              </NavLink>
                            </div>
                          )}
                        </div>
                      </NavLink>
                    </div>
                  }
                </div>
              ))}
            </div>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default Program;
