import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";
import "./CitySelector.css";

class CitySelector extends Component {
  render() {
    return (
      <React.Fragment>
        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              <NavLink
                to="/introduction"
                onClick={() => appState.setLocation("Den Haag")}
              >
                <div className="help">
                  <Button color="orange" className="buttonDH">
                    Den Haag
                  </Button>
                </div>
              </NavLink>
              <div className="help">
                <NavLink
                  to="/introduction"
                  onClick={() => appState.setLocation("Nieuwegein")}
                >
                  <Button color="orange" className="buttonNW">
                    Nieuwegein
                  </Button>
                </NavLink>
              </div>
            </div>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}
export default CitySelector;
