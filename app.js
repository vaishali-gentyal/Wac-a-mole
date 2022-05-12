/** @format */

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");

const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

let result = 0;
let hitPosition;
let currentTime = 0;
let timerId = null;

function randomSquare() {
  if (currentTime != 0) {
    squares.forEach((square) => {
      square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    console.log(randomSquare);
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id;
  }
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});
function moveMole() {
  if(currentTime == 0){
    easy.addEventListener("click", () => {
    timerId = setInterval(randomSquare, 1500);
    easy.style.backgroundColor = "rgb(133 4 4)";
    medium.style.backgroundColor = "rgb(2, 54, 54)";
    hard.style.backgroundColor = "rgb(2, 54, 54)";
    currentTime=30;
    result=0
    countDownTimerId = setInterval(countDown, 1000)
  });
}

  if(currentTime == 0){
  medium.addEventListener("click", () => {
    timerId = setInterval(randomSquare, 1000);
    medium.style.backgroundColor = "rgb(133 4 4)";
    easy.style.backgroundColor = "rgb(2, 54, 54)";
    hard.style.backgroundColor = "rgb(2, 54, 54)";
    currentTime=30;
    result=0
    countDownTimerId = setInterval(countDown, 1000)
  });
}

  if(currentTime == 0){
  hard.addEventListener("click", () => {
    timerId = setInterval(randomSquare, 500);
    hard.style.backgroundColor = "rgb(133 4 4)";
    medium.style.backgroundColor = "rgb(2, 54, 54)";
    easy.style.backgroundColor = "rgb(2, 54, 54)";
    currentTime=30;
    result=0
    countDownTimerId = setInterval(countDown, 1000)
  });
}
}
moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    squares.forEach((square) => {
      square.classList.remove("mole");
    });
    alert("Game Over! Your final score is " + result);
  }
  
}

let countDownTimerId;
