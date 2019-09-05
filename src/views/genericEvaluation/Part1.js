import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form, Radio, Dropdown } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";

const options = [
  {
    value: "Ministerie van AZ",
    key: "Ministerie van AZ",
    text: "Ministerie van AZ"
  },
  {
    value: "Ministerie van BuZa",
    key: "Ministerie van BuZa",
    text: "Ministerie van BuZa"
  },
  {
    value: "Ministerie van BZK",
    key: "Ministerie van BZK",
    text: "Ministerie van BZK"
  },
  {
    value: "Ministerie van Def",
    key: "Ministerie van Def",
    text: "Ministerie van Def"
  },
  {
    value: "Ministerie van EZ",
    key: "Ministerie van EZ",
    text: "Ministerie van EZ"
  },
  {
    value: "Ministerie van Fin",
    key: "Ministerie van Fin",
    text: "Ministerie van Fin"
  },
  {
    value: "Ministerie van I&M ",
    key: "Ministerie van I&M ",
    text: "Ministerie van I&M "
  },
  {
    value: "Ministerie van OCW ",
    key: "Ministerie van OCW ",
    text: "Ministerie van OCW "
  },
  {
    value: "Ministerie van SZW ",
    key: "Ministerie van SZW ",
    text: "Ministerie van SZW "
  },
  {
    value: "Ministerie van V&J ",
    key: "Ministerie van V&J ",
    text: "Ministerie van V&J "
  },
  {
    value: "Ministerie van VWS ",
    key: "Ministerie van VWS  ",
    text: "Ministerie van VWS  "
  },
  {
    value: "Belastingdienst ",
    key: "Belastingdienst ",
    text: "Belastingdienst "
  },
  {
    value: "IND  ",
    key: "IND  ",
    text: "IND  "
  },
  {
    value: "NVWA  ",
    key: "NVWA  ",
    text: "NVWA  "
  },
  {
    value: "OM  ",
    key: "OM  ",
    text: "OM  "
  },
  {
    value: "Raad voor de Kinderbescherming  ",
    key: "Raad voor de Kinderbescherming  ",
    text: "Raad voor de Kinderbescherming  "
  },
  {
    value: "Raad voor de Rechtspraak  ",
    key: "Raad voor de Rechtspraak  ",
    text: "Raad voor de Rechtspraak  "
  },
  {
    value: "Rijkswaterstaat  ",
    key: "Rijkswaterstaat  ",
    text: "Rijkswaterstaat  "
  },
  {
    value: "Anders  ",
    key: "Anders  ",
    text: "Anders  "
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
              <p className="question">
                1. Ben je naar de P&O dagen in <br />
                {appState.state.location} geweest?
              </p>
              <Form.Group inline className="center">
                <Radio
                  value={"Ja"}
                  checked={this.state.question1 === "Ja"}
                  onChange={this.setQuestion1}
                  label={"Ja"}
                />

                <Radio
                  value={"Nee"}
                  checked={this.state.question1 === "Nee"}
                  onChange={this.setQuestion1}
                  label={"Nee"}
                />
              </Form.Group>

              <p className="question">
                2. Bij welke organisatie ben je werkzaam?
              </p>
              <br />
              <Form.Group inline>
                <Dropdown
                  inline
                  scrolling
                  options={options}
                  placeholder="Klik hier om je onderdeel te kiezen"
                  header="Kies je onderdeel uit de onderstaande lijst"
                  onChange={this.setQuestion2}
                />
              </Form.Group>
              <br />

              <p className="question">
                3. Ben je in je dagelijkse functie eerstelijns P&O-adviseur?
              </p>
              <Form.Group inline className="center">
                <Radio
                  value={"Ja"}
                  checked={this.state.question3 === "Ja"}
                  onChange={this.setQuestion3}
                  label={"Ja"}
                />

                <Radio
                  value={"Nee"}
                  checked={this.state.question3 === "Nee"}
                  onChange={this.setQuestion3}
                  label={"Nee"}
                />
              </Form.Group>
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
                  appState.setGenericEval1(
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
