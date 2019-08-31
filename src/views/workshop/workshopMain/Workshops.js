import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import { Button, Card, Image } from "semantic-ui-react";

import "./Workshops.css";
import WorkshopImage from "../../../assets/Workshops/Detail.png";

import { Subscribe } from "unstated";
import WorkshopsContainer from "../../../states/WorkshopState";

// const styles = {};

class Workshops extends Component {
  constructor() {
    super();

    this.state = {
      workshops: [
        {
          title: "Jaser de vjezze pua",
          location: "Zaal 3",
          leader: "Jason Gawke, Tim Prins, Mauricius Nassau",
          text: "Soner"
        },
        {
          title: "Jaser de vjezze pua",
          location: "Zaal 2",
          leader: "Jason Gawke, Tim Prins, Mauricius Nassau",
          text: "Faaaaakin F & D dagen"
        },
        {
          title: "Jaser de vjezze pua",
          location: "Zaal 1",
          leader: "Jason Gawke, Tim Prins, Mauricius Nassau",
          text: "Son"
        },
        {
          title: "Jaser de vjezze pua",
          location: "Zaal 5",
          leader: "Jason Gawke, Tim Prins, Mauricius Nassau",
          text: "Son"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <NavLink to="/menu">
          <BackButton />
        </NavLink>
        {this.state.workshops.map(workshopDetail => (
          <Subscribe to={[WorkshopsContainer]}>
            {workshopState => (
              <div className="margin">
                <Card fluid>
                  <Card.Content>
                    <Image floated="left" src={WorkshopImage} />
                    <Card.Header>{workshopDetail.title}</Card.Header>
                    <Card.Meta><p style={{color: "black"}}>Locatie : {workshopDetail.location}</p></Card.Meta>
                    <Card.Meta><p style={{color: "black"}}>Spreker : {workshopDetail.leader}</p></Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <NavLink to="/workshop-detail">
                      <div className="ui two buttons">
                        <Button
                          color="orange"
                          style={{backgroundColor: "#FFA304"}}
                          onClick={() =>
                            workshopState.setWorkshop(workshopDetail)
                          }
                        >
                          Klik hier voor meer info!
                        </Button>
                      </div>
                    </NavLink>
                  </Card.Content>
                </Card>
              </div>
            )}
          </Subscribe>
        ))}
      </div>
    );
  }
}

export default Workshops;
