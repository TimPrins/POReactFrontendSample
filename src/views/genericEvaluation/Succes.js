import React, { Component } from "react";

import { Subscribe } from "unstated";
import GenericEvalState from "../../states/GenericEvalState";

class Succes extends Component {

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[GenericEvalState]}>
          {workshopState => (<div>
            <p>{workshopState.state.question1}</p>
            <p>{workshopState.state.question2}</p>
            <p>{workshopState.state.question3}</p>
            <p>{workshopState.state.question4}</p>
            <p>{workshopState.state.question5}</p>
            <p>{workshopState.state.question6}</p>
            <p>{workshopState.state.question7}</p></div>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Succes;
