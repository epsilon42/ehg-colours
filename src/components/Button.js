import React from "react";

const Button = ({ selectedCondition, selectedText, onClick, title }) => {
  return (
    <button
      className={`${selectedCondition ? "selected" : ""}`}
      onClick={onClick}
    >
      {selectedCondition ? selectedText ?? title : title}
    </button>
  );
};

export default Button;
