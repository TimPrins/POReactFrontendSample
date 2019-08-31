import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { Button, Form, Radio } from "semantic-ui-react";

import { Subscribe } from "unstated";
import WorkshopsContainer from "../../../../states/WorkshopState";

// const styles = {
//   textDiv: {
//     margin: "8vw",
//     fontSize: "4vw"
//   }
// };

// const numbers = ["1", "2", "3", "4", "5"];

class Succes extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });
  handleChange2 = (e, { value }) => this.setState({ value2: value });
  handleChange3 = (e, { value }) => this.setState({ value3: value });

  render() {
    return (
      <Subscribe to={[WorkshopsContainer]}>
        {workshopState => (
          <React.Fragment>
            <p>{workshopState.state.question1}</p>
            <p>{workshopState.state.question2}</p>
            <p>{workshopState.state.question3}</p>
            <p>{workshopState.state.question4}</p>
            <h1>Succes</h1>
            <button onClick={this.props.prevStep}>Terug</button>
          </React.Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Succes;
