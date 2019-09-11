import React, { Component } from "react";
import ContactImage from "../assets/Contact.png";

import Header from "../components/Header";

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
        <Header lastPage="/menu" />
        <div style={styles.container}>
          <img src={ContactImage} alt="" style={styles.contactImage} />
          {/* <p style={styles.imageTitle}>Contact</p> */}
        </div>
        <div style={styles.textDiv}>
          <p>
            Voor vragen en / of opmerkingen over de P&O dagen Rijk 2019 kan je Tamar of Eline bellen op onderstaande
            nummers.
            <br />
            <br />
            Tamar Druppers: 06-36590148
            <br />
            Eline van der Veer: 06-15957883
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default ProgramDetails;
