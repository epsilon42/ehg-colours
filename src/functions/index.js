// Generate all 32,768 colors
export const generateAllColors = () => {
  let colors = [];

  // 0 -> 255 for rgb(r,g,b);
  for (let r = 8 - 1; r <= 256 - 1; r += 8) {
    for (let g = 8 - 1; g <= 256 - 1; g += 8) {
      for (let b = 8 - 1; b <= 256 - 1; b += 8) {
        colors.push([r, g, b]);
      }
    }
  }
  return colors;
};

// Using a very large array causes the following console error when using .map 💩: Uncaught RangeError: Maximum call stack size exceeded
// Chunking the array resolves the issue
export function chunkArray(array, size) {
  let result = [];
  let arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }
  return result;
}

// Fibonacci sequence used to make the colors resemble something
export function fib(num) {
  var a = 0;
  var b = 1;
  var temp;

  while (num > 0) {
    temp = b;
    b = b + a;
    a = temp;
    num--;
  }
  return a;
}

// Transforms color palette into an interesting image
export function generatePattern(array, number) {
  let startArr = array;
  let modifier = number;
  let patternedArray = [];

  while (array.length > 0) {
    for (let i = 1; i <= modifier; i += 1) {
      patternedArray.push(startArr.splice(-fib(i), 1).flat(1));
    }
    for (let i = modifier; i > 0; i -= 1) {
      patternedArray.push(startArr.splice(-fib(i), 1).flat(1));
    }

    // Fibonacci seems to work well to produce a nice image, but can try playing around with different algorithms above to splice startArr
  }
  return patternedArray;
}

// Creates SVG image
// Tried first leaving SVG as DOM element and had same performance as DIV method
// Converting to Base64 improved performance
export function renderSvg(array) {
  if (array.length === 0) {
    return false;
  }

  let svgString = `<svg width="256" height="128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" width="256" height="128" fill="" /><g id="">`;

  array.forEach((rows, y) => {
    rows.forEach((color, x) => {
      svgString += `<rect x="${x}" y="${y}" width="1" height="1" fill="${`rgb(${color[0]},${color[1]},${color[2]})`}"/>`;
    });
  });
  svgString += `</g></svg>`;

  const svgDataUrl = convertSvgStringToBase64(svgString);
  return svgDataUrl;
}

function convertSvgStringToBase64(svgString) {
  return "data:image/svg+xml;base64," + window.btoa(svgString);
}
