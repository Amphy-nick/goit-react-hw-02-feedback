import React from "react";
import "./App.css";
import Section from "./Components/Section";
import Feedback from "./Components/Feedback";
import Notification from "./Components/Notification";
import Statistics from "./Components/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  totalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  percents = () => {
    const goodViews = (this.state.good / this.totalFeedbacks()) * 100;
    return Math.round(goodViews);
  };
  render() {
    return (
      <div className="App">
        <Section
          title={"Please leave feedback"}
          children={
            <Feedback
              options={Object.keys(this.state)}
              click={this.btnHandler}
            ></Feedback>
          }
        ></Section>
        {this.totalFeedbacks() > 0 ? (
          <Section
            title={"Our Statistics"}
            children={
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.totalFeedbacks()}
                percentsApproving={this.percents()}
              ></Statistics>
            }
          ></Section>
        ) : (
          <Notification message={"No feedback given"}></Notification>
        )}
      </div>
    );
  }
}

export default App;
