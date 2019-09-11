import React, { Component } from "react";
import Tutorial from "../../assets/Tutorial/Tutorial-2.png";
import styles from "./Styles";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import HeaderEmpty from "../../components/HeaderEmpty";

class Tutorial2 extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderEmpty />
        <div style={styles.jasjeZijnDiv}>
          <p style={styles.text}>
            Zoals de vorige stap liet zien, navigeren in de app doe je door te klikken op waar je interesse naar uit gaat.
            <br />
            <br />
            Wil je vervolgens weer terug naar de het hoofdmenu? Druk dan op de
            “Pijl” knop links boven op het scherm.
          </p>
          <img src={Tutorial} alt="" style={styles.tutorial} />
          <NavLink to="/tutorial-3">
            <Button color="orange" content="Verder" style={styles.button} />
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Tutorial2;
