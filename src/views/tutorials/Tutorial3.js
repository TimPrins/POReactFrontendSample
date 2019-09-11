import React, { Component } from "react";
import Tutorial from "../../assets/Tutorial/Tutorial-3.png";
import styles from "./Styles";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import HeaderEmpty from "../../components/HeaderEmpty";

class Tutorial3 extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderEmpty />
        <div style={styles.jasjeZijnDiv}>
          <p style={styles.text}>
            We proberen elk jaar de P&O dagen Rijk interessanter te maken. Daar hebben we jouw feedback voor nodig. Het
            is mogelijk om direct je feedback te geven na het volgen van een
            workshop en je mening te delen in de generieke evaluatie. Dit kan je doen door op de knop “Feedback” te drukken
            onder een workshop en in het menu.
          </p>
          <img src={Tutorial} alt="" style={styles.tutorial} />
          <NavLink to="/tutorial-4">
            <Button color="orange" content="Verder" style={styles.button} />
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Tutorial3;
