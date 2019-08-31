import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../components/BackButton";

import { Subscribe } from "unstated";
import ProgramContainer from "../../states/ProgramState";

import SpeakerImage from "../../assets/Program/Speaker.png";

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
        <NavLink to="/program">
          <BackButton />
        </NavLink>
        <Subscribe to={[ProgramContainer]}>
          {programState => (
            <div>
              <img src={SpeakerImage} alt="" style={styles.speakerImage} />
              <div style={styles.textDiv}>
                <h1 style={styles.title}>
                  {programState.state.speakerInfo.name}
                </h1>
                <p>{programState.state.speakerInfo.text}</p>
              </div>
            </div>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default ProgramDetail;
