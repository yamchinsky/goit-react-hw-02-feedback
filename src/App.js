import React, { Component } from "react";
import Section from "./Components/section/Section";
import FeedbackOptions from "./Components/feedback/FeedbackOptions";
import Statistics from "./Components/statistics/Statistics";
import Notification from "./Components/notification/Notification";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = (evt) => {
    const { name } = evt.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  emptyData = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <>
        <Section>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.emptyData() ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              options={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
