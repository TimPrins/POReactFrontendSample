import React, { Component } from "react";
import Header from "../../components/Header";

import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import Part8 from "./Part8";
import Part9 from "./Part9";
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

  sendData(payload) {
    console.log(JSON.stringify(payload));
    fetch("https://p-o-dagen-api.herokuapp.com/generic-eval", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(payload), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
      // credentials: "same-origin"
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  }

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
        return <Part2 nextStep={this.nextStep} />;
      case 3:
        return <Part3 nextStep={this.nextStep} />;
      case 4:
        return <Part4 nextStep={this.nextStep} />;
      case 5:
        return <Part5 nextStep={this.nextStep} />;
      case 6:
        return <Part6 nextStep={this.nextStep} />;
      case 7:
        return <Part7 nextStep={this.nextStep} />;
      case 8:
        return <Part8 nextStep={this.nextStep} />;
      case 9:
        return <Part9 nextStep={this.nextStep} sendData={this.sendData} />;
      case 10:
        return <Succes />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header lastPage="/menu" />
        <div style={styles.textDiv}>{this.renderComponent()}</div>
      </React.Fragment>
    );
  }
}

export default GenericEvaluation;
