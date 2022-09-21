const question = [
  {
    id: 1,
    question:
      "1. Web sayfasında resim göstermek için kullanılan etiket hangisidir.?",
    choice1: "picture",
    choice2: "Image",
    choice3: "img",
    choice4: "src",
    answer: "3",
  },
  {
    id: 2,
    question:
      "2. < b > etiketi yazıları kalın kazmak için kullanılır, bu etiketten başka hangi etiket yazıları kalın yapar ?",
    choice1: "<strong>",
    choice2: "<dar>",
    choice3: " <black>",
    choice4: "<emp>",
    answer: "1",
  },
  {
    id: 3,
    question:
      "3. Etiketler ve yazılar hangi bölüme yazılırsa direkt olarak görüntülenmez ?",

    choice1: "<html>",
    choice2: "<head> ",
    choice3: " <title>",
    choice4: "<body>",
    answer: "2",
  },
];
const questionDOM = document.getElementById("question");
const choice1DOM = document.getElementById("choice1");
const choice2DOM = document.getElementById("choice2");
const choice3DOM = document.getElementById("choice3");
const choice4DOM = document.getElementById("choice4");
const buttonBackDOM = document.getElementById("buttonBack");
const buttonNextDOM = document.getElementById("buttonNext");
const buttonFinishDOM= document.getElementById("buttonFinish")
const buttons = document.querySelectorAll(".answerbtn");
const answerButtonsDOM = document.getElementById("answerButtons");

currentitem = 0;
score = 0;

window.addEventListener("DOMContentLoaded", function () {
  showQuestion(currentitem);
});

function showQuestion(ques) {
  const item = question[ques];
  questionDOM.textContent = item.question;
  choice1DOM.textContent = item.choice1;
  choice2DOM.textContent = item.choice2;
  choice3DOM.textContent = item.choice3;
  choice4DOM.textContent = item.choice4;
  if (item.id == 1) {
    buttonBackDOM.style["display"] = "none";
    buttonFinishDOM.style["display"] = "none";
  }
  if (item.id == 2) {
    buttonNextDOM.style.removeProperty("display");
    buttonBackDOM.style.removeProperty("display");
    buttonFinishDOM.style["display"] = "none";

  }
  if (item.id == 3) {
    buttonNextDOM.style["display"] = "none";
    buttonBackDOM.style["display"] = "none";
    buttonFinishDOM.style.removeProperty("display");


    
  }
}

Object.values(buttons).map((button) => {
  button.addEventListener("click", (event) => {
    if (question[currentitem].answer === event.target.name) {
      button.classList.add("bg-success");
      score = score + 10;
    } else {
      button.classList.add("bg-danger");
    }
  });
});

function buttonFinish(){
questionDOM.innerHTML="SCORE"
answerButtonsDOM.innerHTML=`<p class="correct">Correct answer: ${score/10}</p> <p class="score"> score:${score}</p>`

buttonFinishDOM.style["display"] = "none";


}

function buttonNext() {
  currentitem++;
  showQuestion(currentitem);
  Object.values(buttons).map((button) => {
    button.classList.remove("bg-success");
    button.classList.remove("bg-danger");
  });
}

function buttonPrev() {
  currentitem--;
  showQuestion(currentitem);
  Object.values(buttons).map((button) => {
    button.classList.remove("bg-success");
    button.classList.remove("bg-danger");
  });
}
