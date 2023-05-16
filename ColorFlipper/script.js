
const colors = ["#ff7aa8", "#7aa8ff", "#b37cff", "#ffcf7a", "#7aff94", "#d17a7a"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function flipColor() {
  const colorElement = document.getElementById("color");
  const newColor = getRandomColor();
  colorElement.style.backgroundColor = newColor;
}

const flipButton = document.getElementById("flip-btn");
flipButton.addEventListener("click", flipColor);
flipColor();
