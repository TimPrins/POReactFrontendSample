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
              <p className="question">Heb je nog overige feedback die graag met ons deelt</p>
              <Form.TextArea
                // label="Maximaal 100 woorden"
                placeholder="Heb je verder nog opmerkingen?"
                onChange={this.handleChange}
                style={{ width: "80vw" }}
              />
              {/* <p>
                {appState.state.location +
                  appState.state.genericEval1.question1 +
                  appState.state.genericEval1.question2 +
                  appState.state.genericEval1.question3 +
                  appState.state.genericEval2.question +
                  appState.state.genericEval3.question +
                  appState.state.genericEval4.question +
                  appState.state.genericEval5.question +
                  appState.state.genericEval6.question +
                  appState.state.genericEval7.question +
                  appState.state.genericEval8.question +
                  this.state.value}
              </p> */}
              <Button
                color="orange"
                disabled={!this.state.value}
                style={{
                  float: "right",
                  backgroundColor: "#FFA304"
                }}
                onClick={() => {
                  this.props.sendData(
                    //   {
                    //   location: appState.state.location,
                    //   question1: appState.state.genericEval1.question1,
                    //   question2: appState.state.genericEval1.question2,
                    //   question3: appState.state.genericEval1.question3,
                    //   question4: appState.state.genericEval2.question,
                    //   question5: appState.state.genericEval3.question,
                    //   question6: appState.state.genericEval4.question,
                    //   question7: appState.state.genericEval5.question,
                    //   question8: appState.state.genericEval6.question,
                    //   question9: appState.state.genericEval7.question,
                    //   question10: appState.state.genericEval8.question,
                    //   question11: this.state.value
                    // }
                    {
                      location: appState.state.location,
                      question1: appState.state.genericEval1.question1,
                      question2: appState.state.genericEval1.question2,
                      question3: appState.state.genericEval1.question3,
                      question4: appState.state.genericEval2.question,
                      question5: appState.state.genericEval3.question,
                      question6: appState.state.genericEval4.question,
                      question7: appState.state.genericEval5.question,
                      question8: appState.state.genericEval6.question,
                      question9: appState.state.genericEval7.question,
                      question10: appState.state.genericEval8.question,
                      question11: this.state.value
                    }
                  );
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
