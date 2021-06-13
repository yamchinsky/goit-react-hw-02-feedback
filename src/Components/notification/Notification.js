import React from "react";
import PropTypes from "prop-types";
import { NotificationListContainer } from "./NotificationListStyled";

const Notification = ({ message }) => {
  return (
    <NotificationListContainer className="notification">
      {message}
    </NotificationListContainer>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
