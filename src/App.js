import React, { Component } from "react";
import { FeedbackListContainer } from "./Components/Feedback/FeedbackListStyled";
import PropTypes from "prop-types";

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

  render() {
    return (
      <>
        <FeedbackListContainer className="main-container">
          <h1 className="feedback-title">Please leave feedback</h1>
          <li className="feedback-buttons-container">
            {Object.keys(this.state).map((key) => (
              <button
                key={key}
                type="button"
                className="btn"
                name={key}
                onClick={this.onLeaveFeedback}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </li>
          <h2 className="statistics-title">Statistics</h2>
          <ul className="statistics-list">
            {Object.keys(this.state).map((key) => (
              <li className="statistics-item">
                <p className="statistics-good">{key.toUpperCase()}</p>
                <span className="statistics-good-value">{this.state[key]}</span>
              </li>
            ))}

            <li className="statistics-item">
              <p className="statistics-total">Total:</p>
              <span className="statistics-total-value">
                {this.countTotalFeedback()}
              </span>
            </li>
            <li className="statistics-item">
              <p className="statistics-positive">Positive feedback:</p>
              <span className="statistics-positive-value">
                {this.countPositiveFeedbackPercentage()}%
              </span>
            </li>
          </ul>
        </FeedbackListContainer>
      </>
    );
  }
}

export default App;
