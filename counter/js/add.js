let sayih1DOM = document.querySelector("#sayih1");

let sayi = 0;
sayih1DOM.innerHTML = sayi;
function sayiazalt() {
    sayi = sayi - 1;
    sayih1DOM.innerHTML = sayi;
    if(sayi<0){
    sayih1DOM.style.color= "red"
    }
    else if(sayi==0){
        sayih1DOM.style.color= "black"
    }
}

function sayiarttır() {
  sayi = sayi + 1;
  sayih1DOM.innerHTML = sayi;
  if(sayi>0){
    sayih1DOM.style.color= "green"
    }
    else if(sayi==0){
        sayih1DOM.style.color= "black"
    }
}

function resetle() {
  sayi = 0;
  sayih1DOM.innerHTML = sayi;
  if(sayi==0){
    sayih1DOM.style.color= "black"
    }
}

