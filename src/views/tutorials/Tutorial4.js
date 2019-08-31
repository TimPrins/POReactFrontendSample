import React, { Component } from "react";
import Tutorial from "../../assets/Tutorial/Tutorial-4.png";
import styles from "./Styles";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Tutorial4 extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={styles.text}>
          Gefeliciteerd! Je bent nu helemaal op de hoogte over hoe de app werkt.
          <br />
          <br />
          We wensen je veel nieuwe inzichten en inspiratie toe!
        </p>
        <img src={Tutorial} alt="" style={styles.tutorial} />
        <NavLink to="/menu">
          <Button
            color="orange"
            content="naar de app"
            style={styles.button}
          />
        </NavLink>
      </React.Fragment>
    );
  }
}

export default Tutorial4;
