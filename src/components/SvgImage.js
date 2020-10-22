import React from "react";
import { renderSvg } from "../functions";

const SvgImage = ({ calculatedArray }) => {
  let style = {
    backgroundImage: `url("${renderSvg(calculatedArray)}")`,
  };

  return <div className="SvgBackground" style={style}></div>;
};

export default SvgImage;
