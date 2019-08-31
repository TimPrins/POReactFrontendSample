import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

import { Subscribe } from "unstated";
import GenericEvalState from "../../states/GenericEvalState";

class Part3 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[GenericEvalState]}>
          {workshopState => (
            <Form>
              <p>Vraag 7</p>
              <Form.TextArea
                label="Maximaal 100 woorden"
                placeholder="Tell us more about you..."
                onChange={this.handleChange}
              />

              <Button
                basic
                color="orange"
                style={{
                  float: "right",
                  backgroundColor: "#FFA304"
                }}
                onClick={() => {
                  workshopState.setGenericEval3(this.state.value);
                  this.props.sendData({ location: "tim" });
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

export default Part3;
