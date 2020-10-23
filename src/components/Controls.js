import React, { useState } from "react";
import Button from "./Button";

const Controls = ({
  modifier,
  setModifier,
  method,
  setMethod,
  fullScreen,
  setFullScreen,
  generateNewImage,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <div className="ControlsMenuButton">
        <Button
          title={"Options"}
          selectedCondition={menuOpen}
          selectedText={"Close"}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <div className={`Controls ${menuOpen ? "show" : "hide"}`}>
        <div>
          <h3>Modifier (1-99):</h3>
          <input
            type="number"
            value={modifier}
            min="1"
            max="99"
            onChange={handleModifierValueInputChange}
            maxLength="2"
            size="3"
          ></input>
        </div>

        <div>
          <h3>Method:</h3>
          <Button
            title={"CSS Gradient"}
            selectedCondition={method === "gradient"}
            onClick={() => setMethod("gradient")}
          />
          <Button
            title={"Div Elements"}
            selectedCondition={method === "div"}
            onClick={() => setMethod("div")}
          />
          <Button
            title={"SVG Base64"}
            selectedCondition={method === "svg"}
            onClick={() => setMethod("svg")}
          />
        </div>

        <div>
          <h3>Full Screen:</h3>
          <Button
            title={"Enable"}
            selectedCondition={fullScreen}
            onClick={() => setFullScreen(true)}
          />
          <Button
            title={"Disable"}
            selectedCondition={!fullScreen}
            onClick={() => setFullScreen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Controls;
