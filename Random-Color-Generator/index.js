const containerElement = document.querySelector(".container");

for (let idx = 0; idx < 30; idx++) {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-container");
  containerElement.appendChild(colorContainerElement);
}

const colorContainerElements = document.querySelectorAll(".color-container");

generateColor();

function generateColor() {
  colorContainerElements.forEach((colorContainerElement) => {
    const newColorCode = randomColor();
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerHTML = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let idx = 0; idx < colorCodeLength; idx++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

containerElement.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("color-container")) {
    const text = target.textContent.trim();
    navigator.clipboard.writeText(text);
    showPopup(event.pageX + 10, event.pageY + 20);
  }
});

function showPopup(x, y) {
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.textContent = "copied!";

  popup.style.position = "absolute";
  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("hide");
    setTimeout(() => popup.remove(), 400);
  }, 1000);
}
