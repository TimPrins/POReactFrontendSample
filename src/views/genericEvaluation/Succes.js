import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";

const styles = {
  icon: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    color: "#FFA304"
  },
  button: {
    marginLeft: "50%",
    transform: "translateX(-50%)"
  }
};

class Succes extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "80vw" }}>
          <Icon
            name="check circle outline"
            size="massive"
            style={styles.icon}
          />
          <h1 style={{ textAlign: "center" }}>
            Bedankt! We hebben je feedback ontvangen.
          </h1>
          <NavLink to="/menu">
            <Button style={styles.button}>Terug</Button>
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Succes;
