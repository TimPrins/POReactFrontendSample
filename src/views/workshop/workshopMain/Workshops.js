import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../components/Header";
import { Button, Card, Image } from "semantic-ui-react";

import "./Workshops.css";
import WorkshopImage from "../../../assets/Workshops/Detail.png";

import { Subscribe } from "unstated";
import AppState from "../../../states/AppState";

// let b = 2;

// function handleChange(e) {
//   b = e;
//   roundRender();
// }

// function roundRender(){
//   return b;
// }

class Workshops extends Component {
  // state = { round: 1 };

  // setRoundTo1 = () => {
  //   this.setState({ round: 1 });
  // };

  // setRoundTo2 = () => {
  //   this.setState({ round: 2 });
  // };
  render() {
    return (
      <div>
        <Header lastPage="/menu" />
        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              {appState.state.workshopsArray
                // .filter(obj => obj.round === this.state.round)
                .map(workshopDetail => (
                  <div className="margin" key={workshopDetail.location}>
                    <Card fluid>
                      <Card.Content>
                        <Image floated="left" src={WorkshopImage} />
                        <Card.Header>{workshopDetail.title}</Card.Header>
                        <Card.Meta>
                          <p style={{ color: "black" }}>
                            Locatie : {workshopDetail.location}
                          </p>
                        </Card.Meta>
                        <Card.Meta>
                          <p style={{ color: "black" }}>
                            Spreker : {workshopDetail.leader}
                          </p>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <NavLink to="/workshop-detail">
                          <div className="ui two buttons">
                            <Button
                              color="orange"
                              style={{ backgroundColor: "#FFA304" }}
                              onClick={() =>
                                appState.setWorkshop(workshopDetail)
                              }
                            >
                              Klik hier voor meer info!
                            </Button>
                          </div>
                        </NavLink>
                      </Card.Content>
                    </Card>
                  </div>
                ))}
            </div>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default Workshops;
