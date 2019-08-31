import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form, Radio } from "semantic-ui-react";

import { Subscribe } from "unstated";
import GenericEvalState from "../../states/GenericEvalState";

const numbers = ["1", "2", "3", "4", "5"];

class Part1 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });
  handleChange2 = (e, { value }) => this.setState({ value2: value });
  handleChange3 = (e, { value }) => this.setState({ value3: value });

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[GenericEvalState]}>
          {workshopState => (
            <Form>
              <p className="question">Vraag 1</p>
              <Form.Group inline className="center">
                {numbers.map(number => (
                  <Radio
                    name="Question1"
                    value={number}
                    checked={this.state.value === number}
                    onChange={this.handleChange}
                  />
                ))}
              </Form.Group>
              <label className="left">Totaal oneens</label>
              <label className="right">Totaal eens</label>
              <br />
              <p className="question">Vraag 2</p>
              <Form.Group inline className="center">
                {numbers.map(number => (
                  <Radio
                    className="radio"
                    name="Question2"
                    value={number}
                    checked={this.state.value2 === number}
                    onChange={this.handleChange2}
                  />
                ))}
              </Form.Group>
              <label className="left">Totaal oneens</label>
              <label className="right">Totaal eens</label>
              <br />
              <p className="question">Vraag 3</p>
              <Form.Group inline className="center">
                {numbers.map(number => (
                  <Radio
                    name="Question3"
                    value={number}
                    checked={this.state.value3 === number}
                    onChange={this.handleChange3}
                  />
                ))}
              </Form.Group>
              <label className="left">Totaal oneens</label>
              <label className="right">Totaal eens</label>
              <br />
              <Button
                basic
                color="orange"
                style={{
                  backgroundColor: "#FFA304",
                  width: "30vw",
                  margin: "10vw 0vw 0vw 50vw"
                }}
                onClick={() => {
                  workshopState.setGenericEval1(
                    this.state.value,
                    this.state.value2,
                    this.state.value3
                  );
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

export default Part1;
