import React, { Component } from "react";
import Tutorial from "../../assets/Tutorial/Tutorial-1.png";
import styles from "./Styles";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Tutorial1 extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={styles.text}>
          In de app kan je snel inzicht krijgen in wat de P&O dagen Rijk 2019
          allemaal heeft te bieden. Klik op de verschillende onderdelen in het
          hoofdmenu om meer informatie te krijgen over bijvoorbeeld de
          Plattegrond.
        </p>
        <img src={Tutorial} alt="" style={styles.tutorial} />
        <NavLink to="/tutorial-2">
          <Button color="orange" content="verder" style={styles.button} />
        </NavLink>
      </React.Fragment>
    );
  }
}

export default Tutorial1;
