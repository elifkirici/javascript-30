const passwordInputDOM = document.getElementById("passwordInput");
const buttonCopyDM = document.getElementById("buttonCopy");
const lengthDOM =  document.getElementById("length");
const symbolDOM = document.getElementById("symbol");
const numberDOM = document.getElementById("number");
const lowerCaseDOM = document.getElementById("lowerCase");
const upperCaseDOM = document.getElementById("upperCase");

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbol = ["*", "+", "-", "/"];


function createPassword() {
    let createdPassword = "";
    for (let index = 0; index < lengthDOM.value; index++) {
    if (symbolDOM.checked == true) {

        const randomIndex = Math.floor(Math.random() * symbol.length);
        const item = symbol[randomIndex];
        if(createdPassword.length < lengthDOM.value){
            createdPassword+= item;
      
        }
      }
      if (numberDOM.checked == true) {
        const randomIndex = Math.floor(Math.random() * number.length);
        const item = number[randomIndex];
        if(createdPassword.length < lengthDOM.value)
        {
            createdPassword += item;
        }
      }
      if (lowerCaseDOM.checked == true) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const item = alphabet[randomIndex];
        if(createdPassword.length < lengthDOM.value)
        {
            createdPassword += item.toLowerCase();
        }
      }
      if (upperCaseDOM.checked == true) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const item = alphabet[randomIndex];
        if(createdPassword.length < lengthDOM.value)
        {
            createdPassword += item.toUpperCase();
        }
      }
}

    passwordInputDOM.value = createdPassword

}
function copyText(){
    passwordInputDOM.select();
  navigator.clipboard.writeText(passwordInputDOM.value);
}