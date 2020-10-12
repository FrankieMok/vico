import React from "react";

const titleStyle = {
  textAlign: "center",
  marginBottom: "5rem",
};

const titleH4 = {
  fontSize: "2rem",
  letterSpacing: "2px",
  textTransform: "capitalize",
  marginBottom: "1rem",
};

function Title({ title }) {
  return (
    <div style={titleStyle}>
      <h4 style={titleH4}>{title}</h4>
    </div>
  );
}

export default Title;
