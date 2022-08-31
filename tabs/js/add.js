let btn1DOM = document.querySelector(".btn1");
let btn2DOM = document.querySelector(".btn2");
let btn3DOM = document.querySelector(".btn3");
let aciklama1DOM = document.querySelector(".aciklama1");
let aciklama2DOM = document.querySelector(".aciklama2");
let aciklama3DOM = document.querySelector(".aciklama3");
let imgDOM = document.querySelector("#img")

function tarihifunc() {
  aciklama1DOM.style.removeProperty("visibility");
  aciklama2DOM.style["visibility"] = " hidden";
  aciklama3DOM.style["visibility"] = " hidden";
  btn1DOM.classList.add("bg-light")
  btn2DOM.classList.remove("bg-light")
  btn3DOM.classList.remove("bg-light")
  imgDOM.innerHTML= `<img 
  src="https://img-s1.onedio.com/id-61f06c881be169c6230a9286/rev-0/w-620/f-jpg/s-1caca840169da0448bea63a838372ffdf0294de1.jpg"
  alt=""
/>`
}
function yemeklerifunc() {
  aciklama1DOM.style["visibility"] = " hidden";
  aciklama2DOM.style.removeProperty("visibility");
  aciklama3DOM.style["visibility"] = " hidden";
  btn1DOM.classList.remove("bg-light")
  btn2DOM.classList.add("bg-light")
  btn3DOM.classList.remove("bg-light")
  imgDOM.innerHTML= `<img 
  src="https://i.lezzet.com.tr/images-xxlarge-secondary/hatay-yemekleri-hatay-mutfagindan-24-yoresel-tarif-d1414e85-80b9-40a6-8152-416a5c5a159f.jpg"
  alt=""
/>`
}
function gezilecekfunc() {
  aciklama1DOM.style["visibility"] = " hidden";
  aciklama2DOM.style["visibility"] = " hidden";
  aciklama3DOM.style.removeProperty("visibility");
  btn1DOM.classList.remove("bg-light")
  btn2DOM.classList.remove("bg-light")
  btn3DOM.classList.add("bg-light")
  imgDOM.innerHTML= `<img 
  src="https://blog.otelz.com/wp-content/uploads/2018/09/hatay.jpg"
  alt=""
/>`
}
window.addEventListener("load", function () {
  aciklama2DOM.style["visibility"] = " hidden";
  aciklama3DOM.style["visibility"] = " hidden";
  btn1DOM.classList.add("bg-light")
  imgDOM.innerHTML= `<img 
  src="https://img-s1.onedio.com/id-61f06c881be169c6230a9286/rev-0/w-620/f-jpg/s-1caca840169da0448bea63a838372ffdf0294de1.jpg"
  alt=""
/>`
});
