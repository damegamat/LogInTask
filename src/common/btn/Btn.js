import React from "react";
import "./Btn.css";

const Btn = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick ? () => handleClick() : null} className="btn">
      {text}
    </button>
  );
};

export default Btn;
