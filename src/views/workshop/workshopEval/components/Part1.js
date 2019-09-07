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
  setQuestion1 = (e, { value }) => this.setState({ question1: value });

  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <Form>
              <p style={styles.workshopTitle}>
                {appState.state.workshopInfo.title}
              </p>
              <p className="question">
                1. In welke Ronde heb je de workshop gevolgd?{" "}
              </p>
              <Form.Group inline className="center">
                <Radio
                  value="Ronde 1"
                  checked={this.state.question1 === "Ronde 1"}
                  onChange={this.setQuestion1}
                  label="Ronde 1"
                />

                <Radio
                  value="Ronde 2"
                  checked={this.state.question1 === "Ronde 2"}
                  onChange={this.setQuestion1}
                  label="Ronde 2"
                />
              </Form.Group>
              <br />
              <p className="question">
                2. In welke mate voldeed de workshop aan je verwachting?
              </p>
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
