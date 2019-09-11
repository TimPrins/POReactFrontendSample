import React, { Component } from "react";
import Tutorial from "../../assets/Tutorial/Tutorial-1.png";
import styles from "./Styles";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import HeaderEmpty from "../../components/HeaderEmpty";

class Tutorial1 extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderEmpty />
        <div style={styles.jasjeZijnDiv}>
          <p style={styles.text}>
            In de app is het mogelijk om snel inzicht krijgen in wat de P&O dagen Rijk 2019
            allemaal heeft te bieden. Dit doe je door op de verschillende onderdelen in het
            hoofdmenu te klikken. Zoek je bijvoorbeeld je Workshop zaal, klik dan op de plattegrond.
          </p>
          <img src={Tutorial} alt="" style={styles.tutorial} />
          <NavLink to="/tutorial-2">
            <Button color="orange" content="Verder" style={styles.button} />
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Tutorial1;
