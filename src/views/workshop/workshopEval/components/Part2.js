import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import { Subscribe } from "unstated";
import WorkshopsContainer from "../../../../states/WorkshopState";

// const styles = {
//   textDiv: {
//     margin: "8vw",
//     fontSize: "4vw"
//   }
// };

class Part2 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value: value });

  render() {
    return (
      <Subscribe to={[WorkshopsContainer]}>
        {workshopState => (
          <React.Fragment>
            <Subscribe to={[WorkshopsContainer]}>
              {workshopState => (
                <Form>
                  <p>Vraag 4</p>
                  <Form.TextArea
                    label="Maximaal 100 woorden"
                    placeholder="Tell us more about you..."
                    onChange={this.handleChange}
                  />

                  <Button
                    color="orange"
                    basic
                    style={{
                      backgroundColor: "#FFA304",
                      width: "30vw"
                    }}
                    onClick={this.props.prevStep}
                  >
                    Terug
                  </Button>
                  <Button
                    basic
                    color="orange"
                    style={{
                      float: "right",
                      backgroundColor: "#FFA304"
                    }}
                    onClick={() => {
                      workshopState.setWorkshopEval2(this.state.value);
                      this.props.nextStep();
                    }}
                  >
                    Verzenden
                  </Button>
                </Form>
              )}
            </Subscribe>
          </React.Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Part2;
