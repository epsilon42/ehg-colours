import React from "react";

const Controls = ({
  modifier,
  setModifier,
  method,
  setMethod,
  fullScreen,
  setFullScreen,
  generateNewImage,
}) => {
  const handleModifierValueInputChange = (e) => {
    if (e.target.value > 99) {
      setModifier(99);
    } else if (e.target.value < 1) {
      setModifier(1);
    } else {
      setModifier(e.target.value);
    }
  };

  return (
    <div className="Controls">
      <div>
        <h3>Modifier:</h3>
        <input
          type="number"
          value={modifier}
          min="1"
          max="99"
          onChange={handleModifierValueInputChange}
          maxLength="2"
        ></input>
      </div>

      <div>
        <h3>Method:</h3>
        <button
          className={`${method === "gradient" ? "selected" : ""}`}
          onClick={() => setMethod("gradient")}
        >
          CSS Gradient
        </button>
        <button
          className={`${method === "div" ? "selected" : ""}`}
          onClick={() => setMethod("div")}
        >
          DIV Elements
        </button>
        <button
          className={`${method === "svg" ? "selected" : ""}`}
          onClick={() => setMethod("svg")}
        >
          SVG Base64
        </button>
      </div>

      <div>
        <h3>Full Screen:</h3>
        <button
          className={`${fullScreen ? "selected" : ""}`}
          onClick={() => setFullScreen(true)}
        >
          Enable
        </button>
        <button
          className={`${!fullScreen ? "selected" : ""}`}
          onClick={() => setFullScreen(false)}
        >
          Disable
        </button>
      </div>
    </div>
  );
};

export default Controls;
