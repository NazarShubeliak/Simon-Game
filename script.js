function randomChoseColor(index) {
  return buttonColors[index];
}

function startGame() {
  for (let i = 0; i < gamePattern.length; i++) {
    $("#" + gamePattern[i].slice(1)).fadeOut(100).fadeIn(100);
  }
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = randomChoseColor(randomNumber);
  gamePattern.push(randomColor);
  startGame();
}

const buttonColors = ["#325d00", "#a31223", "#c9b40e", "#005cb8"];
let gamePattern = [];

nextSequence();
// $(".red").fadeOut(100).fadeIn(100);


