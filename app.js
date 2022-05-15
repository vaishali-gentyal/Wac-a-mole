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
var audio = new Audio("clickSound.mp4");
var gameover = new Audio("gameover.mp3")

function randomSquare() {
  if (currentTime >= 0) {
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
      audio.play();
      hitPosition = null;
    }
  });
});
function moveMole() {
  easy.addEventListener("click", () => {
    timerId = setInterval(randomSquare, 1000);
    easy.disabled = true;
    medium.disabled = true;
    hard.disabled = true;

    easy.style.backgroundColor = "rgb(133 4 4)";
    medium.style.backgroundColor = "rgb(2, 54, 54)";
    hard.style.backgroundColor = "rgb(2, 54, 54)";
    currentTime = 30;
    result = 0;
    countDownTimerId = setInterval(countDown, 1000);
  });
  
  medium.addEventListener("click", () => {
    timerId = setInterval(randomSquare, 750);
    easy.disabled = true;
    medium.disabled = true;
    hard.disabled = true;
    medium.style.backgroundColor = "rgb(133 4 4)";
    easy.style.backgroundColor = "rgb(2, 54, 54)";
    hard.style.backgroundColor = "rgb(2, 54, 54)";
    currentTime = 30;
    result = 0;
    countDownTimerId = setInterval(countDown, 1000);
  });
  
  hard.addEventListener("click", () => {
    timerId = setInterval(randomSquare, 500);
    easy.disabled = true;
    medium.disabled = true;
    hard.disabled = true;
    hard.style.backgroundColor = "rgb(133 4 4)";
    medium.style.backgroundColor = "rgb(2, 54, 54)";
    easy.style.backgroundColor = "rgb(2, 54, 54)";
    currentTime = 30;
    result = 0;
    countDownTimerId = setInterval(countDown, 1000);
  });
}
moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if(currentTime == 1) gameover.play()
  if (currentTime <= 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    score.textContent=0
    squares.forEach((square) => {
      square.classList.remove("mole");
    });
    
    alert("Time Out! Your final score is " + result);
    easy.disabled = false;
    medium.disabled = false;
    hard.disabled = false;
  }
}

let countDownTimerId;
