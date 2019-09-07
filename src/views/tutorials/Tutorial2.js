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
            Ook is gedetailleerde informatie te vinden in deze app. Dit is
            simpel te doen te klikken op waar je interesse hebt.
            <br />
            <br />
            Wil je vervolgens weer terug naar de het hoofdmenu? Druk dan op de
            “Pijl” knop lte vinden inks boven op het scherm.
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
