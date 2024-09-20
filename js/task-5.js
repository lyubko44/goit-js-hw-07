function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body =  document.querySelector("body")
const colorSpan =  document.querySelector('.color')
const changeColorBtn = document.querySelector(".change-color");

function changeColorForBody() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeColorBtn.addEventListener("click", changeColorForBody)
