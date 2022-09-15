let outputDOM = document.getElementById("output");
let buttonDOM = Array.from(document.getElementsByClassName("button"));
buttonDOM.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        outputDOM.innerText = "";
        break;
      case "DEL":
        outputDOM.innerText = outputDOM.innerText.slice(0, -1);
        break;
      case "=":
        try {
          outputDOM.innerText = eval(outputDOM.innerText);
        } catch {
          outputDOM.innerText = "error!";
        }
        break;

      default:
        outputDOM.innerText += e.target.innerText;

        break;
    }
  });
});
