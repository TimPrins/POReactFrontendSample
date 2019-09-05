import React from "react";
import { Icon } from "semantic-ui-react";

const styles = {
  backButton: {
    // top: "0",
    padding: "5vw",
    // position: "fixed",
    color: "#000",
    opacity: "0.6",
    zIndex: "10000000"
  }
};
const BackButton = props => (
  <div style={styles.backButton}>
    <Icon name="arrow left" size="big" />
  </div>
);

export default BackButton;
