import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import BackButton from "../../../components/BackButton";
import { Icon } from "semantic-ui-react";
import "./Program.css";

import { Subscribe } from "unstated";
import ProgramContainer from "../../../states/ProgramState";

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
  constructor() {
    super();
    this.state = {
      program: [
        {
          eventInfo: {
            time: "09:00",
            name: "Ontvangst",
            location: "Zaal 1",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          },
          speakerInfo: {
            image: "fgf",
            speaker: "Spreker : ",
            name: "Tamar Druppers",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          }
        },
        {
          eventInfo: {
            time: "09:00",
            name: "Ontvangst",
            location: "Zaal 1",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          },
          speakerInfo: {
            image: "",
            name: "",
            text: ""
          }
        },
        {
          eventInfo: {
            time: "10:00",
            name: "Ontvangst",
            location: "Zaal 2",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lacus et erat mattis, eget dapibus mauris convallis. Phasellus mollis tellus non nisl porttitor varius et et diam. Nulla in est nibh. Nunc ullamcorper ornare urna quis laoreet. Pellentesque non rhoncus quam, sed facilisis odio. Morbi nec turpis tincidunt, porttitor eros id, dictum augue. Aenean sit amet interdum eros, ut rhoncus purus. Curabitur at lorem id urna tristique mattis in quis ante. Ut fringilla aliquet libero et lobortis. Ut ornare libero in congue egestas. Vestibulum elementum egestas ex feugiat suscipit. Morbi sed nunc feugiat, molestie sem ut, consequat mauris. In ornare leo et libero tempus, in feugiat enim volutpat. Phasellus euismod, mauris condimentum pellentesque malesuada, quam est sagittis purus, ac laoreet leo sem non dolor. Quisque tortor orci, pretium quis lectus at, volutpat rutrum sem. Phasellus ultrices libero eget tellus ullamcorper, quis scelerisque lacus convallis.`
          },
          speakerInfo: {
            image: "fgf",
            speaker: "Spreker : ",
            name: "Jason Gawke",
            text: "abdfsdfdsfsdfdsfsdf"
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <NavLink to="/menu">
          <BackButton />
        </NavLink>

        <h1 style={{ textAlign: "center" }}>Programma</h1>
        {this.state.program.map(programDetail => (
          <Subscribe to={[ProgramContainer]}>
            {programState => (
              <div
                className="listItems"
                key={programDetail.time}
                onClick={() =>
                  programState.setProgram(
                    programDetail.eventInfo,
                    programDetail.speakerInfo
                  )
                }
              >
                {
                  <div>
                    <NavLink to="/program-details">
                      <p style={styles.time}>
                        {programDetail.eventInfo.time} -{" "}
                        {programDetail.eventInfo.name}
                      </p>
                      <Icon name="angle right" style={styles.arrow} />
                      <div style={styles.infoDiv}>
                        <p style={styles.text}>
                          Locatie : {programDetail.eventInfo.location}
                        </p>
                        <p style={styles.text}>
                          {programDetail.speakerInfo.speaker}{" "}
                          {programDetail.speakerInfo.name}
                        </p>
                      </div>
                    </NavLink>
                  </div>
                }
              </div>
            )}
          </Subscribe>
        ))}
      </div>
    );
  }
}

export default Program;
