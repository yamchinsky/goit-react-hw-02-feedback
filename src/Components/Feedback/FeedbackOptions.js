import React from "react";
import PropTypes from "prop-types";
import { FeedbackListContainer } from "./FeedbackListStyled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackListContainer>
      {Object.keys(options).map((key, index) => (
        <button
          key={index}
          type="button"
          className="btn"
          name={key}
          onClick={onLeaveFeedback}
        >
          {key.toUpperCase()}
        </button>
      ))}
    </FeedbackListContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
