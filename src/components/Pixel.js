import React from "react";

const Pixel = ({ color }) => {
  let pixelStyle = {
    backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
  };

  return <div className="Pixel" style={pixelStyle}></div>;
};

export default Pixel;
