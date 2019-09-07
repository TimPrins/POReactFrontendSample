import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form, Dropdown } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";

const options = [
  {
    value: "Interessant programma",
    key: "Interessant programma",
    text: "Interessant programma"
  },
  {
    value: "Interessante sprekers ",
    key: "Interessante sprekers ",
    text: "Interessante sprekers "
  },
  {
    value: "Interessante sessies ",
    key: "Interessante sessies ",
    text: "Interessante sessies "
  },
  {
    value: "Inspiratie opdoen",
    key: "Inspiratie opdoen",
    text: "Inspiratie opdoen"
  },
  {
    value: "Netwerk uitbreiden",
    key: "Netwerk uitbreiden",
    text: "Netwerk uitbreiden"
  },
  {
    value: "Anders",
    key: "Anders",
    text: "Anders"
  }
];

class Part2 extends Component {
  state = {};
  setQuestion = (e, { value }) => this.setState({ question4: value });
  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <Form>
              <p className="question">
                4. Wat is voor jou de belangrijkste reden om aanwezig te zijn op
                de P&O-dagen Rijk?
              </p>
              <Form.Group inline>
                <Dropdown
                  inline
                  multiple
                  options={options}
                  placeholder="Klik hier om je keuze te maken"
                  header="Meer keuzes mogelijk."
                  onChange={this.setQuestion}
                />
              </Form.Group>

              <Button
                color="orange"
                disabled={!this.state.question4}
                style={{
                  backgroundColor: "#FFA304",
                  width: "30vw",
                  margin: "10vw 0vw 0vw 50vw"
                }}
                onClick={() => {
                  appState.setGenericEval2(this.state.question4);
                  this.props.nextStep();
                }}
              >
                Verder
              </Button>
              {/* {appState.state.location +
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
                this.state.value} */}
            </Form>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}

export default Part2;
