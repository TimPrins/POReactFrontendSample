import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

import Header from "../components/Header";

import { Subscribe } from "unstated";
import AppState from "../states/AppState";

const styles = {
  welcome: {
    fontSize: "6.5vw",
    textAlign: "center"
  },
  city: {
    fontWeight: "900",
    fontSize: "6.5vw",
    textAlign: "center"
  },
  container: {
    width: "80vw",
    margin: "3vw 10vw"
  },
  button: {
    width: "34vw",
    float: "left",
    height: "34vw",
    margin: "3vw",
    position: "static",
    borderRadius: "1vw"
  },
  icon: {
    margin: "4vw 0vw 0vw 6vw",
    padding: "0vw 0 0 0 ",
    fontSize: "18vw",
    opacity: "0.6",
    color: "#000"
  },
  buttonText: {
    fontSize: "5vw",
    margin: "3vw 0 0 0",
    textAlign: "center",
    color: "#000",
    opacity: "0.6",
    lineHeight: "3vw"
  },
  evalButton: {
    backgroundColor: "#FFA304",
    width: "60vw",
    margin: "5vw 20vw"
    // fontSize: "4vw"
  },
  marginBottom:{
    padding: "0 0 5vh 0"
  }
};
class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <Header lastPage="/introduction" />
        <Subscribe to={[AppState]}>
          {appState => (
            <React.Fragment>
              <p style={styles.welcome}>Welkom op de P&O Dagen Rijk</p>
              <h1 style={styles.city}>{appState.state.location}!</h1>
              <div style={styles.container}>
                <NavLink to="/program">
                  <div style={styles.button}>
                    <div
                      style={{
                        backgroundColor: "#0D50A1",
                        width: "100%",
                        height: "100%",
                        borderRadius: "5vw"
                      }}
                    >
                      <Icon
                        name="calendar alternate outline"
                        size="big"
                        style={styles.icon}
                      />
                      <p style={styles.buttonText}>Programma</p>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/map">
                  <div style={styles.button}>
                    <div
                      style={{
                        backgroundColor: "#357720",
                        width: "100%",
                        height: "100%",
                        borderRadius: "5vw"
                      }}
                    >
                      <Icon
                        name="map marker alternate"
                        size="big"
                        style={styles.icon}
                      />
                      <p style={styles.buttonText}>Plattegrond</p>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/workshops">
                  <div style={styles.button}>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#EB0366",
                        width: "100%",
                        height: "100%",
                        borderRadius: "5vw"
                      }}
                    >
                      <Icon name="eye" size="big" style={styles.icon} />
                      <p style={styles.buttonText}>Workshops</p>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/contact">
                  <div style={styles.button}>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#FFA304",
                        width: "100%",
                        height: "100%",
                        borderRadius: "5vw"
                      }}
                    >
                      <Icon name="mail" size="big" style={styles.icon} />
                      <p style={styles.buttonText}>Contact</p>
                    </div>
                  </div>
                </NavLink>
              </div>

              <NavLink to="/generic-evaluation">
                <Button
                  color="orange"
                  content="Evaluatie"
                  size="big"
                  // style={{
                  //   backgroundColor: "#FFA304",
                  //   float: "right",
                  //   margin: "0vw 4.5vw 0vw 0vw"
                  // }}
                  style={styles.evalButton}
                />
              </NavLink>
            </React.Fragment>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Menu;
