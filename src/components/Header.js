import React from "react";
import Logo from "../assets/LogoRijk.png";

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
    backgroundColor: "#fff"
  }
};

const Header = props => (
  <div style={styles.headerDiv}>
    <img src={Logo} alt="" style={styles.logo} />
  </div>
);

export default Header;
