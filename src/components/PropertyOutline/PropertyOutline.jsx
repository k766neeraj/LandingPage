/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyOutline = ({ className, divClassName, text = "Text" }) => {
  return (
    <div className={`property-outline ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </div>
  );
};

PropertyOutline.propTypes = {
  text: PropTypes.string,
};
