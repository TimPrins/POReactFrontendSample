import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form, Radio, Dropdown } from "semantic-ui-react";

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
const options = [
  {
    value: "Niet",
    key: "Niet",
    text: "Niet"
  },
  {
    value: "Klein beetje",
    key: "Klein beetje",
    text: "Klein beetje"
  },
  {
    value: "Klein beetje",
    key: "Klein beetje",
    text: "Klein beetje"
  },
  {
    value: "Zeer",
    key: "Zeer",
    text: "Zeer"
  },
  {
    value: "Zeer",
    key: "Zeer",
    text: "Zeer"
  }
];

const options2 = [
  {
    value: "Heel slecht",
    key: "Heel slecht",
    text: "Heel slecht"
  },
  {
    value: "Heel slecht",
    key: "Heel slecht",
    text: "Heel slecht"
  },
  {
    value: "Klein beetje",
    key: "Klein beetje",
    text: "Klein beetje"
  },
  {
    value: "Heel goed",
    key: "Heel goed",
    text: "Heel goed"
  },
  {
    value: "Heel goed",
    key: "Heel goed",
    text: "Heel goed"
  }
];

class Part1 extends Component {
  state = {};
  setQuestion1 = (e, { value }) => this.setState({ question1: value });
  setQuestion2 = (e, { value }) => this.setState({ question2: value });
  setQuestion3 = (e, { value }) => this.setState({ question3: value });

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
                <Dropdown
                  inline
                  options={options}
                  placeholder="Klik hier om je keuze te maken"
                  onChange={this.setQuestion2}
                />
              </Form.Group>
              <br />
              <p className="question">
                3. Wat vond je van de kwaliteit van de workshop?
              </p>
              <Form.Group inline className="center">
                <Dropdown
                  inline
                  options={options2}
                  placeholder="Klik hier om je keuze te maken"
                  onChange={this.setQuestion3}
                />
              </Form.Group>
              <br />
              <Button
                color="orange"
                disabled={
                  !this.state.question1 +
                  !this.state.question2 +
                  !this.state.question3
                }
                style={{
                  backgroundColor: "#FFA304",
                  width: "30vw",
                  margin: "10vw 0vw 0vw 50vw"
                }}
                onClick={() => {
                  appState.setWorkshop(
                    this.state.question1,
                    this.state.question2,
                    this.state.question3
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
