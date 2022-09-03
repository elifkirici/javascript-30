let guessBtnDom = document.getElementById("guessBtn");
let tryAgainDom = document.getElementById("tryAgain");
let guessInputDom = document.getElementById("guessInput");
let icon1Dom = document.querySelector(".icon-1");
let icon2Dom = document.querySelector(".icon-2");
let icon3Dom = document.querySelector(".icon-3");
let winDOM = document.querySelector(".win");
let rightanswerDom = document.querySelector(".rightanswer");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function game() {
  heart = 3;
  let randomIndex = Math.ceil(Math.random() * number.length);
  guessBtnDom.addEventListener("click", () => {
    guess(randomIndex);
  });

  tryAgainDom.addEventListener("click", function () {
    heart = 3;
    randomIndex = Math.ceil(Math.random() * number.length);
    icon1Dom.style.removeProperty("color");
    icon2Dom.style.removeProperty("color");
    icon3Dom.style.removeProperty("color");
    tryAgainDom.style["visibility"] = "hidden";
    guessBtnDom.style.removeProperty("visibility");
    guessInputDom.value = "";
    winDOM.innerHTML = "";
    rightanswerDom.innerHTML = "";
  });
}

function guess(randomIndex) {
  if (guessInputDom.value !== randomIndex.toString()) {
    heart--;
    if (heart == 2) {
      icon3Dom.style["color"] = " white";
      guessInputDom.value = "";
    }
    if (heart == 1) {
      icon2Dom.style["color"] = " white";
      guessInputDom.value = "";
    }
    if (heart == 0) {
      icon1Dom.style["color"] = " white";
      guessInputDom.value = "";
      tryAgainDom.style.removeProperty("visibility");
      guessBtnDom.style["visibility"] = "hidden";
      rightanswerDom.innerHTML = "Right Answer is: " + randomIndex;
    }
  }
  if (guessInputDom.value == randomIndex.toString()) {
    guessBtnDom.style["visibility"] = "hidden";
    tryAgainDom.style.removeProperty("visibility");
    winDOM.innerHTML = `<h1>Congratulations You Win</h1>`;
  }
}

window.addEventListener("load", function () {
  tryAgainDom.style["visibility"] = "hidden";

  game();
});
