function randomChoseColor(index) {
  return buttonColors[index];
}

function startGame() {
  let index = gamePattern.length - 1;
  $("#" + gamePattern[index].slice(1)).fadeOut(100).fadeIn(100);
  pickSoundEffect.play();
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = randomChoseColor(randomNumber);
  gamePattern.push(randomColor);
  startGame();
}

function changeInfoTable(text) {
  info.text(text);
}

const buttonColors = ["#325d00", "#a31223", "#c9b40e", "#005cb8"];
const pickSoundEffect = new Audio("./pick.mp3");
let gamePattern = [];
let userChosenColour = [];
let level = 0;
let info = $(".game_info");
let buttons = $(".game_button");
let button_start = $(".button_start");

buttons.on("click", (event) => {
  pickSoundEffect.play();
  userChosenColour.push("#" + event.target.id);
  console.log(userChosenColour);
  console.log(gamePattern);
  // for (let i = 0; i < gamePattern.length; i++) {
  //   if (gamePattern[i] !== userChosenColour[i]) {
  //     changeInfoTable("Game Over");
  //   }
  // }
  // nextSequence();
  // gamePattern = [];
});

button_start.on("click", () => {
  nextSequence();
  button_start.fadeOut();
  changeInfoTable("Start game " + level);
})


