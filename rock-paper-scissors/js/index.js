const userDOM = document.querySelector(".user");
const computerDOM = document.querySelector(".computer");
const userIconDOM = document.querySelector(".userIcon");
const computerIconDOM = document.querySelector(".computerIcon");
const resultDOM = document.querySelector(".result");


const buttonsDOM = document.querySelectorAll("button");

let userChoise;
let computerChoise;
let result;


buttonsDOM.forEach((buttons) =>
  buttons.addEventListener("click", (e) => {
    userChoise = e.target.id;
    if (userChoise === "rock") {
      userIconDOM.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
      userChoise= "rock"
    }
    if (userChoise === "paper") {
      userIconDOM.innerHTML = `<i class="fa-solid fa-hand"></i>`;
      userChoise="paper"
    }
    if (userChoise === "scissors") {
      userIconDOM.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
      userChoise="scissors"
    }
    choiseComputer();
    getResult();
  })
);

function choiseComputer() {
 
  const  randomChoise = Math.floor(Math.random() * buttonsDOM.length + 1);
  if (randomChoise === 1) {
    computerIconDOM.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    computerChoise="rock"
  }
  if (randomChoise === 2) {
    computerIconDOM.innerHTML = `<i class="fa-solid fa-hand"></i>`;
    computerChoise="paper"

  }
  if (randomChoise === 3) {
    computerIconDOM.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
    computerChoise="scissors"
  }
 
}

function getResult(){
if(computerChoise === userChoise){
    result= "Scoreless"
}
if(userChoise==="rock" && computerChoise === "paper"){
    result= "Computer Win"

}
if(userChoise==="rock" && computerChoise === "scissors"){
    result= "User Win"

}
if(userChoise==="paper" && computerChoise === "rock"){
    result= "User Win"

}
if(userChoise==="paper" && computerChoise === "scissors"){
    result= "Computer Win"

}
if(userChoise==="scissors" && computerChoise === "rock"){
    result= "Computer Win"

}
if(userChoise==="scissors" && computerChoise === "paper"){
    result= "User Win"

}
resultDOM.innerText = `Winning: ${result}`
}