import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../../components/BackButton";

import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Succes from "./components/Succes";

import "./WorkshopEval.css";

import { Subscribe } from "unstated";
import WorkshopsContainer from "../../../states/WorkshopState";

const styles = {
  workshopTitle: {
    left: "5vw",
    fontSize: "3.5vh"
  },
  textDiv: {
    margin: "10vw",
    fontSize: "4vw"
  }
};

class WorkshopEval extends Component {
  state = { step: 1 };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  renderComponent() {
    // eslint-disable-next-line
    switch (this.state.step) {
      case 1:
        return <Part1 nextStep={this.nextStep} />;
      case 2:
        return <Part2 nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 3:
        return <Succes prevStep={this.prevStep} />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavLink to="/workshop-detail">
          <BackButton />
        </NavLink>
        <div style={styles.textDiv}>
          <Subscribe to={[WorkshopsContainer]}>
            {workshopState => (
              <p style={styles.workshopTitle}>
                {workshopState.state.workshopInfo.title}
              </p>
            )}
          </Subscribe>
          {this.renderComponent()}
        </div>
      </React.Fragment>
    );
  }
}

export default WorkshopEval;
