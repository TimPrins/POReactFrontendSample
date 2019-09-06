import { Container } from "unstated";

class AppState extends Container {
  state = {
    location: "",
    map: "",
    eventsArray: [],
    workshopsArray: [],
    eventInfo: "",
    workshopInfo: "",
    speakerInfo: "",
    genericEval1: "",
    genericEval2: "",
    genericEval3: "",
    genericEval4: "",
    genericEval5: "",
    genericEval6: "",
    genericEval7: "",
    genericEval8: "",
    workshopEval: "",
    route: ""
  };

  setCurrentRoute(route) {
    console.log("assdfsdf");
    this.setState({
      route: route
    });
  }

  setLocation(location, workshops, program, map) {
    this.setState({
      location: location,
      workshopsArray: workshops,
      eventsArray: program,
      map: map
    });
  }

  setProgram(eventInfo, speakerInfo) {
    this.setState({
      eventInfo: eventInfo,
      speakerInfo: speakerInfo
    });
  }

  setWorkshop(workshopInfo) {
    this.setState({
      workshopInfo: workshopInfo
    });
  }

  setGenericEval1(question1, question2, question3) {
    this.setState({
      genericEval1: {
        question1: question1,
        question2: question2,
        question3: question3
      }
    });
  }
  setGenericEval2(question) {
    this.setState({
      genericEval2: {
        question: question
      }
    });
  }
  setGenericEval3(question) {
    this.setState({
      genericEval3: {
        question: question
      }
    });
  }
  setGenericEval4(question) {
    this.setState({
      genericEval4: {
        question: question
      }
    });
  }
  setGenericEval5(question) {
    this.setState({
      genericEval5: {
        question: question
      }
    });
  }
  setGenericEval6(question) {
    this.setState({
      genericEval6: {
        question: question
      }
    });
  }
  setGenericEval7(question) {
    this.setState({
      genericEval7: {
        question: question
      }
    });
  }
  setGenericEval8(question) {
    this.setState({
      genericEval8: {
        question: question
      }
    });
  }

  setWorkshopEval(question1, question2, question3) {
    this.setState({
      workshopEval: {
        question1: question1,
        question2: question2,
        question3: question3
      }
    });
  }
}

export default AppState;
