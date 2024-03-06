const containerElement = document.querySelector('.container');

for (let idx = 0; idx < 30; idx++) {
  const colorContainerElement = document.createElement('div');
  colorContainerElement.classList.add("color-container");
  containerElement.appendChild(colorContainerElement);
}

const colorContainerElements = document.querySelectorAll('.color-container');

generateColor();

function generateColor() {
  colorContainerElements.forEach(colorContainerElement => {
    const newColorCode = randomColor()
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerHTML = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6
  let colorCode = ""
  for (let idx=0; idx < colorCodeLength; idx++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

// randomColor()