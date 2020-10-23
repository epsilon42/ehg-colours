import React, { useState, useEffect } from "react";
import Pixel from "./components/Pixel";
import Row from "./components/Row";
import SvgImage from "./components/SvgImage";
import Controls from "./components/Controls";
import { chunkArray, generatePattern, generateAllColors } from "./functions";
import "./App.scss";

function App() {
  const [modifier, setModifier] = useState(32);
  const [calculatedArray, setCalculatedArray] = useState([]);
  const [method, setMethod] = useState("gradient");
  const [fullScreen, setFullScreen] = useState(true);

  const colorArray = generateAllColors();

  useEffect(() => {
    generateNewImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modifier]);

  const generateNewImage = (e) => {
    let colorArrayPatterned = generatePattern(colorArray, modifier).filter(
      (e) => e.length
    );
    let colorArrayChunked = chunkArray(colorArrayPatterned, 256);

    setCalculatedArray(colorArrayChunked);
  };

  return (
    <div className="App">
      <Controls
        modifier={modifier}
        setModifier={setModifier}
        method={method}
        setMethod={setMethod}
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
      />
      <div
        className={`Image ${
          {
            gradient: `GradientMethod`,
            div: `DivMethod`,
            svg: `SvgMethod`,
          }[method]
        } ${
          {
            true: `FullScreen`,
            false: `OriginalSize`,
          }[fullScreen]
        }`}
      >
        {/* CSS Gradient method - best performance but has anti aliasing/blur issue on Chrome-based browsers */}
        {method === "gradient" &&
          calculatedArray &&
          calculatedArray.map((row, index) => <Row row={row} key={index} />)}

        {/* DIV method - causes performance issues - too many DOM elements */}
        {method === "div" &&
          calculatedArray &&
          calculatedArray.map((arrChunk) =>
            arrChunk.map((color, index) => <Pixel color={color} key={index} />)
          )}

        {/* SVG Base64 method - good performance, able to use CSS transitions in Chrome-based browsers */}
        {method === "svg" && calculatedArray && (
          <SvgImage calculatedArray={calculatedArray} />
        )}
      </div>
    </div>
  );
}

export default App;
