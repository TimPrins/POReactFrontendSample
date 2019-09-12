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
  text: {
    fontSize: "4.5vw",
    margin: "6vw"
  },
  textList: {
    fontSize: "4.5vw",
    margin: "0vw 0vw 0vw 6vw"
  },
  boldText: {
    fontWeight: "900",
    fontSize: "4.5vw",
    margin: "0vw 0vw 6vw 6vw"
  }
};

class Introduction extends Component {
  render() {
    return (
      <React.Fragment>
      <div style={{
                        padding: "0 0 5vh 0"
                      }}> 
        <Header lastPage="/" />
        <p style={styles.welcome}>Welkom op de P&O Dagen Rijk</p>
        <Subscribe to={[AppState]}>
          {appState => <h1 style={styles.city}>{appState.state.location}!</h1>}
        </Subscribe>
        <p style={styles.text}>
          In de P&O dagen app vindt je alle benodigde informatie om volledig
          van het event te kunnen genieten en meer te weten te komen over het centrale
          thema:
        </p>
        <h1 style={styles.boldText}>Organisatie Ontwikkeling.</h1>

        <p style={styles.textList}>
          Bekijk het programma via{" "}
          <Icon
            style={{ margin: "0vw 7vw 0vw 0vw", float: "right" }}
            name="calendar outline"
          />
        </p>
        <p style={styles.textList}>
          Bekijk de workshops via{" "}
          <Icon
            style={{ margin: "0vw 7vw 0vw 0vw", float: "right" }}
            name="eye"
          />
        </p>
        <p style={styles.textList}>
          Bekijk de plattegrond via{" "}
          <Icon
            style={{ margin: "0vw 7vw 0vw 0vw", float: "right" }}
            name="map marker alternate"
          />
        </p>
        <p style={styles.textList}>
          Hulp nodig? Zie dan{" "}
          <Icon
            style={{ margin: "0vw 7vw 0vw 0vw", float: "right" }}
            name="mail"
          />
        </p>

        <p style={styles.text}>Succes!</p>
        <NavLink to="/tutorial-1">
          <Button
            color="orange"
            content="Hoe werkt de app?"
            style={{ backgroundColor: "#FFA304", margin: "0vw 0vw 0vw 4.5vw" }}
          />
        </NavLink>

        <NavLink to="/menu">
          <Button
            color="orange"
            content="Naar de app"
            style={{
              backgroundColor: "#FFA304",
              float: "right",
              margin: "0vw 4.5vw 0vw 0vw"
            }}
          />
        </NavLink>
    </div>
      </React.Fragment>
    );
  }
}

export default Introduction;
