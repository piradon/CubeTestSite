const whiteColor = "rgb(255, 255, 255)";
const blueColor = "rgb(3, 79, 132)";
const redColor = "rgb(189, 61, 58)";
const orangeColor = "rgb(228, 122, 46)";
const greenColor = "rgb(0, 128, 0)";
const yellowColor = "rgb(236, 219, 84)";

const colorArray = [
  whiteColor,
  blueColor,
  redColor,
  orangeColor,
  greenColor,
  yellowColor
];

function changeColor(el) {
  const myStyle = getComputedStyle(el);
  const currentColor = myStyle.backgroundColor;
  el.style.background = getNextColor(currentColor);
}

function getNextColor(currentColor) {
  let colorIndex = colorArray.indexOf(currentColor);
  const nextColor =
    colorIndex < colorArray.length - 1
      ? colorArray[colorIndex + 1]
      : colorArray[0];
  return nextColor;
}
