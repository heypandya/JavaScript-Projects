const billElement = document.getElementById("bill");
const tipElement = document.getElementById("tip");
const btnElement = document.getElementById("calculate");
const totalElement = document.getElementById("total");

function calculate() {
  const bill = billElement.value;
  const tip = tipElement.value;
  const total = (bill * (1 + tip)) / 100;
  totalElement.innerText = `Total: ${total.toFixed(2)}`;
}

btnElement.addEventListener("click", calculate);
billElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculate();
  }
});
