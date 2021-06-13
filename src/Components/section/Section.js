import React from "react";
import PropTypes from "prop-types";
import { SectionListContainer } from "./SectionListStyled";

const Section = ({ children }) => {
  return (
    <SectionListContainer className="main-container">
      <h1 className="title">Please leave feedback</h1>
      {children}
    </SectionListContainer>
  );
};

Section.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Section;
