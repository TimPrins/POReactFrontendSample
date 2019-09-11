import React, { Component } from "react";
import { Button, Form, Radio, Segment } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";

const numbers = [
  { number: "1", value: "Zeer goed" },
  { number: "2", value: "Goed" },
  { number: "3", value: "Voldoende" },
  { number: "4", value: "Slecht" },
  { number: "5", value: "n.v.t." }
];

class Part5 extends Component {
  state = {};
  setQuestion = (e, { value }) => this.setState({ question: value });
  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <Form>
              <p className="question">
                Hoe beoordeel je de keynote spreker Lidewey van der Sluis?
              </p>

              {numbers.map(number => (
                <Form.Field>
                  <Segment>
                    <Radio
                      style={{ clear: "both" }}
                      value={number.number}
                      label={number.value}
                      checked={this.state.question === number.number}
                      onChange={this.setQuestion}
                    />
                  </Segment>
                </Form.Field>
              ))}

              <Button
                color="orange"
                disabled={!this.state.question}
                style={{
                  backgroundColor: "#FFA304",
                  width: "30vw",
                  margin: "10vw 0vw 0vw 50vw"
                }}
                onClick={() => {
                  appState.setGenericEval5(this.state.question);
                  this.props.nextStep();
                }}
              >
                Verder
              </Button>
            </Form>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Part5;
