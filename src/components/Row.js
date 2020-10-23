import React from "react";

const Row = ({ row }) => {
  function generateBackgroundString(row) {
    let backgroundString = `linear-gradient(90deg, `;
    for (let i = 0; i < row.length; i++) {
      backgroundString += `rgb(${row[i][0]},${row[i][1]},${row[i][2]}) ${
        (i / row.length) * 100
      }%,`;
      backgroundString += `rgb(${row[i][0]},${row[i][1]},${row[i][2]}) ${
        ((i + 1) / row.length) * 100
      }%,`;
    }
    backgroundString = backgroundString.slice(0, -1); // Remove last comma
    backgroundString += `)`;

    return backgroundString;
  }

  let rowStyle = {
    background: generateBackgroundString(row),
  };

  return <div className="Row" style={rowStyle} />;
};

export default Row;
