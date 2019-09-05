import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../../../states/AppState";

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

class Part2 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <Form>
              <p style={styles.workshopTitle}>
                {appState.state.workshopInfo.title}
              </p>
              <p>Vraag 4</p>
              <Form.TextArea
                style={{ width: "80vw" }}
                label="Maximaal 100 woorden"
                placeholder="Plaats hier je feedback"
                onChange={this.handleChange}
              />

              {/* <Button
                    color="orange"
                    basic
                    style={{
                      backgroundColor: "#FFA304",
                      width: "30vw"
                    }}
                    onClick={this.props.prevStep}
                  >
                    Terug
                  </Button> */}
              <Button
                disabled={!this.state.value}
                color="orange"
                style={{
                  float: "right",
                  backgroundColor: "#FFA304"
                }}
                onClick={() => {
                  this.props.sendData({
                    location: appState.state.location,
                    question1: appState.state.question1,
                    question2: appState.state.question2,
                    question3: appState.state.question3,
                    question4: this.state.value
                  });
                  this.props.nextStep();
                }}
              >
                Verzenden
              </Button>
            </Form>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Part2;
