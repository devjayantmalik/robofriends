import React from "react";
import PropTypes from "prop-types";

const RoboCard = ({ name, email, image }) => {
  return (
    <div className="robo-card">
      <img className="is-robo-image" alt="robots" loading="lazy" src={image} />
      <h3 className="is-robo-name">{name}</h3>
      <p className="is-robo-email">{email}</p>
    </div>
  );
};

RoboCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RoboCard;
