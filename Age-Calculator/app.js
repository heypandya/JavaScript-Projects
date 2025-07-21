const dateElemet = document.getElementById("date");
const btnElement = document.getElementById("age");
const resultElement = document.getElementById("result");

function calculateAge() {
  const birthday = dateElemet.value;
  if (birthday === "") {
    resultElement.innerText = "Please Enter Your birthday";
  } else {
    const age = getAge(birthday);
    resultElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } olds.`;
    dateElemet.value = "";
  }
}

function getAge(birthday) {
  const currentDate = new Date();
  const birthDate = new Date(birthday);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnElement.addEventListener("click", calculateAge);
