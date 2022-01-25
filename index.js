var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "dice/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "dice/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 is the winner!!!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 is the winner!!!";
} else {
  document.querySelector("h1").innerText = "Its a Draw!!!";
}
const reloadtButton = document.querySelector("#reload");
function reload() {
  reload = location.reload();
}
reloadButton.addEventListener("click", reload, false);
