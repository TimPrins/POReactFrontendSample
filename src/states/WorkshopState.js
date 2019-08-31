import { Container } from "unstated";

class WorkshopContainer extends Container {
  state = {
    workshopInfo: "",
    question1: 0,
    question2: 0,
    question3: 0,
    question4: ""
  };

  setWorkshop(workshopInfo) {
    this.setState({
      workshopInfo: workshopInfo
    });
  }

  setWorkshopEval1(question1, question2, question3) {
    this.setState({
      question1: question1,
      question2: question2,
      question3: question3
    });
  }
  setWorkshopEval2(question4) {
    this.setState({
      question4: question4
    });
  }
}

export default WorkshopContainer;
