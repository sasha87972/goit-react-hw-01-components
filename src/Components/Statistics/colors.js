function randomRgb() {
  return Math.floor(Math.random() * 256);
}
let randBgd = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
export default randBgd;
