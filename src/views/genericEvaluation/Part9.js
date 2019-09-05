import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";

class Part5 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <Form>
              <p>Vraag 7</p>
              <Form.TextArea
                // label="Maximaal 100 woorden"
                placeholder="Heb je verder nog opmerkingen?"
                onChange={this.handleChange}
                style={{width:"80vw"}}
              />

              <Button
                color="orange"
                disabled={
                  !this.state.value
                }
                style={{
                  float: "right",
                  backgroundColor: "#FFA304"
                }}
                onClick={() => {
                  this.props.sendData({
                    location: appState.state.location,
                    question1: appState.state.genericEval1.question1,
                    question2: appState.state.genericEval1.question2,
                    question3: appState.state.genericEval1.question3,
                    question4: appState.state.genericEval2.question4,
                    question5: appState.state.genericEval2.question5,
                    question6: appState.state.genericEval2.question6,
                    question7: this.state.value
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

export default Part5;
