import React from "react";
import "./Outcome.css";

const Outcome = ({ count }) => {
  return (
    <p className="outcome">
      Ilość kliknięć: <span className="count-digit">{count}</span>
    </p>
  );
};

export default Outcome;
