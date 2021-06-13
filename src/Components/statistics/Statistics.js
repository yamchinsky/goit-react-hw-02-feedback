import React from "react";
import PropTypes from "prop-types";
import { StatisticListContainer } from "./StatisticListStyled";

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  options,
}) => {
  return (
    <StatisticListContainer className="statistics-list">
      <h2 className="statistics-title">Statistics</h2>
      {Object.keys(options).map((key, index) => (
        <li className="statistics-item" key={index}>
          <p className="statistics-names">{key.toUpperCase()}</p>
          <span className="statistics-names-value">{options[key]}</span>
        </li>
      ))}

      <li className="statistics-item">
        <p className="statistics-total">Total:</p>
        <span className="statistics-total-value">{countTotalFeedback()}</span>
      </li>
      <li className="statistics-item">
        <p className="statistics-positive">Positive feedback:</p>
        <span className="statistics-positive-value">
          {countPositiveFeedbackPercentage()}%
        </span>
      </li>
    </StatisticListContainer>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
