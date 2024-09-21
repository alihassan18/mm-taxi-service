import React from "react";
import "./NoData.css"; // Create this CSS file for styling

const NoData = ({ title }) => {
  return (
    <div className="no-data-container">
      <h2>{title}</h2>
      <p>Please check back later or try a different search.</p>
    </div>
  );
};

export default NoData;
