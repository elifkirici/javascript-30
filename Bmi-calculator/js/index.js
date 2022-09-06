let calculatorBtnDOM = document.getElementById("calculatorBtn");
let resetBtnDOM = document.getElementById("resetBtn");
let weightDOM = document.getElementById("weight");
let heightDOM = document.getElementById("height");
let divisionResultDOM = document.querySelector(".divisionResult");

function btnCalculator() {
  const multi = heightDOM.value * heightDOM.value;
  const division = weightDOM.value / multi;
  returnvalue(division);
}

function returnvalue(divisionp) {
  switch (true) {
    case divisionp < 18:
      divisionResultDOM.innerHTML = `${divisionp.toFixed(2)} </br> UNDER WEIGHT`;
      console.log("under");
      break;
    case divisionp > 18 && divisionp < 25:
      divisionResultDOM.innerHTML = `${divisionp.toFixed(2)} </br> NORMAL`;
      console.log("normal");
      break;
    case divisionp >= 25 && divisionp < 30:
      divisionResultDOM.innerHTML = `${divisionp.toFixed(2)} </br> OVER WEIGHT`;
      console.log("over");
      break;
    case divisionp >= 30:
      divisionResultDOM.innerHTML = `${divisionp.toFixed(2)} </br> OBESE`;
      console.log("obese");
      break;
    default:
      divisionResultDOM.innerHTML = "No value found";
      console.log("default");
  }
}

function btnReset() {
  heightDOM.value = "";
  weightDOM.value = "";
  divisionResultDOM.innerHTML = "";
}
