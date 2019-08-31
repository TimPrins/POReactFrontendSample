import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../components/BackButton";

import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Succes from "./Succes";

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

class GenericEvaluation extends Component {
  state = { step: 1 };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  sendData(payload){
    console.log(JSON.stringify(payload));
    fetch("https://p-o-dagen-api.herokuapp.com/generic-eval", {
      method: "POST", // or 'PUT'
      body: {location: "tim"}, // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
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
        return (
          <Part3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendData={this.sendData}
          />
        );
      case 4:
        return <Succes prevStep={this.prevStep} />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavLink to="/menu">
          <BackButton />
        </NavLink>
        <div style={styles.textDiv}>{this.renderComponent()}</div>
      </React.Fragment>
    );
  }
}

export default GenericEvaluation;
