import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form, Radio } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../../../states/AppState";

const numbers = ["1", "2", "3", "4", "5"];

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

class Part1 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });
  handleChange2 = (e, { value }) => this.setState({ value2: value });
  handleChange3 = (e, { value }) => this.setState({ value3: value });

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <Form>
              <p style={styles.workshopTitle}>
                {appState.state.workshopInfo.title}
              </p>
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
                color="orange"
                disabled={
                  !this.state.value + !this.state.value2 + !this.state.value3
                }
                style={{
                  backgroundColor: "#FFA304",
                  width: "30vw",
                  margin: "10vw 0vw 0vw 50vw"
                }}
                onClick={() => {
                  appState.setWorkshop(
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
