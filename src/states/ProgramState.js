import { Container } from "unstated";

class ProgramContainer extends Container {
  state = {
    eventInfo: "",
    speakerInfo: ""
  };

  setProgram(eventInfo, speakerInfo) {
    this.setState({
      eventInfo: eventInfo,
      speakerInfo: speakerInfo
    });
  }
}

export default ProgramContainer;
