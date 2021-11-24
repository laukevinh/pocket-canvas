export function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255)
    throw "Invalid color component";
  let hexStr = ((r << 16) | (g << 8) | b).toString(16).toLocaleUpperCase();
  for (let i = hexStr.length; i < 6; i++) {
    hexStr = '0' + hexStr;
  }
  return '#' + hexStr;
}

export function hexToRgb(hex) {
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16)
  ];
}