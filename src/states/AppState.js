import { Container } from "unstated";

class AppState extends Container {
  state = {
    location: ""
  };

  setLocation(location) {
    this.setState({
        location: location
    });
  }
}

export default AppState;
