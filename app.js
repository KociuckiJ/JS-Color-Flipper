const colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "black",
  "white",
  "purple",
  "pink",
  "#f1f5f8",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Get a random number between 0-3 (colors[x])
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
