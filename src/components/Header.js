import React from "react";
import Logo from "../assets/LogoRijk.png";
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const styles = {
  logo: {
    display: "block",
    height: "15vh",
    marginLeft: "50%",
    transform: "translateX(-50%)"
  },
  headerDiv: {
    width: "100vw",
    height: "20vh",
    position: "fixed",
    backgroundColor: "#fff",
    zIndex: "100"
  },
  backButton: {
    top: "0",
    padding: "5vw",
    position: "fixed",
    color: "#000",
    opacity: "0.6",
    zIndex: "10000000"
  }
};

const Header = props => (
  <div>
    <div style={styles.headerDiv}>
      <div style={styles.backButton}>
        <NavLink to={props.lastPage}>
          <Icon name="arrow left" size="big" className="backbutton"/>
        </NavLink>
      </div>
      <img src={Logo} alt="" style={styles.logo} />
    </div>
    <div style={{ padding: "20vh 0 0 0" }}></div>
  </div>
);

export default Header;
