import { Container } from "unstated";

class WorkshopContainer extends Container {
  state = {
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: ""
  };

  setWorkshop(workshopInfo) {
    this.setState({
      workshopInfo: workshopInfo
    });
  }

  setGenericEval1(question1, question2, question3) {
    this.setState({
      question1: question1,
      question2: question2,
      question3: question3
    });
  }
  setGenericEval2(question4, question5, question6) {
    this.setState({
      question4: question4,
      question5: question5,
      question6: question6
    });
  }
  setGenericEval3(question7) {
    this.setState({
      question7: question7
    });
  }
}

export default WorkshopContainer;
