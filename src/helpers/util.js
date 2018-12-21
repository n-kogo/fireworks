export function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return parseInt(componentToHex(r) + componentToHex(g) + componentToHex(b), 16);
}

export function rgbArrayToHex(colorArray) {
  if (colorArray.length === 2) { // cas d'un duo de couleur
    return [rgbToHex(colorArray[0][0], colorArray[0][1], colorArray[0][2]),
      rgbToHex(colorArray[1][0], colorArray[1][1], colorArray[1][2])]
  } else if (colorArray.length === 3) {
    return [rgbToHex(colorArray[0], colorArray[1], colorArray[2])];
  }
}
