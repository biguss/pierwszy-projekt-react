import React from "react";
import "./Button.css";

const Button = ({ setCount }) => {
  return (
    <button
      className="button"
      onClick={() => setCount((prevCount) => prevCount + 1)}>
      Dodaj klik
    </button>
  );
};

export default Button;
