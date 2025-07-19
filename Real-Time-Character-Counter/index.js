const textAreaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");

textAreaElement.addEventListener("input", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterElement.innerText = textAreaElement.value.length;
}
