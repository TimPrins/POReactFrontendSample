import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../components/BackButton";
import ContactImage from "../assets/Contact.png";

const styles = {
  contactImage: {
    position: "relative",
    width: "100vw",
    margin: "0 0 0 0"
  },
  imageTitle: {
    position: "absolute",
    bottom: "2.5vh",
    left: "5vw",
    fontSize: "3.5vh"
  },
  container: {
    position: "relative",
    textAlign: "center",
    color: "white"
  },
  textDiv: {
    margin: "8vw",
    fontSize: "4vw"
  }
};

class ProgramDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavLink to="/menu">
          <BackButton />
        </NavLink>

        <div style={styles.container}>
          <img src={ContactImage} alt="" style={styles.contactImage} />
          <p style={styles.imageTitle}>Contact</p>
        </div>
        <div style={styles.textDiv}>
          <p>
            Voor vragen en / of opmerkingen kan je Tamar bellen op onderstaand
            nummer.
            <br />
            <br />
            Tamar Druppers: 06-36590148
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default ProgramDetails;
