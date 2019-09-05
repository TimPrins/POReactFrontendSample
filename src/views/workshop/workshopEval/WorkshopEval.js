import React, { Component } from "react";
import HeaderEmpty from "../../../components/HeaderEmpty";

import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Succes from "./components/Succes";

import "./WorkshopEval.css";

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

  sendData(payload) {
    console.log(JSON.stringify(payload));
    fetch("https://p-o-dagen-api.herokuapp.com/workshop-eval", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(payload), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  }

  renderComponent() {
    // eslint-disable-next-line
    switch (this.state.step) {
      case 1:
        return <Part1 nextStep={this.nextStep} />;
      case 2:
        return (
          <Part2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            sendData={this.sendData}
          />
        );
      case 3:
        return <Succes prevStep={this.prevStep} />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderEmpty lastPage="/workshop-detail" />
        <div style={{ marginTop: "25vh" }}></div>
        <div style={styles.textDiv}>{this.renderComponent()}</div>
      </React.Fragment>
    );
  }
}

export default WorkshopEval;
