/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconJamIconsFilledCircleF8 = ({ color = "#EFD9F9", className }) => {
  return (
    <svg
      className={`icon-jam-icons-filled-circle-f-8 ${className}`}
      fill="none"
      height="6"
      viewBox="0 0 7 6"
      width="7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_36_1848)">
        <path
          className="path"
          d="M3.60352 5.51636C2.22277 5.51636 1.10352 4.39711 1.10352 3.01636C1.10352 1.63561 2.22277 0.516357 3.60352 0.516357C4.98427 0.516357 6.10352 1.63561 6.10352 3.01636C6.10352 4.39711 4.98427 5.51636 3.60352 5.51636Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_36_1848">
          <rect className="rect" fill="white" height="6" transform="translate(0.603516 0.00012207)" width="6" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconJamIconsFilledCircleF8.propTypes = {
  color: PropTypes.string,
};
