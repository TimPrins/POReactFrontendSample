import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../components/Header";
import { Button, Card, Image } from "semantic-ui-react";

import "./Workshops.css";
// import WorkshopImage from "../../../assets/Workshops/Detail.png";

import { Subscribe } from "unstated";
import AppState from "../../../states/AppState";

class Workshops extends Component {
  render() {
    return (
      <div>
        <Header lastPage="/menu" />
        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              {appState.state.workshopsArray.map(workshopDetail => (
                <div className="margin" key={workshopDetail.location}>
                  <Card fluid>
                    <Card.Content>
                      <Image floated="left" src={workshopDetail.smallImage} />
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
                            style={{
                              backgroundColor: "#FFA304"
                            }}
                            onClick={() => appState.setWorkshop(workshopDetail)}
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
