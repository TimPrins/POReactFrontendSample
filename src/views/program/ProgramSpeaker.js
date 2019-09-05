import React, { Component } from "react";
import Header from "../../components/Header";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";

const styles = {
  textDiv: {
    margin: "8vw",
    fontSize: "4vw"
  },
  title: {
    fontSize: "8vw",
    fontWeight: "800",
    textAlign: "center"
  },
  speakerImage: {
    width: "50vw",
    margin: "0 25vw"
  }
};

class ProgramDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Header lastPage="/program-details" />
        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              <img src={appState.state.speakerInfo.image} alt="" style={styles.speakerImage} />
               {/* <img src={SpeakerImage} alt="" style={styles.speakerImage} /> */}
              <div style={styles.textDiv}>
                <h1 style={styles.title}>
                  {appState.state.speakerInfo.name}
                </h1>
                <p>{appState.state.speakerInfo.text}</p>
              </div>
            </div>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default ProgramDetail;
